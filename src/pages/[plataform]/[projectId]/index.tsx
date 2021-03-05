import {
  Appstore,
  Github,
  Googlechrome,
  Googleplay,
} from "@icons-pack/react-simple-icons";
import Axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { ProjectsProps } from "../../../components/Slider";
import { Firestore } from "../../../services/firebase";
import PageNotFound from "../../404";
import styles from "./style.module.scss";

interface ProjectPageProps {
  project: ProjectsProps;
  hasProject: boolean;
  readme: string;
}

const Projeto = ({ project, hasProject, readme }: ProjectPageProps) => {
  if (!hasProject) {
    return <PageNotFound />;
  }

  const [indexImage, setIndexImage] = useState(0);
  const [viewImage, setViewImage] = useState(false);

  function toLeftImage() {
    if (project.images[indexImage - 1] != null) {
      setIndexImage(indexImage - 1);
    } else {
      setIndexImage(project.images.length - 1);
    }
  }

  function toRightImage() {
    if (project.images[indexImage + 1] != null) {
      setIndexImage(indexImage + 1);
    } else {
      setIndexImage(0);
    }
  }

  function getImage() {
    return project.images[indexImage];
  }

  function openImage(index: number) {
    setIndexImage(index);
    setViewImage(true);
  }

  return (
    <div className={styles.projeto}>
      <Head>
        <title>{project.name} | Mayconsgs</title>
        <meta name="description" content={project.description} />
      </Head>
      <main className="content">
        <section className={styles.infos + " row"}>
          <img src={project.logo} className={styles.logo} alt={project.name} />
          <div className={styles.dados}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className={styles.plataforms}>
              {project.plataforms.git !== undefined ? (
                <a
                  href={project.plataforms.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size="3.5rem" />
                </a>
              ) : null}
              {project.plataforms.play !== undefined ? (
                <a
                  href={project.plataforms.play}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Googleplay size="3.5rem" />
                </a>
              ) : null}
              {project.plataforms.app !== undefined ? (
                <a
                  href={project.plataforms.app}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Appstore size="3.5rem" />
                </a>
              ) : null}
              {project.plataforms.web !== undefined ? (
                <a
                  href={project.plataforms.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Googlechrome size="3.5rem" />
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className={styles.galery}>
          {project.images.map((imagem, index) => {
            return (
              <img
                alt={project.name}
                key={index}
                src={imagem}
                onClick={() => openImage(index)}
              />
            );
          })}
        </section>

        {project.plataforms.git !== undefined ? (
          <section className={styles.readme}>
            <h3>README.md</h3>
            <ReactMarkdown children={readme} />
          </section>
        ) : null}
      </main>

      <input
        id="check-open-image"
        className={styles.checkOpenImage}
        type="checkbox"
        checked={viewImage}
        onChange={() => setViewImage(false)}
      />

      <section className={styles.openImage}>
        <div className={styles.content + " content"}>
          <button
            className={styles.iconButton + " icon-button " + styles.close}
          >
            <label htmlFor="check-open-image">
              <FiX size="4rem" />
            </label>
          </button>

          <button
            className={styles.iconButton + " icon-button"}
            onClick={toLeftImage}
          >
            <FiChevronLeft size="4rem" />
          </button>

          <img alt={project.name} src={getImage()} />

          <button
            className={styles.iconButton + " icon-button"}
            onClick={toRightImage}
          >
            <FiChevronRight size="4rem" />
          </button>
        </div>
      </section>
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const plataform = ctx.params.plataform as string;
    const projectId = ctx.params.projectId as string;

    let project: ProjectsProps;
    let hasProject: boolean;
    let readme: string;

    await Firestore.collection(plataform)
      .doc(projectId)
      .get()
      .then((dadosDaconsulta) => {
        if (dadosDaconsulta.exists) {
          project = {
            documentId: dadosDaconsulta.id,
            description: dadosDaconsulta.data().description,
            images: dadosDaconsulta.data().images,
            logo: dadosDaconsulta.data().logo,
            name: dadosDaconsulta.data().name,
            plataforms: dadosDaconsulta.data().plataforms,
          };

          hasProject = true;
        } else {
          hasProject = false;
        }
      });

    if (project.plataforms.git !== undefined) {
      const start = project.plataforms.git.indexOf("github.com/") + 11;

      const URL =
        "https://raw.githubusercontent.com/" +
        project.plataforms.git.substring(start) +
        "/master/README.md";
      const { data } = await Axios.get(URL);

      readme = data;
    }

    return {
      props: {
        project,
        hasProject,
        readme,
      },
    };
  } catch (error) {
    return {
      props: {
        project: {},
        hasProject: false,
        readme: "",
      },
    };
  }
};

export { getServerSideProps };

export default Projeto;

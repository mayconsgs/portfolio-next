import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ProjectView from "../../components/ProjectView";
import { ProjectsProps } from "../../components/Slider";
import { Firestore } from "../../services/firebase";
import PageNotFound from "../404";
import styles from "./style.module.scss";

interface GaleriaDeProjetosProps {
  projetos: ProjectsProps[];
}

const GaleriaDeProjetos = ({ projetos }: GaleriaDeProjetosProps) => {
  const router = useRouter();
  const plataform = router.query.plataform as string;

  if (plataform != "apps" && plataform != "sites") {
    return <PageNotFound />;
  }

  const appsDescription =
    "Todos os aplicativos são produzidos com as mais novas e modernas ferramentas, linguagens e tecnologias como: Flutter, Dart, Android Studio, Kotlin, Swift e React Native. Graças a isso, posso fazer aplicações poderosas, fuídas e totalmente compatíveis com iOS e Android. Veja abaixo algumas aplicações já feitas:";
  const sitesDescription =
    "Todos os sites são produzidos com as mais novas e modernas ferramentas, linguagens e tecnologias como: ReactJS, JavaScript, CSS3 e HTML5. Graças a isso, posso fazer sites poderosos, fuídas e totalmente compatíveis com os navegadores. Este portfólio é um exemplo disso. Veja abaixo alguns sites já feitas:";

  return (
    <div className={styles.galeriaDeProjetos}>
      <Head>
        <title>
          {plataform == "apps" ? "Aplicativos" : "Sites"} | Mayconsgs
        </title>
        <meta
          name="description"
          content={plataform == "apps" ? appsDescription : sitesDescription}
        />
      </Head>
      <main className="content">
        <h1> {plataform == "apps" ? "Aplicativos" : "Sites"}</h1>
        <p>{plataform == "apps" ? appsDescription : sitesDescription}</p>

        <section className={styles.grid}>
          {projetos.map((project) => {
            return (
              <ProjectView
                key={project.documentId}
                id={project.documentId}
                directory={plataform}
                name={project.name}
                image={project.thumbnail}
                description={project.description}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    let projetos: ProjectsProps[];
    const plataform = ctx.params.plataform as string;

    const listaDeProjetos = await Firestore.collection(plataform).get();
    projetos = listaDeProjetos.docs.map((e) => ({
      ...e.data(),
      documentId: e.id,
      name: e.data().name,
    }));

    return {
      props: {
        projetos,
      },
    };
  } catch (error) {
    return {
      props: {
        projetos: [],
      },
    };
  }
};

export default GaleriaDeProjetos;

import { useRouter } from "next/router";
import React from "react";
import styles from "./style.module.scss";

interface ProjectViewInterface {
  id: string;
  image: string;
  directory: string;
  description: string;
  name: string;
}

const ProjectView: React.FC<ProjectViewInterface> = ({
  id,
  image,
  description,
  name,
  directory,
}) => {
  const router = useRouter();

  function openProject() {
    router.push(`/${directory}/${id}`);
  }

  return (
    <article className={styles.projeto}>
      <img onClick={openProject} src={image} alt={name} />
      <main className={styles.infos}>
        <span style={{ cursor: "pointer" }} onClick={openProject}>
          Nome do projeto:{" "}
        </span>
        <p style={{ cursor: "pointer" }} onClick={openProject}>
          {name}
        </p>
        <span>Descrição do projeto:</span>
        <p>{description}</p>
      </main>
    </article>
  );
};

export default ProjectView;

import { useRouter } from "next/router";
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
      <img loading="lazy" onClick={openProject} src={image} alt={name} />
      <main>
        <strong onClick={openProject}>Nome do projeto:</strong>
        <p onClick={openProject}>{name}</p>

        <strong>Descrição do projeto:</strong>
        <p>{description}</p>
      </main>
    </article>
  );
};

export default ProjectView;

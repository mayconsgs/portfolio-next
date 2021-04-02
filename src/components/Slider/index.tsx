import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

interface PlataformsInterface {
  git?: string;
  play?: string;
  app?: string;
  web?: string;
}

export interface ProjectsProps {
  documentId: string;
  name: string;

  thumbnail?: string;
  description?: string;
  plataforms?: PlataformsInterface;
  images?: string[];
  logo?: string;
}

interface SliderProps {
  plataform: string;
  projects: ProjectsProps[];
  isOpen: boolean;
}

const Slider = ({ projects, plataform, isOpen }: SliderProps) => {
  return (
    <div
      className={styles.slider}
      style={isOpen ? { padding: 1 + "rem" } : undefined}
    >
      {projects.map((project) => {
        return (
          <Link
            key={project.documentId}
            href={`/${plataform}/${project.documentId}`}
          >
            <figure style={isOpen ? { height: "18rem" } : undefined}>
              <img
                loading="lazy"
                src={project.thumbnail}
                alt={project.name}
                style={isOpen ? { height: "18rem" } : undefined}
              />
              <figcaption>{project.name}</figcaption>
            </figure>
          </Link>
        );
      })}
    </div>
  );
};

export default Slider;

import { Icon } from "@icons-pack/react-simple-icons";
import React from "react";
import styles from "./style.module.scss";

interface Conhecimento {
  technology: string;
  percent: number;
  icon: Icon;
}

const GraficoDeConhecimento: React.FC<Conhecimento> = ({
  technology,
  percent,
  icon: IconTechnology,
}) => {
  return (
    <div className={styles.grafico}>
      <div className={styles.technology}>
        {" "}
        <IconTechnology size="2.5rem" /> {technology}
      </div>
      <div className={styles.borderBar}>
        <div className={styles.bar} style={{ width: `${percent}%` }}>
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default GraficoDeConhecimento;

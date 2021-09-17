import { IconType } from "react-icons";
import styles from "./style.module.scss";
interface Conhecimento {
  technology: string;
  percent: number;
  icon: IconType;
}

const GraficoDeConhecimento: React.FC<Conhecimento> = ({
  technology,
  percent,
  icon: IconTechnology,
}) => {
  return (
    <div className={styles.grafico}>
      <div>
        <IconTechnology size="2.5rem" /> {technology}
      </div>

      <div>
        <div style={{ width: `${percent}%` }}>{percent}%</div>
      </div>
    </div>
  );
};

export default GraficoDeConhecimento;

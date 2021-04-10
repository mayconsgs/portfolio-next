import { FiX } from "react-icons/fi";
import styles from "./style.module.scss";

interface PopUpProps {
  status: string;
  message: string;
  title: string;
  setVisibility: () => void;
}

const PopUp = ({ status, message, title, setVisibility }: PopUpProps) => {
  const isOk = status == "ok";

  return (
    <div className={`${isOk ? styles.ok : styles.error} ${styles.popUp}`}>
      <div>
        <span>{title}</span>
        <p>{message}</p>
      </div>

      <button
        className={`${styles.iconButton} icon-button`}
        onClick={setVisibility}
      >
        <FiX size="1.8rem" />
      </button>
    </div>
  );
};

export default PopUp;

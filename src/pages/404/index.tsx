import { useRouter } from "next/router";
import React from "react";
import RaisedButton from "../../components/RaisedButton";
import styles from "./style.module.scss";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <div className={styles.pageNotFound}>
      <main className={styles.content + " content"}>
        <img src="assets/erro404.svg" alt="Error 404" />
        <span>
          Opa, parece que não encontramos essa página. <br />É melhor voltar
          para o site.
        </span>
        <RaisedButton onClick={() => router.push("/")}>
          Voltar para o site
        </RaisedButton>
      </main>
    </div>
  );
}

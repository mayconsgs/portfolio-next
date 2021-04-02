import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import RaisedButton from "../../components/RaisedButton";
import styles from "./style.module.scss";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <div className={styles.pageNotFound}>
      <Head>
        <meta name="description" content="Página não encontrada." />
        <title>404</title>
      </Head>
      <main className={styles.content + " content"}>
        <img loading="lazy" src="assets/erro404.svg" alt="Error 404" />
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

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Fragment } from "react";
import LoadingTopBar from "../../components/LoadingTopBar";
import styles from "./style.module.scss";

const Head = dynamic(import("next/head"), {
  loading: () => <LoadingTopBar />,
});
const RaisedButton = dynamic(import("../../components/RaisedButton"), {
  loading: () => <LoadingTopBar />,
});

export default function PageNotFound() {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <meta name="description" content="Página não encontrada." />
        <title>404</title>
      </Head>
      <main className={styles.content + " content"}>
        <div className={styles.code}>
          <span>{"{"}</span>
          <br />
          <span className={styles.key}>{'"error"'}</span>
          <span className={styles.operator}>:</span>
          <span className={styles.number}>{404}</span>
          <span className={styles.operator}>,</span>
          <br />
          <span className={styles.key}>{'"messege"'}</span>
          <span className={styles.operator}>:</span>
          <span className={styles.string}>{'"Page not found."'}</span>
          <br />
          <span>{"}"}</span>
        </div>
        <span>
          Opa, parece que não encontramos essa página. <br />É melhor voltar
          para o site.
        </span>
        <RaisedButton onClick={() => router.push("/")}>
          Voltar para o site
        </RaisedButton>
      </main>
    </Fragment>
  );
}

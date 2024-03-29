import {
  collection,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import LoadingTopBar from "../components/LoadingTopBar";
import { ProjectsProps } from "../components/Slider";
import { Firestore } from "../services/firebase";
import styles from "./style.module.scss";

const Head = dynamic(import("next/head"), {
  loading: () => <LoadingTopBar />,
});
const RaisedButton = dynamic(import("../components/RaisedButton"), {
  loading: () => <LoadingTopBar />,
});
const Slider = dynamic(import("../components/Slider"), {
  loading: () => <LoadingTopBar />,
});

interface HomeProps {
  apps: ProjectsProps[];
  sites: ProjectsProps[];
}

const Home = ({ apps, sites }: HomeProps) => {
  const [appsOpen, setAppsOpen] = useState(false);
  const [sitesOpen, setSitesOpen] = useState(false);

  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Portfólio de projetos do programador Maycon Santos."
        />
        <title>Inicio | Mayconsgs</title>
      </Head>
      <main className={`content ${styles.content}`}>
        <p>Olá, meu nome é Maycon Santos e este é meu Portfólio</p>

        <section className={styles.apps}>
          <h1
            id="h1Apps"
            onClick={() => {
              setAppsOpen(!appsOpen);
              setSitesOpen(false);
            }}
          >
            Aplicativos
            {/* <FiChevronDown size="3rem" /> */}
          </h1>
          Flutter e ReactNative
          <Slider plataform="apps" projects={apps} isOpen={appsOpen} />
        </section>

        <section className={styles.sites}>
          <h1
            id="h1Sites"
            onClick={() => {
              setSitesOpen(!sitesOpen);
              setAppsOpen(false);
            }}
          >
            Sites
            {/* <FiChevronDown size="3rem" /> */}
          </h1>
          Flutter e ReactJS
          <Slider plataform="sites" projects={sites} isOpen={sitesOpen} />
        </section>

        <RaisedButton
          onClick={() => {
            router.push("/contatos");
          }}
        >
          Contate-me
        </RaisedButton>
      </main>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    let appsDocumentsSnapshot: QueryDocumentSnapshot[] = [];
    let sitesDocumentsSnapshot: QueryDocumentSnapshot[] = [];

    const appsCollection = collection(Firestore, "apps");
    const sitesCollection = collection(Firestore, "sites");

    const [appsDocuments, sitesDocuments] = await Promise.all([
      getDocs(appsCollection),
      getDocs(sitesCollection),
    ]);

    if (!appsDocuments.empty) appsDocumentsSnapshot = appsDocuments.docs;
    if (!sitesDocuments.empty) sitesDocumentsSnapshot = sitesDocuments.docs;

    const apps = appsDocumentsSnapshot.map((e) => ({
      documentId: e.id,
      ...e.data(),
    }));

    const sites = sitesDocumentsSnapshot.map((e) => ({
      documentId: e.id,
      ...e.data(),
    }));

    return {
      props: {
        apps,
        sites,
      },
    };
  } catch (error) {
    return {
      props: {
        apps: [],
        sites: [],
      },
    };
  }
};

export default Home;

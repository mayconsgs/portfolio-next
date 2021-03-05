import firebase from "firebase";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import RaisedButton from "../components/RaisedButton";
import Slider, { ProjectsProps } from "../components/Slider";
import { Firestore } from "../services/firebase";
import styles from "./style.module.scss";

interface HomeProps {
  apps: [];
  sites: [];
}

const Home = ({ apps, sites }: HomeProps) => {
  const [appsOpen, setAppsOpen] = useState(false);
  const [sitesOpen, setSitesOpen] = useState(false);

  const router = useRouter();

  return (
    <div className={styles.inicio}>
      <Head>
        <meta
          name="description"
          content="Portfólio de projetos do programador Maycon Santos."
        />
        <meta
          name="keywords"
          content="mayconsgs, programador, desenvolvedor, web, sistemas, Maycon, Santos, Flutter, React, JavaScript, Mobile, iOS, Android, Aplicativo"
        />
      </Head>
      <main className={`${styles.content} content`}>
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
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    let appsDocumentsSnapshot: firebase.firestore.QueryDocumentSnapshot[];
    let sitesDocumentsSnapshot: firebase.firestore.QueryDocumentSnapshot[];

    await Firestore.collection("apps")
      .get()
      .then((appsDocuments) => {
        if (!appsDocuments.empty) appsDocumentsSnapshot = appsDocuments.docs;
      });

    const apps = appsDocumentsSnapshot.map((e) => {
      const project: ProjectsProps = {
        documentId: e.id,
        name: e.data().name,
        thumbnail: e.data().thumbnail,
      };

      return project;
    });

    await Firestore.collection("sites")
      .get()
      .then((sitesDocuments) => {
        if (!sitesDocuments.empty) sitesDocumentsSnapshot = sitesDocuments.docs;
      });

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
    console.log(error);
  }
};

export default Home;

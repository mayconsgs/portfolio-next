import dynamic from "next/dynamic";
import { FormEvent, Fragment, FunctionComponent, useState } from "react";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import LoadingTopBar from "../../components/LoadingTopBar";
import { Firestore } from "../../services/firebase";
import styles from "./style.module.scss";

const Head = dynamic(import("next/head"), {
  loading: () => <LoadingTopBar />,
});
const PopUp = dynamic(import("../../components/PopUp"), {
  loading: () => <LoadingTopBar />,
});
const RaisedButton = dynamic(import("../../components/RaisedButton"), {
  loading: () => <LoadingTopBar />,
});
const TextArea = dynamic(import("../../components/TextArea"), {
  loading: () => <LoadingTopBar />,
});
const TextBox = dynamic(import("../../components/TextBox"), {
  loading: () => <LoadingTopBar />,
});

const Contatos: FunctionComponent = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [menssagem, setMenssagem] = useState("");

  const [notify, setNotify] = useState({
    title: "",
    message: "",
    visible: false,
    status: "",
  });

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await Firestore.collection("message")
      .add({
        nome,
        email,
        assunto,
        menssagem,
      })
      .then((reference) => {
        setNotify({
          title: "",
          message: "Mensagem encaminhada. Em breve você receberá um retorno.",
          visible: true,
          status: "ok",
        });

        setNome("");
        setEmail("");
        setAssunto("");
        setMenssagem("");
      })
      .catch((error) => {
        setNotify({
          title: "",
          message: "Algo deu errado ao enviar a mensagem",
          visible: true,
          status: "error",
        });
      });
  }

  function invalidForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setNotify({
      title: "",
      message: "Preencha os campos corretamente.",
      visible: true,
      status: "error",
    });
  }

  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Envie-me um mensagem ou siga-me nas redes sociais"
        />
        <title>Contatos | Mayconsgs</title>
      </Head>
      <main className={`${styles.content} content row`}>
        <section className={styles.links}>
          <div className={styles.conteudo}>
            <h1>Entrar em Contato</h1>
            <a
              className={styles.socialItem}
              href="mailto:maycon.s.santos44@gmail.com"
            >
              <FiMail size="3rem" />
              E-mail
            </a>
            <a className={styles.socialItem} href="callto:11979967858">
              <FiPhone size="3rem" />
              Celular
            </a>
            <a
              className={styles.socialItem}
              href="http://facebook.com/mayconsgs"
              target="blank"
            >
              <FiFacebook size="3rem" />
              Facebook
            </a>
            <a
              className={styles.socialItem}
              href="http://instagram.com/mayconsgs"
              target="blank"
            >
              <FiInstagram size="3rem" />
              Instagram
            </a>
            <a
              className={styles.socialItem}
              href="http://linkedin.com/in/mayconsgs/"
              target="blank"
            >
              <FiLinkedin size="3rem" />
              Linkedin
            </a>
            <a
              className={styles.socialItem}
              href="http://github.com/mayconsgs"
              target="blank"
            >
              <FiGithub size="3rem" />
              GitHub
            </a>
          </div>
        </section>

        <section className={styles.form}>
          <form onSubmit={sendMessage} onInvalid={invalidForm}>
            <h1>Envie-me uma menssagem</h1>
            <TextBox
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <TextBox
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextBox
              placeholder="Assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              required
            />
            <TextArea
              placeholder="Menssagem"
              value={menssagem}
              onChange={(e) => setMenssagem(e.target.value)}
              required
            />
            <RaisedButton type="submit">Enviar</RaisedButton>
          </form>
        </section>
      </main>

      {notify.visible && (
        <PopUp
          message={notify.message}
          title={notify.title}
          status={notify.status}
          setVisibility={() => {
            setNotify({
              title: "",
              message: "",
              visible: false,
              status: "",
            });
          }}
        />
      )}
    </Fragment>
  );
};

export default Contatos;

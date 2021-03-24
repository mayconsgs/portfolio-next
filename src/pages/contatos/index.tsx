import React, { FormEvent, FunctionComponent, useState } from "react";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import PopUp from "../../components/PopUp";
import RaisedButton from "../../components/RaisedButton";
import TextArea from "../../components/TextArea";
import TextBox from "../../components/TextBox";
import { Firestore } from "../../services/firebase";
import styles from "./style.module.scss";

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

    const form = {
      nome,
      email,
      assunto,
      menssagem,
    };

    await Firestore.collection("mensagens").add(form);

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
    <div className={styles.contatos}>
      <main className={`${styles.content} content row`}>
        <section className={styles.links}>
          <div className={styles.conteudo}>
            <h1>Entrar em Contato</h1>
            <a
              className={styles.socialItem}
              href="mailto:maycon.s.santos44@gmail.com"
            >
              <FiMail size="3rem" />
              maycon.s.santos44@gmail.com
            </a>
            <a className={styles.socialItem} href="callto:11979967858">
              <FiPhone size="3rem" />
              (11) 97996-7858
            </a>
            <a
              className={styles.socialItem}
              href="http://facebook.com/mayconsgs"
              target="blank"
            >
              <FiFacebook size="3rem" />
              facebook.com/mayconsgs
            </a>
            <a
              className={styles.socialItem}
              href="http://instagram.com"
              target="blank"
            >
              <FiInstagram size="3rem" />
              Ainda não disponivel
            </a>
            <a
              className={styles.socialItem}
              href="http://linkedin.com/in/mayconsgs/"
              target="blank"
            >
              <FiLinkedin size="3rem" />
              linkedin.com/in/mayconsgs
            </a>
            <a
              className={styles.socialItem}
              href="http://github.com/mayconsgs"
              target="blank"
            >
              <FiGithub size="3rem" />
              github.com/mayconsgs
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
    </div>
  );
};

export default Contatos;

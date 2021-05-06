const Head = dynamic(import("next/head"), {
  loading: () => <LoadingTopBar />,
});
import dynamic from "next/dynamic";
import { Fragment, FunctionComponent } from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import LoadingTopBar from "../../components/LoadingTopBar";
import styles from "./style.module.scss";

const Curriculo: FunctionComponent = () => {
  const yersOld =
    new Date(
      new Date().getTime() - new Date("12/03/2001").getTime()
    ).getUTCFullYear() - 1970;

  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="Currículo de Maycon Santos, desenvolvedor de aplicativos e sites."
        />
        <title>Currículo | Mayconsgs</title>
      </Head>
      <main className={`content ${styles.content}`}>
        <div className={styles.topcs}>
          <section>
            <h1>Maycon Santos </h1>
            <h2>Dados Pessoais </h2>
            <ul>
              <li>Idade: {yersOld} anos</li>
              <li>Estado civil: Solteiro</li>
              <li>Endereço: R. Salvador, Mauá – SP, 09381-030</li>
            </ul>
          </section>

          <section>
            <h2>Objetivo</h2>
            <ul>
              <li>Desenvolvedor Mobile;</li>
              <li>Programador Jr;</li>
              <li>Técnico em informática.</li>
            </ul>
          </section>

          <section>
            <h2>Contatos</h2>
            <ul>
              <li>
                <FiPhone size="2.5rem" /> Telefone:{" "}
                <a href="callto:+55 11 979967858"> (11) 97996-7858</a>
              </li>
              <li>
                <FiMail size="2.5rem" />
                E-mail:{" "}
                <a href="mailto:maycon.s.santos44@gmail.com">
                  {" "}
                  maycon.s.santos44@gmail.com
                </a>
              </li>
              <li>
                <FiLinkedin size="2.5rem" />
                Linkedin:{" "}
                <a href="https://www.linkedin.com/in/mayconsgs" target="blank">
                  {" "}
                  linkedin.com/in/mayconsgs
                </a>
              </li>
              <li>
                <FiGithub size="2.5rem" />
                GitHub:{" "}
                <a
                  href="https://github.com/Mayconsgs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Mayconsgs
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Habilidades</h2>
            <ul>
              <li>Desenvolvimento Web;</li>
              <li>APIs do Firebase;</li>
              <li>Desenvolvimento cross platform (Flutter);</li>
              <li>Desenvolvimento Android nativo;</li>
              <li>Facilidade para trabalhar em equipe;</li>
              <li>
                Facilidade com lógica, matemática e resolução de problemas;
              </li>
            </ul>
          </section>

          <section>
            <h2>Formação Acadêmica</h2>
            <ul>
              <li>
                <ul>
                  <h3>Superior – Análise e Desenvolvimento de Sistemas</h3>
                  <li>Instituição: Fatec São Caetano do Sul</li>
                  <li>Cidade: São Caetano do Sul – SP</li>
                  <li>Inicio/Término: 08/2019 – 06/2022</li>
                </ul>
              </li>

              <li>
                <ul>
                  <h3>Técnico - Informática</h3>
                  <li>Instituição: ETEC de Mauá</li>
                  <li>Cidade: Mauá - SP</li>
                  <li>Inicio/Término: 07/2017 – 12/2018</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2>Idiomas</h2>
            <ul>
              <li>
                <ul>
                  <h3>Inglês</h3>
                  <li>Situação: (ainda em aprendizado)</li>
                  <li>Leitura: Básica</li>
                  <li>Escrita: Básica</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
        <section>
          <h2>Informações complementares</h2>
          <ul>
            <li>
              <ul>
                <h3>TCC do Curso Técnico</h3>
                <p>
                  Nome do Projeto: Enigma do Aluno <br />
                  Inicio/Término: 02/2018 – 12/2018
                </p>

                <p>
                  Descrição Enigma do Aluno foi um aplicativo Android, voltado
                  para área acadêmica. Que visava melhorar a comunicação entre
                  alunos e professores dentro e fora das instituições, sem que o
                  aluno invadisse a vida pessoal dos professores.
                </p>

                <p>
                  Durante o projeto fiquei responsável pelo banco de dados e
                  codificação da parte visual da aplicação. Para o banco de
                  dados utilizamos a API do Firebase, onde os dados foram
                  organizados de maneira hierárquica. Na parte visual do app,
                  foi utilizado unicamente XML dentro da IDE do Android Studio.
                  Toda a aplicação foi codificada através dessa IDE.
                </p>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </Fragment>
  );
};

export default Curriculo;

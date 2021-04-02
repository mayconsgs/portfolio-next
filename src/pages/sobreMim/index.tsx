import {
  Dart,
  Firebase,
  Flutter,
  Javascript,
  NodeDotJs,
  ReactJs,
  Sass,
  Typescript,
} from "@icons-pack/react-simple-icons";
import Head from "next/head";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import GraficoDeConhecimento from "../../components/GraficoDeConhecimento";
import styles from "./style.module.scss";

const SobreMim: FunctionComponent = () => {
  const yersOld =
    new Date(
      new Date().getTime() - new Date("12/03/2001").getTime()
    ).getUTCFullYear() - 1970;

  return (
    <div className={styles.sobreMim}>
      <Head>
        <title>Sobre min | Mayconsgs</title>
        <meta
          name="description"
          content="Aqui você pode saber um pouco mais sobre mim, meus conhecimentos e feitos."
        />
      </Head>
      <main className="content">
        <section className="historia">
          <h1>Sobre mim</h1>

          <p>
            Olá, meu nome é Maycon Santos, tenho {yersOld} anos e este é meu
            portfólio. Lugar onde apresento meu trabalho como desenvolvedor web
            e mobile.
          </p>

          <p>
            Aqui você vai encontrar dos mais diversos projetos. E como se já não
            fosse o bastante, boa parte dos projetos tem seu código
            disponibilizado no{" "}
            <a href="http://github.com/mayconsgs" target="blank">
              GitHub
            </a>
            , onde deixo disponibilizado todos os meus projetos para que possam
            ver e avaliar.
          </p>

          <p>
            Comecei no ramo da programação bem jovem, tinha 15 anos durante meu
            curso técnico de Informática na Etec Mauá, foi lá que aprendi sobre
            banco de dados, programação web, lógica de programação, programação
            mobile entre outras coisas. Me desenvolvi muito lá.
          </p>

          <p>
            Com o tempo fui me destacando na área, e decidi viver aqui como
            profissão, passei a estudar mais a fundo as tecnologias. Aprendi
            ReactJS, Flutter, Node.JS entre outras coisas.
          </p>

          <p>
            Esse portfólio mesmo, foi feito em ReactJS, e usa como back-end APIs
            do Firebase. Essas coisas facilitaram muito minha vida como Dev.
          </p>

          <p>
            Estou em constante processo de aprendizagem. Atualmente estou
            estudando Flutter, já estou em nível intermediário no Framework. E
            pretendo avançar ainda mais.
          </p>
        </section>
        <section>
          <h2>Nível de conhecimento</h2>
          <div className={styles.conhecimento}>
            <GraficoDeConhecimento
              icon={Dart}
              technology="Dart:"
              percent={95}
            />
            {/* eslint-disable-next-line */}
            <GraficoDeConhecimento
              icon={Javascript}
              // eslint-disable-next-line no-script-url
              technology="JavaScript:"
              percent={95}
            />
            <GraficoDeConhecimento
              icon={Sass}
              technology="SCSS:"
              percent={90}
            />
            <GraficoDeConhecimento
              icon={Flutter}
              technology="Flutter:"
              percent={85}
            />
            <GraficoDeConhecimento
              icon={ReactJs}
              technology="React.js:"
              percent={85}
            />
            <GraficoDeConhecimento
              icon={Typescript}
              technology="TypeScript:"
              percent={80}
            />
            <GraficoDeConhecimento
              icon={NodeDotJs}
              technology="Node.js:"
              percent={80}
            />
            <GraficoDeConhecimento
              icon={Firebase}
              technology="Firebase:"
              percent={75}
            />
          </div>
        </section>
        <section className="empresas">
          <h2>Para empresas</h2>
          <p>
            Atualmente estou sem um emprego fixo. Aceito cargos para trabalhar
            com as tecnologias acima mas, também estou disposto a migrar para
            outras tecnologias. Caso tenha se interessado meu currículo está
            disponível
            <Link href="/curriculo">
              <a> aqui</a>
            </Link>{" "}
            ou você pode falar diretamente comigo. Basta utilizar uma de minhas
            formas de
            <Link href="/contatos">
              <a> contato</a>
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default SobreMim;

import dynamic from "next/dynamic";
import React, { Fragment, FunctionComponent } from "react";
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import LoadingTopBar from "../../components/LoadingTopBar";
import styles from "./style.module.scss";

const Head = dynamic(import("next/head"), {
  loading: () => <LoadingTopBar />,
});
const Link = dynamic(import("next/link"), {
  loading: () => <LoadingTopBar />,
});
const GraficoDeConhecimento = dynamic(
  import("../../components/GraficoDeConhecimento"),
  {
    loading: () => <LoadingTopBar />,
  }
);

const SobreMim: FunctionComponent = () => {
  const yersOld =
    new Date(
      new Date().getTime() - new Date("12/03/2001").getTime()
    ).getUTCFullYear() - 1970;

  return (
    <Fragment>
      <Head>
        <title>Sobre min | Mayconsgs</title>
        <meta
          name="description"
          content="Aqui você pode saber um pouco mais sobre mim, meus conhecimentos e feitos."
        />
      </Head>
      <main className="content">
        <section>
          <h1>Sobre mim</h1>

          <p>
            Olá, meu nome é Maycon Santos, tenho {yersOld} anos e este é meu
            portfólio. Lugar onde apresento meu trabalho como desenvolvedor
            full-stack.
          </p>

          <p>
            Aqui você vai encontrar dos mais diversos projetos. Boa parte dos
            projetos tem seu código disponibilizado no{" "}
            <a href="http://github.com/mayconsgs" target="blank">
              GitHub
            </a>
            , onde deixo disponibilizado todos os meus projetos para que possam
            ser e avaliados e saibam como é a organização dos meus códigos.
          </p>

          <p>
            Comecei no ramo da programação aos 15 anos, durante meu curso
            técnico de Informática na Etec Mauá, foi lá que tive toda a base da
            programação. E a partir dali, passei a me desenvolver de maneira
            autodidata, atravez de documentações e sites das tecnologias em que
            eu tinha interesse.
          </p>

          <p>
            Com o tempo fui me destacando na área, e decidi viver isso como
            profissão, passei a estudar mais a fundo as tecnologias. Aprendi
            Flutter, React.js, Node.js entre outras coisas.
          </p>

          <p>
            Esse portfólio por exemplo, foi feito utilizando Next.js um
            Framework que utiliza React.js para criação de interfaces, e no
            back-end foi utilizado o Firebase assim pude de maneira simples,
            implementar muitas funcionalidades ao meu site.
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
              icon={SiDart}
              technology="Dart:"
              percent={95}
            />
            {/* eslint-disable-next-line */}
            <GraficoDeConhecimento
              icon={SiJavascript}
              // eslint-disable-next-line no-script-url
              technology="JavaScript:"
              percent={95}
            />
            <GraficoDeConhecimento
              icon={SiSass}
              technology="SCSS:"
              percent={90}
            />
            <GraficoDeConhecimento
              icon={SiFlutter}
              technology="Flutter:"
              percent={85}
            />
            <GraficoDeConhecimento
              icon={SiReact}
              technology="React.js:"
              percent={85}
            />
            <GraficoDeConhecimento
              icon={SiTypescript}
              technology="TypeScript:"
              percent={80}
            />
            <GraficoDeConhecimento
              icon={SiNodeDotJs}
              technology="Node.js:"
              percent={80}
            />
            <GraficoDeConhecimento
              icon={SiFirebase}
              technology="Firebase:"
              percent={75}
            />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default SobreMim;

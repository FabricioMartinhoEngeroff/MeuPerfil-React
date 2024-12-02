import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Fabrício!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Fabricio sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                👋 Oi, tudo bem? Sou o Fabrício Martinho Engeroff, um desenvolvedor fullstack apaixonado por tecnologia e inovação. Minha jornada começou aos 14 anos, quando ganhei meu primeiro computador e me encantei pelo mundo por trás das telas.
            </p>
            <p className={styles.paragrafo}>
                🚀 Especialista em desenvolvimento backend com Java, Spring Boot, APIs REST e PostgreSQL. Recentemente, ampliei minhas habilidades para o frontend com React, criando interfaces dinâmicas e interativas. Também domino ferramentas como Docker e CI/CD para garantir a entrega eficiente de aplicações.
            </p>
            <p className={styles.paragrafo}>
                💪 Além de minhas habilidades técnicas, invisto em comunicação e soft skills. Produzo blogs técnicos no LinkedIn para compartilhar aprendizados, participo de workshops para aprimorar trabalho em equipe e sou fluente em inglês técnico e avançado.
            </p>
            <p className={styles.paragrafo}>
                ⚽ Fora do ambiente de trabalho, busco equilíbrio com práticas esportivas regulares, que contribuem para meu bem-estar e produtividade.  
            </p>
            <p className={styles.paragrafo}>
                🎯 Estou sempre em busca de novos desafios, onde posso aplicar minhas habilidades para criar soluções inovadoras e de impacto, colaborando com equipes multidisciplinares em projetos que façam a diferença.
            </p>
        </PostModelo>
    );
}

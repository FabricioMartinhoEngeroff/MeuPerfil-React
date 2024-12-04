import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim...">
      <h3 className={styles.subtitulo}>Fabrício Martinho Engeroff</h3>

      <p className={styles.paragrafo}>
        🖥️ Desenvolvedor Fullstack | Especialista em Java, React e DevOps
      </p>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        👋 Sobre Mim
      </h4>
      <p className={styles.paragrafo}>
        Olá! Sou o Fabrício, e minha paixão por tecnologia começou aos 14 anos,
        quando ganhei meu primeiro computador. Desde então, a curiosidade em
        explorar sistemas e desvendar sua lógica me inspirou a seguir uma
        jornada emocionante no desenvolvimento de software. Hoje, transformei
        essa paixão em uma carreira sólida, unindo criatividade e técnica para
        construir soluções que fazem a diferença! 🚀
      </p>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        🔧 Backend:
      </h4>
      <ul className={styles.lista}>
        <li>• Java: Spring Boot, Spring Security, JPA (Hibernate).</li>
        <li>• Banco de Dados: PostgreSQL, MySQL.</li>
        <li>• APIs RESTful: Design, implementação e consumo.</li>
        <li>• Testes Automatizados: JUnit, Mockito.</li>
        <li>• Mensagerias: Apache Kafka, RabbitMQ.</li>
        <li>• Controle de Versionamento de Banco de Dados: Flyway.</li>
        <li>• Gerenciamento de Dependências: Maven.</li>
        <li>• Documentação de APIs: Swagger/OpenAPI.</li>
        <li>• Autenticação e Autorização: OAuth2, JWT.</li>
      </ul>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        🐳 DevOps:
      </h4>
      <ul className={styles.lista}>
        <li>• Contêineres e Orquestração: Docker, Kubernetes.</li>
        <li>
          • Pipelines CI/CD: Jenkins, GitHub Actions, GitLab CI/CD, Bitbucket
          Pipelines.
        </li>
        <li>• Servidores Web e Proxy: Nginx, Apache.</li>
        <li>• Cache e Armazenamento: Redis, Memcached.</li>
      </ul>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        🌐 Frontend:
      </h4>
      <ul className={styles.lista}>
        <li>• JavaScript, HTML, CSS.</li>
        <li>
          • React: Hooks (useState, useEffect, useContext), Redux, Context API,
          Zustand.
        </li>
        <li>• Testes: Jest, React Testing Library.</li>
        <li>• Ferramentas: ES6+, Webpack, Vite, Babel, npm/yarn.</li>
        <li>• Roteamento: React-router-dom, rotas protegidas.</li>
        <li>• APIs: Axios, Fetch API.</li>
      </ul>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        🏛️ Arquitetura e Metodologias:
      </h4>
      <ul className={styles.lista}>
        <li>• Clean Architecture, Padrão MVC.</li>
        <li>• Domain-Driven Design (DDD).</li>
        <li>• Microserviços e Monólitos Modulares.</li>
        <li>• Princípios SOLID e Design Patterns.</li>
        <li>• Metodologias Ágeis: Scrum, Kanban.</li>
      </ul>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        🎓 Formação e Aprimoramento:
      </h4>
      <ul className={styles.lista}>
        <li>• Engenharia de Software (Unicesumar).</li>
        <li>
          • Formação contínua na Alura, com foco em Backend, Frontend e DevOps.
        </li>
      </ul>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        💪 Soft Skills e Diferenciais:
      </h4>
      <ul className={styles.lista}>
        <li>
          • Comunicação: Produzo blogs técnicos no LinkedIn para compartilhar
          insights.
        </li>
        <li>
          • Colaboração: Participação ativa em workshops de aprimoramento de
          soft skills.
        </li>
        <li>
          • Inglês Avançado: Leitura técnica, comunicação fluente e discussões
          aprofundadas.
        </li>
        <li>
          • Equilíbrio: Praticante regular de esportes, garantindo produtividade
          e bem-estar.
        </li>
      </ul>

      <h4 className={`${styles.subtitulo} ${styles.espacamento}`}>
        🎯 Objetivo Profissional:
      </h4>
      <p className={styles.paragrafo}>
        Estou em busca de oportunidades onde possa aplicar minhas habilidades
        técnicas e de comunicação, contribuindo para projetos inovadores e
        colaborativos. Meu foco está em agregar valor às equipes, promovendo
        soluções robustas, criativas e alinhadas às melhores práticas do
        mercado. 🌟
      </p>

      <p className={styles.paragrafo}>
        #Java #SpringBoot #React #DevOps #APIsRESTful #Docker #Kafka #DDD #SOLID
        #TDD #JUnit #Mockito #MySQL #PostgreSQL #Frontend #Backend
        #SoftwareDevelopment #Design #Engineering
      </p>
    </PostModelo>
  );
}

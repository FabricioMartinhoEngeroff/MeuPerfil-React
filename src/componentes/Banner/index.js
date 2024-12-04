import styles from './Banner.module.css';
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>
          Olá, Sou Fabrício Martinho Engeroff!
        </h1>

        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Desenvolvedor Fullstack com foco em Backend e DevOps. :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Fabricio sorrindo"
        />
      </div>
    </div>
  );
}

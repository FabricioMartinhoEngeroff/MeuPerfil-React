import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Sou Fabrício!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Desenvolvedor Fullstack com foco em Backend e DevOps.
                    :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Fabricio sorrindo"
                />
            </div>
        </div>
    );
}

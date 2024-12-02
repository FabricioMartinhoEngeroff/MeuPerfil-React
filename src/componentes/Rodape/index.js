import styles from './Rodape.module.css';
import marcaRegistrada from "assets/marca_registrada.png";

export default function Rodape() {
  return (
    <footer className={styles.Rodape}>
  <img src={marcaRegistrada} alt="Marca Registrada" />
  Desenvolvido por Dev Fabricio
</footer>
  );
}

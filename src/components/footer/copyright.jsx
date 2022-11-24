import styles from "./styles";

const date = new Date();

const Copyright = () => {
  return (
    <p className={`${styles.textXl} ${styles.m0} ${styles.py4} font-Alkalami`}>
      <span className={styles.text2Xl}>&copy;</span> {date.getFullYear()}_ Hatim
      NAJOUA.
      <br />
      Tout Droits Réservés.
    </p>
  );
};

export default Copyright;

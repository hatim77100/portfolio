import styles from "./styles";

const date = new Date();

const Copyright = () => {
    return (
        <p className={`${styles.textXl} ${styles.m0} ${styles.py4}`}> <span className={styles.text2Xl}>&copy;</span> {date.getFullYear()}_ Hatim NAJOUA. Tout Droits Réservés</p>
    )
}

export default Copyright;
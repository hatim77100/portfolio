import styles from "./stytles";

const Prestation = () => {
  return (
    <section>
      <h2 className={styles.h2}>Mes prestations</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr className={`${styles.border} `}></hr>
      </div>
    </section>
  );
};

export default Prestation;

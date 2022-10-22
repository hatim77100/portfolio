import styles from "./styles";
import Projets from "./projets";
import Data from "./Data";

const Prestation = () => {
  return (
    <section>
      <h2 className={`${styles.h2} ${styles.uppercase}`}>Mes prestations</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr className={`${styles.border} `}></hr>
      </div>
      <Projets data={Data}/>
      <Projets />
    </section>
  );
};

export default Prestation;

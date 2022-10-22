import styles from "./styles";
import Projet from "@src/components/assets/img/ProjetWeb";
// import data from "./Data";

const Projets = (props) => {
  const data = props;
  console.log(props);
  
  return (
    <div className={`${styles.mt12}`}>
      <div
        className={`${styles.bg} ${styles.flexCenterCol} ${styles.px4} ${styles.rounded}`}
      >
        <div className={styles.p4}>
          <Projet />
        </div>
        <h3 className={`${styles.title} ${styles.mtN4} ${styles.capitalize}`}>
          {props}
        </h3>
        <div
          className={`${styles.textWhite} ${styles.italic} ${styles.m0} ${styles.p4} ${styles.leading8}`}
        >
          <p> Site e-commerce</p>
          <p>Web application</p>
          <p>Site vitrine</p>
          <p>Landing page</p>
        </div>
      </div>
    </div>
  );
};
export default Projets;

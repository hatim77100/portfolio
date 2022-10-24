import styles from "./styles";

const Projets = ({ image, title, p1, p2, p3, p4 }) => {
  return (
    <div className={`${styles.mt12}`}>
      <div
        className={`${styles.bg} ${styles.flexCenterCol} ${styles.px4} ${styles.rounded}`}
      >
        <div className={styles.p4}>{image}</div>
        <h3 className={`${styles.title} ${styles.mtN4} ${styles.capitalize}`}>
          {title}
        </h3>
        <div
          className={`${styles.textWhite} ${styles.italic} ${styles.m0} ${styles.p4} ${styles.leading8}`}
        >
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
        </div>
      </div>
    </div>
  );
};
export default Projets;

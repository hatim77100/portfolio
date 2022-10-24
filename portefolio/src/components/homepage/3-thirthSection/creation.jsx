import styles from "./styles";


const Creation = ({ image, link, title }) => {
  return (
    <section>
      <div
        className={`${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor}`}
      >
        <a href={link}>
          {image}
          <p className={styles.title}>{title}</p>
        </a>
      </div>
    </section>
  );
};

export default Creation;

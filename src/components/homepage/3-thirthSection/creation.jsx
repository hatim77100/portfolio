import { styles } from "./styles";
// import { stylesMd } from "./styles";


const Creation = ({ image, link, title }) => {
  return (
    <>
      <div
        className={`${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor} `}
      >
        <a href={link}>
          {image}
          <p className={styles.title}>{title}</p>
        </a>
      </div>
    </>
  );
};

export default Creation;

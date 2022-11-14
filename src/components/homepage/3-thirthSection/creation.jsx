import { styles } from "./styles";
// import { stylesMd } from "./styles";


const Creation = ({ image, link, title }) => {
  return (
    <>
      <div
        className={`${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor} `}
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
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

import { styles } from "./styles";
import { stylesMd} from "./styles";

const Projets = ({ image, title, p1, p2, p3, p4 }) => {
  return (
    <div className={`${styles.mt12}`}>
      <div
        className={`${styles.bg} ${styles.flexCenterCol} ${styles.px4} ${styles.rounded}`}
        data-aos="slide-right"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className={styles.p4}>{image}</div>
        <h3 className={`${styles.title} ${styles.mtN4} ${styles.capitalize} ${stylesMd.px2} ${stylesMd.title}`}>
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

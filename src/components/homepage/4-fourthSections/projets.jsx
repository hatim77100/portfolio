import { styles }  from "./styles";
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
        <ul
          className={`${styles.textWhite} ${styles.italic} ${styles.m0} ${styles.p4}  ${styles.leading8} ${styles.textCenter}`}
        
        >
          <li>{p1}</li>
          <li>{p2}</li>
          <li>{p3}</li>
          <li>{p4}</li>
        </ul>
      </div>
    </div>
  );
};
export default Projets;

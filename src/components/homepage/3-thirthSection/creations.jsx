import Image from "next/image";
import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";
import Creation from "./creation";
import data from "./data";

const Creations = () => {
  return (
    <section>
      <div
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h2 className={`${styles.h2} ${styles.fontAlkalami}`}>Créations</h2>
        <div className={`${styles.flexCenter} ${styles.pt8}`}>
          <hr
            className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
          ></hr>
        </div>
      </div>
      <div className={`${stylesMd.gridCol} ${stylesLg.gridCol} ${styles.fontCourgette}`}>
        {data.creations.map((creation) => {
          return (
            <div
              key={creation._id}
              className={`${styles.mt12} ${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor} `}
            >
              <Creation
                image={<Image src={creation.image} width={288} height={367} className={styles.roundedmd} alt={ creation.title} />}
                link={creation.link}
                title={creation.title}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Creations;

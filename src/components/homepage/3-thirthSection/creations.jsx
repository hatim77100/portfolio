import Image from "next/image";
import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";
import Creation from "./creation";
import data from "./data";

const Creations = () => {
  return (
    <section>
      <h2 className={styles.h2}>Mes créations</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}></hr>
      </div>
      <div className={`${stylesMd.gridCol} ${stylesLg.gridCol}`}
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
      >
        {data.creations.map((creation) => {
          return (
            <div
              key={creation._id}
              className={`${styles.mt12} ${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor} `}
            >
              <Creation
                image={<Image src={creation.image} width={288} height={367} />}
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

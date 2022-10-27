import Image from "next/image";
import styles from "../3-thirthSection/styles";
import Creation from "./creation";
import data from "./data";

const Creations = () => {
  return (
    <section>
      <h2 className={styles.h2}>Mes créations</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr className={`${styles.border} `}></hr>
      </div>
      {data.creations.map((creation) => {
        return (
          <div
            key={creation._id}
            className={`${styles.mt12} ${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor}`}
          >
            <Creation
              image={<Image src={creation.image} width={288} height={367} />}
              link={creation.link}
              title={creation.title}
            />
          </div>
        );
      })}
    </section>
  );
};

export default Creations;

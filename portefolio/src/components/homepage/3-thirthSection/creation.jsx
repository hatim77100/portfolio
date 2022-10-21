import styles from "./styles";
import Landing from "@src/components/assets/img/LandingPage";
import KyotoJapan from "@src/components/assets/img/Kyoto";
import Agence from "@src/components/assets/img/Agence";
import Link from "next/link";

export const Creation = () => {
  return (
    <section>
        <h2 className={styles.h2}>création</h2>
        <div className={`${styles.flexCenter} ${styles.pt8}`}>
          <hr className={`${styles.border} `}></hr>
        </div>
        <div
          className={`${styles.mt12} ${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor}`}
        >
          <Link href="https://hatimn.promo-171.codeur.online/landinPage1/">
            <a>
              <Landing/>
              <p className={styles.title}>Landing page</p>
            </a>
          </Link>
        </div>
        <div
          className={`${styles.mt12} ${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor}`}
        >
          <Link href="#">
          <a>
            <span >
              <KyotoJapan/>
            </span>
              <p className={styles.title}>Guide Kyoto</p>
            </a>
          </Link>
        </div>
        <div
          className={`${styles.mt12} ${styles.p4} ${styles.flexCenterCol} ${styles.shadow} ${styles.cursor}`}
        >
          <Link href="#">
          <a>
            <span >
              <Agence/>
            </span>
              <p className={styles.title}>Agence web</p>
            </a>
          </Link>
        </div>
    </section>
  );
};

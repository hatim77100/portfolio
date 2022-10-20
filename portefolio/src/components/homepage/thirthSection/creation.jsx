import styles from "./styles";
import Landing from "@src/components/assets/img/LandingPage";
import Link from 'next/link';

export const Creation = () => {
  return (
    <>
      <h2 className={styles.h2}>création</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr className={`${styles.border} `}></hr>
          </div>
          <div className={`${styles.mt12} ${styles.p4} ${styles.flexCenterCol} ${styles.shadow}`}>
              <Link href="https://hatimn.promo-171.codeur.online/landinPage1/">
                  <a>
              <Landing />
              <p className={styles.title}>Landing page</p>
                  </a>
              </Link>
          </div>
    </>
  );
};

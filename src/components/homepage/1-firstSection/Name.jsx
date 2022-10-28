import React from "react";
import Button from "./Button";
import Mypicture from "../../assets/img/Mypicture";
import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";

const Name = () => {
  return (
    <section className={`${styles.wFull} ${styles.pt12} ${stylesLg.gridCol2}`}>
      <div className={stylesLg.flex}>
        <div className={`${styles.wFull} ${styles.flex} ${styles.p4}`}>
          <div className={styles.rond}></div>
          <div className={styles.triangle}></div>
        </div>
        <h2 className={`${styles.h2} ${styles.pt16}`}>Hatim NAJOUA</h2>
        <div className={`${styles.flexCenter} `}>
          <hr className={`${styles.border} ${stylesMd.width}`}></hr>
        </div>
        <div className={`${styles.flexCenter} ${styles.pt6}`}>
          <h1 className={`${styles.h1}`}>
            développeur web créatif React / Node
          </h1>
        </div>
        <div className={`${styles.pt12} ${styles.flexCenter}`}>
          <span className={styles.button}>
            <Button />
          </span>
        </div>
        <div className={`${styles.p4} ${styles.flex} ${stylesLg.flexBetween} ${stylesLg.wFull}`}>
          <div>
            <div className={styles.tr2}></div>
            <div className={styles.tr1}></div>
          </div>
          <div className={`${styles.rondP}`}></div>
        </div>
      </div>
      <div className={`${styles.mtN16} ${stylesMd.flexCenter} `}>
        <Mypicture />
      </div>
    </section>
  );
};

export default Name;

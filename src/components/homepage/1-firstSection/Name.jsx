import React, { useEffect } from "react";
import Button from "./Button";
import Mypicture from "../../assets/img/Mypicture";
import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimationName } from "./TypeAnimation";

const Name = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={`${styles.wFull} ${styles.pt12} ${stylesLg.gridCol2}`}>
      <div
        className={stylesLg.flex}
        data-aos="slide-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <div className={`${styles.wFull} ${styles.flex} ${styles.p4}`}>
          <div className={styles.rond}></div>
          <div className={styles.triangle}></div>
        </div>
        <h2 className={`${styles.h2} ${styles.pt16} ${styles.fontCourgette}`}>Hatim NAJOUA</h2>
        <div className={`${styles.flexCenter} `}>
          <hr className={`${styles.border} ${stylesMd.width}`}></hr>
        </div>
        <div className={`${styles.flexCenter} ${styles.pt6} ${styles.h60}`}>
          {/* <h1 className={`${styles.h1}`}>
            développeur web créatif React / Node
          </h1> */}
          <AnimationName />
        </div>
        <div className={`${styles.pt12} ${styles.flexCenter}`}>
          <Button />
        </div>
        <div
          className={`${styles.p4} ${styles.flex} ${stylesLg.flexBetween} ${stylesLg.wFull} ${styles.pt12}`}
        >
          <div>
            <div className={styles.tr2}></div>
            <div className={styles.tr1}></div>
          </div>
          <div className={`${styles.rondP}`}></div>
        </div>
      </div>
      <div
        className={`${styles.mtN16} ${stylesMd.flexCenter} `}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <Mypicture />
      </div>
    </section>
  );
};

export default Name;

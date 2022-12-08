import { IconJs } from "public/data/imgCompetences/Js";
import { IconeSymfony } from "public/data/imgCompetences/symfony";
import { Webpack } from "public/data/imgCompetences/webpack";
import { IconePhp } from "../../../../public/data/imgCompetences/php";
import { IconeReact } from "../../../../public/data/imgCompetences/react";
import { IconeHtml } from "../../../../public/data/imgCompetences/html";
import { IconeCss } from "../../../../public/data/imgCompetences/css";
import { styles, stylesLg, stylesMd } from "./styles";
import { IconeGithub } from "../../../../public/data/imgCompetences/github";
import { IconeTailwind } from "../../../../public/data/imgCompetences/tailwind";
import { IconeSql } from "../../../../public/data/imgCompetences/sql";
import { IconeBootstrap } from "../../../../public/data/imgCompetences/bootstrap";
import { IconeNetlify } from "../../../../public/data/imgCompetences/netlify";

const Competence = () => {
  return (
    <>
      <div
        className={`${styles.h2} ${styles.fontAlkalami}`}
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h2>Compétences</h2>
        <div className={`${styles.flexCenter} ${styles.pt8}`}>
          <hr
            className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
          ></hr>
        </div>
      </div>
      <div className={`${styles.wFull} ${styles.mt12} ${styles.fontAlkalami}`}>
        <div className={styles.flexBetween}
          data-aos="zoom-in-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        > <div className={`${styles.flexCol}`}>
            <IconJs />
            <p className={styles.mt4}>Javascript</p>
          </div>
          <div className={`${styles.flexCol}`}>
          <IconeSymfony />
            <p className={styles.mt4}>Symfony</p>
          </div>
        </div>
        <div className={`${styles.flexBetween} ${styles.mt12}`}
          data-aos="zoom-in-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className={`${styles.flexCol}`}>
          <Webpack />
          <p className={styles.mt4}>Webpack</p>
          </div>
          <div className={`${styles.flexCol}`}>
          <IconePhp />
          <p className={styles.mt4}>Php</p>
          </div>
        </div>
        <div className={`${styles.flexBetween} ${styles.mt12}`}
          data-aos="zoom-in-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className={`${styles.flexCol}`}>
          <IconeReact />
          <p className={styles.mt4}>React</p>
          </div>
          <div className={`${styles.flexCol}`}>
          <IconeHtml />
          <p className={styles.mt4}>HTML</p>
          </div>
        </div>
        <div className={`${styles.flexBetween} ${styles.mt12}`}
          data-aos="zoom-in-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className={`${styles.flexCol}`}>
          <IconeCss />
            <p className={styles.mt4}>CSS</p>
          </div>
          <div className={`${styles.flexCol}`}>
          <IconeGithub />
          <p className={styles.mt4}>Github</p>
          </div>
        </div>
        <div className={`${styles.flexBetween} ${styles.mt12}`}
          data-aos="zoom-in-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className={`${styles.flexCol}`}>
          <IconeTailwind />
          <p className={styles.mt4}>Tailwind</p>
          </div>
          <div className={`${styles.flexCol}`}>
          <IconeSql />
          <p className={styles.mt4}>SQL</p>
          </div>
        </div>
        <div className={`${styles.flexBetween} ${styles.mt12}`}
          data-aos="zoom-in-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className={`${styles.flexCol}`}>
          <IconeBootstrap />
          <p className={styles.mt4}>Bootstrap</p>
          </div>
          <div className={`${styles.flexCol}`}>
          <IconeNetlify />
          <p className={styles.mt4}>Netlify</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Competence;

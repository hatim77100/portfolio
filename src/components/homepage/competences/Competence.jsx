import { IconJs } from "@src/components/homepage/competences/imgCompetences/Js";
import { IconeNode } from "@src/components/homepage/competences/imgCompetences/nodeJs";
import { Webpack } from "@src/components/homepage/competences/imgCompetences/webpack";
import { IconePhp } from "./imgCompetences/php";
import { IconeReact } from "./imgCompetences/react";
import { IconeHtml } from "./imgCompetences/html";
import { IconeCss } from "./imgCompetences/css";
import { styles, stylesLg, stylesMd } from "./styles";
import { IconeGithub } from "./imgCompetences/github";
import { IconeTailwind } from "./imgCompetences/tailwind";
import { IconeSql } from "./imgCompetences/sql";
import { IconeBootstrap } from "./imgCompetences/bootstrap";
import { IconeNetlify } from "./imgCompetences/netlify";

const Competence = () => {
  return (
    <>
      <div
        className={styles.h2}
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h2>Mes compétences</h2>
        <div className={`${styles.flexCenter} ${styles.pt8}`}>
          <hr
            className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
          ></hr>
        </div>
      </div>
      <div className={`${styles.wFull} ${styles.mt12}`}>
        <div className={styles.flexBetween}
          data-aos="zoom-in-down"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <IconJs />
          <IconeNode />
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
          <Webpack />
          <IconePhp />
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
          <IconeReact />
          <IconeHtml />
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
          <IconeCss />
          <IconeGithub />
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
          <IconeTailwind />
          <IconeSql />
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
          <IconeBootstrap />
          <IconeNetlify />
        </div>
      </div>
    </>
  );
};

export default Competence;

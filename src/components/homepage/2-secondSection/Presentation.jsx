import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";

export const Present = () => {
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="200"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h2 className={`${styles.h2} ${styles.fontAlkalami}`}>présentation</h2>
        <div className={`${styles.flexCenter} ${styles.pt8} `}>
          <hr
            className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
          ></hr>
        </div>
      </div>
      <div className={`${styles.mx2} ${stylesMd.flexCenter}`}>
        <div
          className={`${styles.divParagraphe} ${styles} ${stylesMd.w50}`}
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Actuellement en formation de développeur web et web mobile chez
          l&apos;Access Code School, je me forme afin de faire carrière en tant
          que développeur web Front-End en full JavaScript !
          <br />
          <p className={styles.mt4}></p>
          Passionné depuis toujours par les nouvelles technologies et
          l'univers du développement, je passe mon temps à coder des
          projets divers et variés.
          <br />
          <p className={styles.mt4}></p>A l&apos;écoute du marché, je suis en recherche
          de challenges et de nouvelles opportunités. Que vous soyez une agence
          web, un indépendant ou un particulier, je serai content de répondre à
          vos besoins.
        </div>
      </div>
    </>
  );
};

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
        <h2 className={`${styles.h2}`}>présentation</h2>
        <div className={`${styles.flexCenter} ${styles.pt8} `}>
          <hr
            className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
          ></hr>
        </div>
      </div>
      <div className={`${styles.mx2} ${stylesMd.flexCenter}`}>
        <p
          className={`${styles.paragraphe} ${styles} ${stylesMd.w50}`}
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="200"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          Je suis diplomé de développement web et web mobile chez ACS school,
          passionné depuis toujours par les nouvelles technologies et de
          l&apos;univers dev. Que vous soyez une entreprise, une agence web ou
          un particulier, je serai content de répondre à vos besoin.
        </p>
      </div>
    </>
  );
};

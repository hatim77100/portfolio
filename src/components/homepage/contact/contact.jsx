import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";

const Contact = () => {
  return (
    <section>
      <h2 className={`${styles.h2} ${styles.mt16}`}>Contact</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr
          className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
        ></hr>
      </div>

      <>
        <form
          className={`${styles.textWhite} ${styles.mt16} ${styles} ${stylesMd.flexCenteritems}`}
          data-aos="flip-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
        >
          <div className={stylesLg.gridRow2}>
            <div className={stylesLg.mt12}>
              <div className={`${styles.grid} ${styles.ml4}`}>
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`${styles.input} ${styles.inlineBlock} ${styles.bgBlack} ${styles.ml4} ${styles.textSm}`}
                  placeholder="nom et prenom"
                />
              </div>
              <div className={`${styles.my8} ${styles.grid} ${styles.ml4}`}>
                <label htmlFor="mail">Mail</label>
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  className={`${styles.input} ${styles.bgBlack} ${styles.inlineBlock} ${styles.ml4} ${styles.textSm}`}
                  placeholder="adresse mail"
                />
              </div>
            </div>
            <div>
              <div className={`${styles.mx4} ${styles.flexCenteritems} ${styles.w1112} ${styles.wfull}`}>
                <label
                  htmlFor="area"
                  className={`${styles.pb4} ${styles.inlineBlock} ${styles.inlineBlock}`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="area"
                  cols="30"
                  rows="10"
                  className={`${styles.bgArea} ${styles.rounded} ${styles.outlineNone} ${styles.wfull} ${styles.inlineBlock} ${styles.p4}`}
                  placeholder="votre message"
                ></textarea>
              </div>
              <div className={styles.flexCenteritems}>
                <button type="submit" className={styles.button}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    </section>
  );
};

export default Contact;

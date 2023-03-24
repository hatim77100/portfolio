import { styles } from "./styles";
import { stylesMd } from "./styles";
import { stylesLg } from "./styles";


const Contact = () => {

  const handleclick = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <section>
      <div
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h2 className={`${styles.h2} ${styles.mt16} ${styles.trackingWide} ${styles.fontAlkalami}`}>Contact</h2>
        <div className={`${styles.flexCenter} ${styles.mt4}`}>
          <hr
            className={`${styles.border} ${stylesMd.width} ${stylesLg.width}`}
          ></hr>
        </div>
      </div>

      <>
        <form
          className={`${styles.textWhite} ${styles.mt16} ${styles} ${stylesMd.flexCenteritems} font-courgette`}
          data-aos="flip-right"
          data-aos-offset="20"
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
                <label htmlFor="name">Votre nom :</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`${styles.input} ${styles.inlineBlock} ${styles.bgBlack} ${styles.ml4} ${styles.textSm}`}
                  placeholder="Votre nom complet"
                />
              </div>
              <div className={`${styles.my8} ${styles.grid} ${styles.ml4}`}>
                <label htmlFor="mail">Votre e-mail :</label>
                <input
                  type="text"
                  name="mail"
                  id="mail"
                  className={`${styles.input} ${styles.bgBlack} ${styles.inlineBlock} ${styles.ml4} ${styles.textSm}`}
                  placeholder="Votre adresse mail"
                />
              </div>
            </div>
            <div className={styles.mx4}>
              <div
                className={`${styles.mx4} ${styles.flexCenteritems} ${styles.w1112} ${styles.wfull}`}
              >
                <label
                  htmlFor="area"
                  className={`${styles.pb4} ${styles.inlineBlock}`}
                >
                  Votre message :
                </label>
                <textarea
                  name="message"
                  id="area"
                  cols="30"
                  rows="10"
                  className={`${styles.bgArea} ${styles.rounded} ${styles.outlineNone} ${styles.wfull} ${styles.inlineBlock} ${styles.p4}`}
                  placeholder="Votre message"
                ></textarea>
              </div>
              <div className={styles.flexCenteritems}>
                <button type="submit" className={`${styles.button}`} onClick={handleclick}>
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

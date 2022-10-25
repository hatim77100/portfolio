import styles from "./styles";

const Contact = () => {
  return (
    <>
      <h2 className={`${styles.h2} ${styles.mt16}`}>Contact</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr className={`${styles.border} `}></hr>
      </div>
      <form className={`${styles.textWhite} ${styles.mt16} ${styles}`}>
        
          <div className={`${styles.grid} ${styles.ml4}`}>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`${styles.input} ${styles.inlineBlock} ${styles.bgBlack} ${styles.mtN2} ${styles.ml4}`}
              placeholder="nom et prenom"
            />
          </div>
          <div className={`${styles.my8} ${styles.grid} ${styles.ml4}`}>
            <label htmlFor="mail">Mail</label>
            <input
              type="text"
              name="mail"
              id="mail"
              className={`${styles.input} ${styles.bgBlack} ${styles.inlineBlock} ${styles.mtN2} ${styles.ml4}`}
              placeholder="adresse mail"
            />
          </div>
          <div className={`${styles.px4} ${styles.flexCenteritems}`}>
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
              className={`${styles.bgArea} ${styles.rounded} ${styles.outlineNone} ${styles.inlineBlock} ${styles.p4}`}
              placeholder="votre message"
            ></textarea>
          </div>
      
      </form>
    </>
  );
};

export default Contact;

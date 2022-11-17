import Link from "next/link";
import MonEmail from "../assets/img/footer/email";
import Github from "../assets/img/footer/github";
import Linkdin from "../assets/img/footer/linkdin";
import styles from "./styles";
import Copyright from "./copyright";

const Footer = () => {
  return (
    <footer

    >
      <div className={`${styles.flex} ${styles.wFull} ${styles.py8}`}
         
      >
        <a href="https://www.linkedin.com/in/hatim-najoua/" target="-blank" rel="noreferrer noopener">{<Linkdin />}</a>
          <a href="https://github.com/hatim77100" target="_blank" rel="noreferrer noopener">{<Github />}</a>
        <Link href="mailto:?to=contact@najoua-portfolio.fr">
          <a>{<MonEmail />}</a>
        </Link>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import { styles } from "./styles";
import { stylesLg } from "./styles";

const NavDesktop = () => {
    return (
        <ul
              className={`${styles.uppercase} ${styles.fontSize} ${styles.fontBold} ${styles.color} ${styles.pl4} ${styles.hidden} ${stylesLg.inline} ${stylesLg.h16} ${stylesLg.flex}`}
            >
              <li className={`${stylesLg.hoverDesktop}`} >
                <Link href={"#"}>
                  <a className={`${styles.line} `}>Accueil</a>
                </Link>
              </li>
              <li className={`${stylesLg.hoverDesktop}`}>
                <Link href="#presentation">
                  <a className={`${styles.line} `}>À propos</a>
                </Link>
              </li>
              <li
                className={`${styles.py4} ${stylesLg.py0} ${stylesLg.hoverDesktop}`}
              >
                <Link href="#competences">
                  <a className={`${styles.line}`}>Compétences</a>
                </Link>
              </li>
              <li className={`${stylesLg.hoverDesktop}`}>
                <Link href="#creations">
                  <a className={`${styles.line}`}>Créations</a>
                </Link>
              </li>
              <li
                className={`${styles.py4} ${stylesLg.py0} ${stylesLg.hoverDesktop}`}
              >
                <Link href="#contact">
                  <a className={`${styles.line}`}>Contact</a>
                </Link>
              </li>
              <li
                className={`${styles.pb6} ${stylesLg.py0} ${stylesLg.hoverDesktop} ${styles.cv}`}
              >
                <a
                  href="/data/docs/cv.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  CV
                </a>
              </li>
            </ul>
    )
}

export default NavDesktop;
import React, { useState } from "react";
import Iconav from "../assets/img/Iconnav";
import Logo from "../assets/img/logo";
import Link from "next/link";
import { styles } from "./styles";
import { stylesLg } from "./styles";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className={`${stylesLg.gridCol2} ${stylesLg.h16}`}>
        <div className={`${styles.justifyCenter} ${styles.pt2} ${stylesLg.p0}`}>
          <Logo className={`${styles.z0} ${stylesLg.h60}`} />
          <Iconav
            className={`${styles.z10} ${styles.cursor} `}
            onClick={toggle}
          />
        </div>
        <div>
        
        {show === true ? (
          <nav >
            <div
              className={`${styles.flex} ${styles.justifyCenter} ${styles.pb6} `}
            >
              <hr
                className={`${styles.border2} ${styles.wFull} ${styles.borderAmber400} ${styles.mt2}`}
              />
            </div>
            <ul
              className={`${styles.uppercase} ${styles.fontSize} ${styles.fontBold} ${styles.color} ${styles.pl4}`}
            >
              <li>
                <Link href={"#"}>
                  <a>Accueil</a>
                </Link>
              </li>
              <li className={`${styles.py4}`}>
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="#creations">
                  <a>Mes créations</a>
                </Link>
              </li>
              <li className={`${styles.py4}`}>
                <Link href="#">
                  <a>Compétences</a>
                </Link>
              </li>
              <li className={`${styles.pb6}`}>
                <a
                  href="/data/img/cv.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  CV
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <ul
            className={`${styles.uppercase} ${styles.fontSize} ${styles.fontBold} ${styles.color} ${styles.pl4} ${styles.hidden} ${stylesLg.inline} ${stylesLg.h16} ${stylesLg.flex}`}
          >
            <li>
              <Link href={"#"}>
                <a>Acceuil</a>
              </Link>
            </li>
            <li className={`${styles.py4} ${stylesLg.py0}`}>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#creations">
                <a>Mes créations</a>
              </Link>
            </li>
            <li className={`${styles.py4} ${stylesLg.py0}`}>
              <Link href="#">
                <a>Compétences</a>
              </Link>
            </li>
            <li className={`${styles.pb6} ${stylesLg.py0}`}>
              <a
                href="/data/img/cv.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                CV
              </a>
            </li>
          </ul>
        )}
        ;
        </div>
      </div>
    </header>
  );
};

export default Navbar;

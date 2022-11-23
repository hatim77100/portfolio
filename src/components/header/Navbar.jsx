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
        <div className={`${styles.justifyCenter} ${styles.p4} ${stylesLg.p0}`}>
          <Logo className={`${styles.z0} ${stylesLg.h60}`} />
          <Iconav
            className={`${styles.z10} ${styles.cursor} `}
            onClick={toggle}
          />
        </div>
        <div>
          {show === true ? (
            <nav>
              <div
                className={`${styles.flex} ${styles.justifyCenter} ${styles.pb6} `}
                data-aos="zoom-in"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="400"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <hr
                  className={`${styles.border2} ${styles.wFull} ${styles.borderAmber400} ${styles.mt2}`}
                />
              </div>
              <ul
                className={`${styles.uppercase} ${styles.fontSize} ${styles.fontBold} ${styles.color} ${styles.pl8}`}
                data-aos="zoom-in"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
              >
                <li>
                  <Link href={"#"}>
                    <a className={`${styles.line} ${styles.inlineBlock}`}>Accueil</a>
                  </Link>
                </li>
                <li className={`${styles.py4}`}>
                  <Link href="#contact">
                    <a className={`${styles.line} ${styles.inlineBlock}`}>Contact</a>
                  </Link>
                </li>
                <li >
                  <Link href="#creations">
                    <a className={`${styles.line} ${styles.inlineBlock}`}>Mes créations</a>
                  </Link>
                </li>
                <li className={`${styles.py4}`}>
                  <Link href="#competences">
                    <a className={`${styles.line} ${styles.inlineBlock}`}>Mes Compétences</a>
                  </Link>
                </li>
                <li className={`${styles.pb6} ${styles.inlineBlock}`}>
                  <a
                    href="/data/docs/cv.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`${styles.line}`}
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
                  <a className={`${styles.line}`}>Accueil</a>
                </Link>
              </li>
              <li className={`${styles.py4} ${stylesLg.py0}`}>
                <Link href="#contact">
                  <a className={`${styles.line}`}>Contact</a>
                </Link>
              </li>
              <li>
                <Link href="#creations">
                  <a className={`${styles.line}`}>Mes créations</a>
                </Link>
              </li>
              <li className={`${styles.py4} ${stylesLg.py0} `}>
                <Link href="#competences">
                  <a className={`${styles.line}`}>Mes Compétences</a>
                </Link>
              </li>
              <li className={`${styles.pb6} ${stylesLg.py0}`}>
                <a
                  href="/data/docs/cv.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  className={`${styles.line}`}
                >
                  CV
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

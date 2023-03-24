import React, { useState } from "react";
import Image from "next/image";
import Iconav from "../assets/img/Iconnav";
import Logo from "../assets/img/logo.png";
import Link from "next/link";
import { styles } from "./styles";
import { stylesLg } from "./styles";
import NavDesktop from "./NavDesktop";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <header className={styles.fontCourgette}>
      <div className={`${stylesLg.gridCol2} ${stylesLg.h16}`}>
        <div className={`${styles.justifyCenter} ${styles.p4} ${stylesLg.p0}`}>
          <Image src= {Logo} className={`${stylesLg.h60}`} alt="logo"/>
          <Iconav
            className={`${styles.cursor}`}
            onClick={toggle}
          />
        </div>
        <div>
          {show ? (
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
                <li onClick={toggle}>
                  <Link href={"#"}>
                    <a className={`${styles.line} ${styles.inlineBlock}`}>
                      Accueil
                    </a>
                  </Link>
                </li>
                <li className={`${styles.py4}`} onClick={toggle}>
                  <Link href="#contact">
                    <a className={`${styles.line} ${styles.inlineBlock}`}>
                      Contact
                    </a>
                  </Link>
                </li>
                <li onClick={toggle}>
                  <Link href="#creations">
                    <a className={`${styles.line} ${styles.inlineBlock}`}>
                      Créations
                    </a>
                  </Link>
                </li>
                <li className={`${styles.py4}`} onClick={toggle}>
                  <Link href="#competences">
                    <a className={`${styles.line} ${styles.inlineBlock}`}>
                      Compétences
                    </a>
                  </Link>
                </li>
                <li className={`${styles.mb6} ${styles.inlineBlock} ${styles.cvMobile}`} onClick={toggle}>
                  <a
                    href="/data/docs/cv.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    CV
                  </a>
                </li>
              </ul>
            </nav>
          ) : (
            <NavDesktop/>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

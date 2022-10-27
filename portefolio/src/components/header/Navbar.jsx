import React, { useState } from "react";
import Iconav from "../assets/img/Iconnav";
import Logo from "../assets/img/logo";
import Link from "next/link";
import styles from "./styles";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <header>
      <div>
        <Logo className={styles.z0} />
        <Iconav className={`${styles.z10} ${styles.cursor}`} onClick={toggle} />
      </div>
      {show === true ? (
        <nav>
          <div className={`${styles.flex} ${styles.justifyCenter} ${styles.pb6}`}>
            <hr className={`${styles.border2} ${styles.width56} ${styles.borderAmber400} ${styles.mt2}`} />
          </div>
          <ul
            className={`${styles.uppercase} ${styles.fontSize} ${styles.fontBold} ${styles.color} ${styles.pl4}`}
          >
            <li>
              <Link href={"#"}>
                <a>Acceuil</a>
              </Link>
            </li>
            <li className={`${styles.py4}`}>
              <Link href="#contact">
                <a>Contact</a>
              </Link>
            </li>
            <li >
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
              <a href="/data/img/cv.pdf" target="_blank" rel="noreferrer noopener">
                CV
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        " "
      )}
      ;
    </header>
  );
};

export default Navbar;

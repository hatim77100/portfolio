import React, { useState } from "react";
import Iconav from "../assets/img/Iconnav";
import Logo from "../assets/img/logo";
import Link from 'next/link';

const styles = {
  uppercase: "uppercase",
  fontSize: "text-lg",
  fontBold: "font-bold",
  color: "text-white",
  relative: "relative",
  pt6: "pt-6",
  pb6: "pb-6",
  pl4: "pl-4",
  mt2: "mt-4",
  py4: "py-6",
  z0: "z-0",
  z10: "z-10",
  border2: "border-2",
  width56: "w-5/6",
  borderAmber400: "border-amber-400",
  flex: "flex",
  justifyCenter: "justify-center",
  cursor: "pointer",
};

let {
  uppercase,
  fontSize,
  fontBold,
  color,
  mt2,
  pt6,
  pl4,
  py4,
  z0,
  z10,
  border2,
  width56,
  borderAmber400,
  flex,
  justifyCenter,
  pb6,
  cursor,
} = styles;

const Navbar = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <header>
      <div>
        <Logo className={z0} />
        <Iconav className={`${z10} ${cursor}`} onClick={toggle} />
      </div>
      {show === true ? (
        <nav>
          <div className={`${flex} ${justifyCenter} ${pb6}`}>
            <hr className={`${border2} ${width56} ${borderAmber400} ${mt2}`} />
          </div>
          <ul
            className={`${uppercase} ${fontSize} ${fontBold} ${color} ${pl4}`}
          >
            <li>
              <Link href="#">
              <a>Acceuil</a>
              </Link>
            </li>
            <li className={`${py4}`}>
              <Link href="#">
              <a >Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#">
              <a >Projets</a>
              </Link>
            </li>
            <li className={`${py4}`}>
              <Link  href="#">
              <a>Créations</a>
              </Link>
            </li>
            <li>
              <Link href="#">
              <a >Compétences</a>
              </Link>
            </li>
            <li className={`${py4}`}>
              <Link href="#">
              <a >CV</a>
              </Link>
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

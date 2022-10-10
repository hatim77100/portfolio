import { Component } from "react";
import Iconav from "../img/Iconnav";
import Logo from "../img/logo";

const style = {
  uppercase: "uppercase",
  fontSize: "text-lg",
  fontBold: "font-bold",
  color: "text-white",
  relative: "relative",
  pt6: "pt-6",
  pl4: "pl-4",
  py4: "py-6",
  z0: "z-0",
  z10: "z-10",
  border2: "border-2",
  width56: "w-5/6",
  borderAmber400: "border-amber-400",
};

let {uppercase, fontSize, fontBold, color, pt6, pl4, py4, z0, z10, border2, width56, borderAmber400} = style;

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo className={z0} />
          <Iconav classNam={z10} />
        </div>
        <div>
        <hr className={`${border2} ${width56} ${borderAmber400}`} />
        </div>
        <nav className={`${pt6} ${pl4}`}>
          <ul className={`${uppercase} ${fontSize} ${fontBold} ${color}`}>
            <li>
              <a href="#">Acceuil</a>
            </li>
            <li className={`${py4}`}>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Projets</a>
            </li>
            <li className={`${py4}`}>
              <a href="#">Créations</a>
            </li>
            <li>
              <a href="#">Compétences</a>
            </li>
            <li className={`${py4}`}>
              <a href="#">CV</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

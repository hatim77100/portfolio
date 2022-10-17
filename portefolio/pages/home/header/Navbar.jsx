
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
  justifyCenter: "justify-center"
};


let {uppercase, fontSize, fontBold, color,mt2, pt6, pl4, py4, z0, z10, border2, width56, borderAmber400, flex, justifyCenter, pb6} = style;

class Navbar extends Component {

  state = {
    display: "true",
  }
  
  render() {
    const showMenu = () => {
        this.state.display ? this.setState({ display: false }) : this.setState({ display: true });
    }
    return (
      <div>
        <div>
          <Logo className={z0} onClick={this.showMenu}/>
          <Iconav classNam={z10} />
        </div>
        <nav className={`${pl4}`} >
        <div className={`${flex} ${justifyCenter} ${pb6}`}>
        <hr className={`${border2} ${width56} ${borderAmber400} ${mt2}`} />
        </div>
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

export default Navbar;
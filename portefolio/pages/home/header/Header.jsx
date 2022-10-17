import { useState } from "react";
import Navbar from "./Navbar";

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
  justifyCenter: "justify-center",
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
} = style;

const Header = () => {
  // state = {
  //   display: "true",
  // };

  const [show, setShow] = useState(false);

  // const showMenu = () => {
  //   this.state.display ? this.setState({display: false}) : this.setState({display: true}):
  // }
  return (
    <>
      <button className="text-white bg-red-500" onClick={() => setShow(true)}>
        Clic
      </button>
      {show === true ? (
        <div>
          <p className="text-white bg-red-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
            consectetur accusantium labore, laborum aspernatur possimus quia
            iste dolore nulla, eveniet fugit quos aliquid blanditiis minus non.
            Pariatur dicta reiciendis aliquam.
          </p>
        </div>
      ) : (
        ""
      )}
      <Navbar />
    </>
  );
};

export default Header;

import Img from "next/image";
import logo from './logo2.png'

const style = {
  absolute: "absolute",
  left: "left-4",
};

const Logo = () => {
  return (
      <Img src={logo} alt="logo" className={`${style.absolute} ${style.left}`}/>
  )
};

export default Logo;

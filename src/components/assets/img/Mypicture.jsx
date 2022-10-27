import Img from "next/image";
import Mypicture from "./Mypicture.png";

const Picture = () => {
    return <Img src={Mypicture} alt="photo du profil" />
}

export default Picture;


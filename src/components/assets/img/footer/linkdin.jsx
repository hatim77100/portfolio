import Image from "next/image";
import linkdin from "./linkdin.png";

const Linkdin = () => {
    return (
        <Image src={linkdin} width={60} height={60} style={ {cursor:"pointer"}} alt="linkdin"/>
    )
} 

export default Linkdin;
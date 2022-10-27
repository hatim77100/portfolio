import Image from "next/image";
import github from "./github.png";

const Github = () => {
    return (
        <Image src={github} width={60} height={60} style={ {cursor:"pointer"}}/>
    )
}

export default Github;
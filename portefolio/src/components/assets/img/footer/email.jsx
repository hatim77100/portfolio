import Image from "next/image";
import email from "./email.png";

const MonEmail = () => {
  return <Image src={email} width={60} height={60} style={ {cursor:"pointer"}}/>;
};
export default MonEmail;

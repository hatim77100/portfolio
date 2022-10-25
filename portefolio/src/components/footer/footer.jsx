import Link from "next/link";
import MonEmail from "../assets/img/footer/email";
const Footer = () => {
  return (
    <footer>
      <Link href="https://www.linkedin.com/in/hatim-najoua/">
        <a>{MonEmail}</a>
      </Link>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import landingPage from "./landingPage.png";
import styles from "@src/components/homepage/3-thirthSection/styles";

const Landing = () => {
  return (
    <Image src={landingPage} alt="landing Page" className={styles.rounded} />
  );
};

export default Landing;

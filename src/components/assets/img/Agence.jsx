import Image from "next/image";
import AgenceEclair from "./agencEclair.png";
import styles from "@src/components/homepage/3-thirthSection/styles";

const Agence = () => {
  return (
    <Image
      src={AgenceEclair}
      width="288"
      height="367.31"
      alt="agence web"
      className={styles.rounded}
    />
  );
};

export default Agence;

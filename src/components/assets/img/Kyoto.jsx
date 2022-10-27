import Image from "next/image";
import Kyoto from "./Kyoto.jpg";
import styles from "@src/components/homepage/3-thirthSection/styles";

const KyotoJapan = () => {
  return <Image src={Kyoto} alt="Ville de Kyoto" className={styles.rounded} />;
};

export default KyotoJapan;

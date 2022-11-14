import { TypeAnimation } from "react-type-animation";
import { styles } from "./styles";

export const AnimationName = () => {
  return (
    <TypeAnimation
      sequence={[
        "Développeur Web Créatif", // Types 'One'
        2000, // Waits 1s
        "React", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Node", // Types 'Three' without deleting 'Two'
        2000,
      ]}
      className={styles.h1}
      speed={20}
      wrapper="div"
      cursor={false}
      repeat={Infinity}
    />
  );
};

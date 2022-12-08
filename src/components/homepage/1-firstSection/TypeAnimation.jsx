import { TypeAnimation } from "react-type-animation";
import { styles } from "./styles";

export const AnimationName = () => {
  return (
    <TypeAnimation
      sequence={[
        "Développeur Web Créatif", // Types 'One'
        600, // Waits 2s
        "React", // Deletes 'One' and types 'Two'
        600, // Waits 2s
        "Symfony", // Types 'Three' without deleting 'Two'
        600,
        "Full Js",
        600,
      ]}
      className={styles.h1}
      speed={40}
      wrapper="div"
      cursor={false}
      repeat={Infinity}
    />
  );
};

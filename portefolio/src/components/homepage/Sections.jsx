import Name from "./1-firstSection/Name";
import { Present } from "@src/components/homepage/2-secondSection/presentation";
import Creations from "./3-thirthSection/creations";
import Prestation from "./4-fourthSections/Prestations";
import  Contact from "./contact/contact"

const style = {
  bg: "bg-[#0D0628]",
  m0: "m-0",
};

const Sections = () => {
  return (
    <div className={`${style.bg} ${style.m0}`}>
      <Name />
      <Present />
      <Creations />
      <Prestation />
      <Contact />
    </div>
  );
};
export default Sections;

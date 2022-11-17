import Name from "./1-firstSection/Name";
import { Present } from "@src/components/homepage/2-secondSection/Presentation";
import Creations from "./3-thirthSection/creations";
import Prestation from "./4-fourthSections/Prestations";
import Contact from "./contact/contact";
import Competence from "./competences/Competence";

const style = {
  bg: "bg-[#0D0628]",
  m0: "m-0",
};

const Sections = () => {
  return (
    <div className={`${style.bg} ${style.m0}`}>
      <Name />
      <Present />
      <div id="competences">
        <Competence />
      </div>
      <div id="creations">
        <Creations />
      </div>
      <Prestation />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};
export default Sections;

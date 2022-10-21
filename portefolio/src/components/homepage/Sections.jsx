import Name from "./1-firstSection/Name";
import { Present } from "@src/components/homepage/2-secondSection/presentation";
import { Creation } from "./3-thirthSection/creation";
import Prestation from "./4-fourthSections/Prestations";

const style = {
  bg: "bg-[#0D0628]",
  m0: "m-0",
};

const Sections = () => {
  return (
    <div className={`${style.bg} ${style.m0}`}>
      <Name />
      <Present />
      <Creation />
      <Prestation />
    </div>
  );
};
export default Sections;

import Name from "./firstSection/Name";
import { Present } from "@src/components/homepage/secondSection/presentation";
import { Creation } from "./thirthSection/creation";

const style = {
  bg: "bg-[#0D0628]",
  m0: "m-0",
};

const Sections = () => {
  return (
    <div className={`${style.bg} ${style.m0}`}>
      <Name />
      <Present />
      <Creation/>
    </div>
  );
};
export default Sections;

import Layout from "../../src/components/layouts/layout";
import Content from "./content";

const HomePage = () => {
  return (
    <>
      {/* <title>Portfolio Hatim</title> */}
      <Layout children={<Content />} />
    </>
  );
};

export default HomePage;

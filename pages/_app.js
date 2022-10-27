import "tailwindcss/tailwind.css";
import Header from "../src/components/header/Header";
import Sections from "@src/components/homepage/Sections";
import { Component } from "react";
import Footer from "@src/components/footer/footer";

const style = {
  background: "bg-[#341367]",
};

class App extends Component {
  render() {
    return (
      <div className={style.background}>
        <Header />
        <Sections />
        <Footer />
      </div>
    );
  }
}

export default App;

import "tailwindcss/tailwind.css";
import Header from "../src/components/header/Header";
import Sections from "@src/components/homepage/Sections";
import { Component } from "react";


const style = {
  background: "bg-[#341367]",
};

class App extends Component {
  render() {
    return (
      <div className={style.background}>
        <Header />
        <Sections />
      </div>
    );
  }
}

export default App;

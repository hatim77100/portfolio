import "tailwindcss/tailwind.css";
import Header from "./home/header/Header";
import { Component } from "react";

const style = {
  background : "bg-slate-800"
}

class App extends Component {
  render() {
    return (
      <div className={style.background}>
        <Header/>
      </div>
    );
  }
}

export default App;

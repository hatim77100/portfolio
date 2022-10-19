import React from "react";
import Button from "./Button";

let styles = {
    rond: "bg-[#472E65] rounded-full w-10 h-10",
    triangle: "w-0 h-0  border-l-[40px] border-l-transparent border-b-[40px] border-b-[#6649A4] border-r-[40px] border-r-transparent rotate-12",
    pentagon :"w-10 h-0 border-t-[40px] border-t-[#8D7DAF] border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent",
    h2: "text-white text-3xl font-bold text-center",
    wFull: "w-full",
    pt6: "pt-6",
    pt12: "pt-12",
    pt16: "pt-16",
    flex: "flex flex-row justify-between",
    p4: "px-4",
    border: "border-t-4 border-red-500 w-3/5",
    flexCenter: "flex justify-center",
    h1: "capitalize text-red-500 text-2xl font-bold text-center w-4/5",
    button: "text-white capitalize text-2xl bg-[#3848F1] px-4 py-2 rounded-full font-bold"
};

const Name = () => {
  return (
    <section className={`${styles.wFull} ${styles.pt12}`}>
      <div className={`${styles.wFull} ${styles.flex} ${styles.p4}`}>
        <div className={styles.rond}></div>
        <div className={styles.triangle}></div>
      </div>
          <h2 className={`${styles.h2} ${styles.pt16}`}>Hatim NAJOUA</h2>
          <div className={`${styles.flexCenter}`}>
          <hr className={`${styles.border}`}></hr>
          </div>
          <div className={`${styles.flexCenter} ${styles.pt6}`}>
          <h1 className={`${styles.h1}`}>développeur créatif full js</h1>
          </div>
          <div className={`${styles.pt12} ${styles.flexCenter}`}>
             <span className={styles.button}> <Button/> </span>  
          </div>
          <div>
              <div className={styles.pentagon}></div>
          </div>

    </section>
  );
};

export default Name;



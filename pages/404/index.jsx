import "tailwindcss/tailwind.css";
import React from "react";
import Link from "next/link";

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full font-Alkalami bg-slate-300">
      <div className="flex flex-col justify-center items-center border-[3px] p-4 rounded-xl">
        <h1 className="text-[20px] md:text-[40px] text-purple-500">
          Page non disponible pour le moment
        </h1>
        <div>
          <Link href="/">
            <button
              type=""
              className="text-[30px] border-[2px] px-4 py-2 rounded-full cursor-pointer"
            >
              Accueil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;

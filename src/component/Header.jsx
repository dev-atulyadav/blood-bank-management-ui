import React from "react";
import Logo from "../assets/images/icon.png";
import Menu from "../assets/images/menu.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="h-20 w-full p-4 flex justify-between items-center bg-red-400">
      <div className="flex justify-center items-center gap-3 text-2xl text-white uppercase font-bold">
        <img
          src={Logo}
          className="h-14 rounded- bg-white rounded-xl shadow-inset-xl"
          alt=""
        />
        <h1>Rakat Kosh</h1>
      </div>
      <button>
        <img src={Menu} className="h-10" alt="" />
      </button>
      <Nav/>
    </header>
  );
}

import React from "react";

export default function Footer({ socialLinks }) {
  return (
    <footer className="p-1 pb-0 shadow-inset-3xl rounded-t-xl ">
      <div className="text-red-400 p-4 font-bold uppercase text-lg rounded-t-xl h-full flex flex-col justify-center items-center">
        <h2>Stay connected with us.</h2>
        <span className="flex gap-2">
          {socialLinks.map((value) => (
            <a href="" key={value.name}>
              <img src={value.img} className="h-7" alt="" />
            </a>
          ))}
        </span>
      </div>
      <ul className="flex w-full justify-center items-center gap-2 text-red-400 p-2 shadow-inset-xl rounded-xl">
        <li>Home</li>
        <li>|</li>
        <li>About</li>
        <li>|</li>
        <li>Services</li>
      </ul>
    </footer>
  );
}

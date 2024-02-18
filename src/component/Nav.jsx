import React from "react";

export default function Nav() {
  return (
    <div className="absolute w-full h-full backdrop-blur-sm bg-[#00000049] left-0 top-0">
      <nav className=" flex justify-center items-center flex-col gap-4 p-2 bg-gray-2">
        <div className="h-full w-[90%] bg-white rounded-xl relative">
          <ul className="h-full w-full flex justify-center gap-2 pt- items-center flex-col p-3">
            <li className="text-xl font-bold text-red-400 border-red-100 uppercase p-3 border-b-2 w-full text-center cursor-pointer hover:bg-red-100 rounded-xl">
              Home
            </li>
            <li className="text-xl font-bold text-red-400 border-red-100 uppercase p-3 border-b-2 w-full text-center cursor-pointer hover:bg-red-100 rounded-xl">
              About
            </li>
            <li className="text-xl font-bold text-red-400 border-red-100 uppercase p-3 border-b-2 w-full text-center cursor-pointer hover:bg-red-100 rounded-xl">
              Services
            </li>
            <li className="text-xl font-bold text-red-400 border-red-100 uppercase p-3 border-b-2 w-full text-center cursor-pointer hover:bg-red-100 rounded-xl">
              Want To Donate
            </li>
            <li className="text-xl font-bold text-red-400 border-red-100 uppercase p-3 border-b-2 w-full text-center cursor-pointer hover:bg-red-100 rounded-xl">
              Looking for a donor
            </li>
            <li className="flex justify-center items-center text-red-400 text-xl gap-2">
              <button className="uppercase py-3 px-7 rounded-xl bg-blue-400 hover:bg-blue-500 font-semibold text-white">
                Login
              </button>
              <span>|</span>
              <button className="uppercase py-3 px-5 rounded-xl bg-green-400 hover:bg-green-500 font-semibold text-white">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <button className="px-4 py-3 rounded-xl text-white bg-red-400 hover:bg-red-500 uppercase">
          Close
        </button>
      </nav>
    </div>
  );
}

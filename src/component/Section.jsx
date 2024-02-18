import React from "react";
import Bg_1 from "../assets/images/bg-1.jpg";
import Arrow from "../assets/images/arrow.png"

export default function Section() {
  return (
    <section
      className="h-screen w-full
    p-4"
    >
      <article className="h-full w-full">
        <main className="flex flex-col justify-center items-center gap-4">
          <div className="p-2 rounded-xl shadow-inset-3xl">
            <img src={Bg_1} className="rounded-xl sm:h-80" alt="" />
          </div>
          <div className="p-1.5 font-bold text-center text-2xl shadow-inset-3xl rounded-xl text-white">
            <h2 className="bg-red-400 rounded-xl p-2">
              A single drop of your blood could be a drop of life for someone
              else.
            </h2>
          </div>
          <button className="px-4 py-4 flex gap-2 justify-center items-center bg-green-500 rounded-xl text-xl font-bold uppercase text-white self-start">
          <span>
            Explore
          </span>
          <img src={Arrow} className="h-5" alt="" />
          </button>
        </main>
      </article>
    </section>
  );
}

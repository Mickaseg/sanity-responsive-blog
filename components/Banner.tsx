import React from "react";

function Banner() {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
      <div className=" px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">LEFT</span>{" "}
          is the div
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quasi explicabo voluptas doloribus sunt ipsa hic fugit voluptatibus ut
          beatae.
        </h2>
      </div>
      <div className="">
        <img
          className="hidden md:inline-flex h-32 lg:h-80"
          src="https://svgsilh.com/svg/2051703.svg"
          alt="k"
        />
      </div>
    </div>
  );
}

export default Banner;

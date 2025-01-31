import React from "react";

import bannerImageOne from "../../public/banner1.png";
import bannerImageTwo from "../../public/banner2.png";

export default function BannerSection() {
  return (
    <div className=" w-8/12 mx-auto grid grid-cols-2 gap-4 mt-24">
      <div className=" relative   ">
        <img
          src={bannerImageOne}
          alt="banner-one"
        />
        <div className=" absolute top-8 left-8 ">
          <p className=" text-3xl font-bold">Lorem ipsum dolor sit.</p>
          <p className='font-semibold opacity-70'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          <button className="bg-black text-white px-6 py-1 font-semibold rounded-xl">Shop Now</button>
        </div>
      </div>

      <div className=" relative ">
        <img
          src={bannerImageTwo}
          alt="banner-two"
        />
        <div className=" absolute top-8 left-8 buttom-2">
          <p className=" text-3xl font-bold">Lorem ipsum dolor sit.</p>
          <p className='font-semibold opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button className="bg-black text-white px-6 py-1 font-semibold rounded-xl">Hello world</button>
        </div>
      </div>
    </div>
  );
}
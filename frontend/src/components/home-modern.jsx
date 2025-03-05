import React from "react";
import logo from "../../public/icons.svg";
import first from "../../public/banner1.png";
import second from "../../public/banner2.png";
// import third from "../../public/bannerimage/3.jpg";

export default function HomeMorden() {
  return (
    <div className=" mt-24  ">
      <div className="flex items-center justify-between w-8/12 mx-auto bg-gray-100 rounded-xl mt-8 space-x-8 p-4 flex-wrap ">
        <div className="flex items-center gap-8 ">
          <img src={logo} alt="" />
          <div className="space-y-2 ">
            <p className="text-3xl font-semibold opacity-80">
              Welcome to FreshCart
            </p>
            <p className="text-sm font-semibold opacity-60">
              Download the app get free food &{" "}
              <span className="text-green-700">$30</span> off on your first
              order.
            </p>
          </div>
        </div>
        <button className="bg-black text-white text-sm p-4 rounded-xl hover:bg-gray-800 duration-200">
          Download FreshCArt App
        </button>
      </div>

      <div className="w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8 mt-8">
        <div className=" relative ">
          <img    className="rounded-xl object-cover h-60 w-80" src={first} alt="" />
          <div className=" absolute space-y-4 top-2 left-8">
            <p className="text-xl font-bold opacity-80">
              10% cashback on <br />
              personal care
            </p>
            <p className=" text-xl opacity-50">
              Max cashback: $12 <br />
              Code: <span className="font-semibold">CARE12</span>
            </p>
            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-gray-800 duration-200">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative ">
          <img  className="rounded-xl relative object-cover h-60 w-80" src={second} alt="" />
          <div className=" absolute space-y-4 top-1  left-8">
            <p className="text-2xl font-bold opacity-80">
              Say yes to <br />
              season’s fresh
            </p>
            <p className=" text-xl opacity-50">
              Refresh your day
              <br />
              the fruity way
            </p>
            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-gray-800 duration-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* <div className=" relative">
          <img className="rounded-xl relative" src={third} alt="" />
          <div className=" absolute space-y-4 top-8 left-8">
            <p className="text-2xl font-bold opacity-80">
              When in doubt, <br />
              eat ice cream
            </p>
            <p className=" text-xl opacity-50">
              Enjoy a scoop of <br />
              summer today
            </p>
            <button className="bg-black text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-gray-800 duration-200">
              Shop Now
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
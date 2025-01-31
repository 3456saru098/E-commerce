import React from 'react'
import ReactStars from 'react-stars'
//import ReactStars from 'react-stars'
//import myImage from "../../public/biscuits.jpg"; 
import myImage from '../../public/biscuits.jpg';

export default function SingleProductard({item}) {
    return (
    <div> <div
  
    className=" border border-gray-300 rounded-md flex  flex-col items-center justify-center  p-4 space-y-1.5  ">
    <img
      src={myImage}
      alt=""
    />
    <p className=" font-semibold opacity-50 text-xs">{item.category}</p>
    <p className=" font-semibold text-sm">{item.name}</p>
    <div className=" flex items-center gap-2">
      <ReactStars
        count={5}
        size={16}
        value={4.5}
        color2={"#ffd700"}
      />
      <p className=" font-semibold opacity-70 text-sm">4.5 (4)</p>
    </div>

    <div className=" flex items-center justify-between w-full">
      <p className=" font-semibold">
        $21.6 <span className=" opacity-70">$24</span>{" "}
      </p>
      <button className=" bg-red-400 text-white font-semibold rounded-md px-4 py-1 text-xs">Add</button>
    </div>
  </div></div>    
    )
}

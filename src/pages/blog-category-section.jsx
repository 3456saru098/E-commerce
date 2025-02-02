import React from 'react'
import Image from "../../public/blog-img-1.jpg"
export default function BlogCategorySection({item}) {
  return (
    
      <div className="flex flex-col max-md:w-full xl:w-[27vw] xl:h-[58vh]   relative  ">
              <div className="max-md:w-full md:w-full rounded-xl object-cover overflow-hidden cursor-pointer  ">
                <img
                  className="hover:scale-110 duration-700"
                  src={Image}
                  alt="Image"
                />
              </div>
              <div className="space-y-4 mt-4 ">
                <p className="text-green-700 ">{item.Category}</p>
                <p className="text-lg font-semibold  opacity-80 hover:text-green-800 cursor-pointer">
                  {item.Name}
                </p>
                <p className="opacity-60 ">{item.About_item}</p>
                <div className="text-xs font-semibold flex justify-between item-center">
                  <p className="opacity-50">{item.Date}</p>
                  <p>
                    {" "}
                    <span className=" opacity-50">Read time:</span> {item.Time} <span className=" opacity-50">min</span> 
                  </p>
                </div>
              </div>
            </div>
  )
}
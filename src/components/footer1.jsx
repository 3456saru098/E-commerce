import React from "react";

export default function Footer1({text}) {
  return (
  <div className=" mt-16 ">
            <p className="font-semibold  opacity-80 whitespace-nowrap">
              {text.Main_text}{" "}
            </p>
            <div className="flex gap-6 whitespace-nowrap mt-4 text-sm font-semibold opacity-60">
              <div className="space-y-2 ">
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text1}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text2}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text3}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text4}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text5}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text6}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text7}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text8}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text9}
                </p>
              </div>
              <div className="space-y-2 flex  flex-col ">
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text10}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text11}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text12}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text13}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text14}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text15}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text16}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text17}
                </p>
                <p className="hover:text-green-700 cursor-pointer">
                  {text.sub_text18}
                </p>
              </div>
            </div>
          </div>
      
        
    
    
  );
}
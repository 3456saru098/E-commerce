import React from 'react'
import { Clock,Gift,Package,RefreshCcw } from 'lucide-react';
export default function UpperFooterSection() {
  return (
    <div className="flex w-10/12 mx-auto p-4 mt-24 gap-8">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Icons.map((item, index) => (
          <div key={index} className=" space-y-4  ">
            <div className="text-green-600 ">{item.icon}</div>
            <p className="font-semibold text-xl opacity-85">{item.name}</p>
            <p className="opacity-60 text-sm font-semibold">{item.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
  
}


const Icons=[
        {
            icon:  <Clock size={50} strokeWidth={1.2}/>,
            name: "10 minute grocery now",
            text:"Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you",

        },


        {
            icon:    <Gift  size={50} strokeWidth={1.5} />,
            name: "Best Prices & Offers",
            text:"Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",

        },

        {
            icon:   <Package size={50} strokeWidth={1.5} />,
            name: "Wide Assortment",
            text:"Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",

        },

        {
            icon: <RefreshCcw size={40} strokeWidth={1.5} />,
            name: "Easy Returns",
            text:"Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .",

        },




];

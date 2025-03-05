import React from 'react'
import { Heart, MapPin, ShoppingBag, User } from 'lucide-react'
//we change the path of mylogo
import mylogo from "../../public/mylogo.svg"
export default function MiddleNavbar() {
  return (
    <div className='flex justify-between w-8/12 mx-auto'>

    <div>
      <img src={mylogo} alt='logo' />
    </div>
    <div className='flex gap-3'>
      <input className='border border-green-500 rounded-md w-50  pl-2' type="text" placeholder='Search Location' />
      <button className='flex items-center border border-green-500 rounded-md px-2 hover:bg-gray-400 hover:cursor-pointer gap-1'><MapPin size={16} />Location</button>
    </div>
    <div className='flex gap-4'>
      <Heart />
      <User />
      <ShoppingBag />
    </div>
  </div>
  )
}

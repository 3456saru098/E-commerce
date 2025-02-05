import React from 'react'
import Image from "../../public/signup-image.svg"
import { EyeOff } from 'lucide-react'
export default function SignUp() {
    return (
        <div className=' grid grid-cols-2 w-8/12 mt-16 mx-auto '>
            <div>
                <img src={Image} alt='' />
            </div>
            <div>
                <div className='space-y-3'>
                    <p className='font-bold text-2xl '>Get Start Shopping</p>
                    <p className='font-semibold opacity-80 text-gray-600 '>Welcome to FreshCart! Enter your email to get started.</p>
                </div>
                <div className='mt-8  '>
                    <div className='space-x-5 flex'>
                        <input className=' border border-gray-300  opacity-80 rounded-md px-4 py-2 font-semibold w-[15.5vw]' type='text' placeholder='First Name'/>
                        <input className=' border border-gray-300 opacity-80 rounded-md px-4 py-2 font-semibold w-[15.5vw]' type='text' placeholder='Last Name'/>
                    </div>
                    <div className='mt-4 border border-gray-300 font-semibold rounded-md px-4 py-2'>
                    <input type='text' placeholder='Email'/>
                    </div>

                    <div className='border border-gray-300  mt-4 px-4 py-2 rounded-md font-semibold flex'>
                        <input type='password' placeholder='******'/>
                        <EyeOff className='opacity-70 '/>
                    </div>
                    <button className='bg-green-700 text-white mt-4 font-semibold px-4 py-2 w-[33vw] rounded-md'>Register</button>
                    <p className='opacity-70 mt-4 text-sm'>By continuing, you agree to our<span className='text-green-700'>Terms of Service </span> & <span className='text-green-600'>Privacy Policy</span></p>
                </div>

            </div>
        </div>
    )
}

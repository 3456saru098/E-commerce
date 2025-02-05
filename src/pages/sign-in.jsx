import React from 'react'
import Image from "../../public/signin-image.svg"
import { EyeOff } from 'lucide-react'

export default function SignIn() {

    return (
        <div className='grid grid-cols-2 w-8/12 mt-16 mx-auto'>
            <div>
                <img src={Image} alt="" />
            </div>

            <div>
                <div className='space-y-3' >
                    <p className='text-2xl font-bold'>Sign in to FreshCart</p>
                    <p className='font-semibold opacity-70 text-sm text-gray-600'>Welcome back to FreshCart! Enter your email to get started.</p>
                </div>
                <div className="grid grid-col gap-y-4 mt-8 ">
                    <div>
                        <input className='border border-gray-400 px-4 py-2 w-[30vw] rounded-md' type='text' placeholder='Email' />
                    </div>
                    <div className='relative flex'>
                        <input className='border border-gray-400 px-4 py-2 w-[30vw] rounded-md ' type='password' placeholder='*******' />
                        <EyeOff className='absolute top  right-3 cursor-pointer' />
                    </div>
                    <div className='flex space-x-12'>
                       <div className='flex gap-2'> 
                        <input type='checkbox' />
                       <span className='opacity-70'>Remember me</span>
                       </div>
                       
                       <div className='flex gap-1'>
                        <span className='opacity-70'>Forgot password?</span>
                        <span className='text-green-600 cursor-pointer'>Reset It</span>
                       </div>
                    </div>
                    <button className='bg-green-600 cursor-pointer w-[30vw] rounded-md text-white px-4 py-3 font-semibold'>Sign In</button>
                  <div className='space-x-2'>
                    <span className='opacity-70  '>Don’t have an account?</span>
                    <span className='font-semibold text-green-600 cursor-pointer'>Sign Up</span>
                  </div>
                </div>
            </div>
        </div>


    )
}

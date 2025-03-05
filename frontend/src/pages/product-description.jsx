import React, { useEffect, useState } from 'react'
import myImage from "../../public/product-single-img.jpeg"
import ReactStars from 'react-stars'
import { LuShoppingBag } from "react-icons/lu";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import ChildComponent from '../components/child-component';

export default function ProductDescription() {

    //State in react with hooks
    //setter lai variable ley matra change garna milx
    //const[variable,variableLaiSetGarne or setter function] =useState (initialValue)

    const [count, setCount] = useState(6);
    console.log(count);


    //UseEffect Hook
    // It runs after the page reloads and depends upon dependency array.
      useEffect(()=>{
            console.log("use effect is running");

      },[count]) //[]==> dependency array





    //Props (properties) in react .Parent ley child lai property dine
    // props can only be passed from parents from child 
    //props cannot be changed by the  child component
    const name = "Sarita Sharma"


    return (
        <div className='w-8/12 mx-auto grid grid-cols-2 space-x-13 mt-8'>

            <div>
                {/* <img src={myImage} alt='' /> */}
                <InnerImageZoom src={myImage} />

            </div>

            <div className='space-y-2'>
                <p className='text-2xl text-green-500 font-semibold'>Snack & Munchies</p>
                <p className='text-3xl font-semibold'>Haldiram's Sev Bhujia</p>

                <div className='flex items-center gap-2'>
                    <ReactStars
                        count={5}
                        size={16}
                        value={4.5}
                        color2={"#ffd700"}
                    />
                    <p className='text-green-500 text-xs font-semibold'>(4 reviews)</p>
                </div>

                <div className='space-x-2'>
                    <span className='font-bold text-xl '>$21.6</span>
                    <span className='opacity-70  text-xl font-semibold'>$24</span>
                    <span className='text-red-500 text-sm'>10% Off</span>
                </div>

                <hr />

                <div className='mt-6 space-x-4'>
                    {/* span is used  because it takes the needed size but div takes the whole width */}
                    <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500'>250g</span>
                    <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500'>350g</span>
                    <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500'>400g</span>
                </div>


                <div className='mt-8'>
                    <span onClick={(e) => setCount(count - 1)} className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer'>-</span>
                    <span className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500'>{count}</span>
                    <span onClick={(e) => setCount(count + 1)} className='border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 cursor-pointer'>+</span>
                </div>


                <div className='flex space-x-2 mt-6 '>
                    <span className=' border border-gray-400 flex px-7 py-2 items-center justify-center rounded-md bg-green-500 space-x-2' >
                        <div><LuShoppingBag className='w-6 h-6 text-white' /></div>
                        <button className='text-xs text-white font-bold'>Add to cart</button>
                    </span>
                    <span className='border border-gray-300 rounded-md bg-gray-300 px-3 py-1 content-center'><IoSwapHorizontalSharp className='w-6 h-6' /></span>
                    <span className='border border-gray-300 rounded-md bg-gray-300 px-3 py-1 content-center'><CiHeart className='w-6 h-6' /></span>
                </div>

                <hr />
                <ChildComponent name={name} />
                <ChildComponent name="Hello world" />
                <ChildComponent name={"Hello World"} />



                <div className="grid grid-cols-2 opacity-60 mt-4 text-s">
                    <div>
                        <p className="mt-2">Product Code:</p>
                        <p className="mt-2">Availability:</p>
                        <p className="mt-2" >Type:</p>
                        <p className="mt-2" >Shipping:</p>
                    </div>
                    <div>
                        <p className="mt-2" >FBB00255</p>
                        <p className="mt-2" >In Stock</p>
                        <p className="mt-2" >Fruits</p>
                        <p className="mt-2" >01 day shipping. <span className="text-xs opacity-60">( Free pickup today)</span> </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

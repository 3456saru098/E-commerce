import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import myImage from "../../public/product-single-img.jpeg"
import { useLocation } from "react-router-dom";
import { FaHeartBroken, FaShoppingBag } from "react-icons/fa";
import { LuArrowLeftRight, LuHeart } from "react-icons/lu";
import ChildComponent from "../components/child-component";
import axios from "axios";

export default function ProductDescription() {
  // state in react with hooks
  // setter lai variable le matra change garna milcha
  // const [variable, variableSetGarne or setter]=useState(initialValue)
  const [count, setCount] = useState(5);
  const location = useLocation();
  const product_id = location.pathname.split("/")[2];

  const [isFetching, setIsFetching] = useState(false);


  // fetch single product by id
  const [singleProduct, setSingleProduct] = useState(undefined);
  const fetchSingleProduct = async () => {
    try {
      setIsFetching(true);
      const response = await axios.get(
        `http://localhost:4000/products/${product_id}`
      );
      setSingleProduct(response.data);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.log("Something Went Wrong while fetching single product", error);
    }
  };
  useEffect(() => {
    fetchSingleProduct();
  }, [product_id]);

  //  props(properties) in react ; parents le child lai properties deko
  // props can only be passed from parent to child
  // props cannot be change by child componenet
  const name = "Sarita Sharma";

  // useEffect hook
  // It runs after the page reloads and depends upon dependency array.

  useEffect(() => {
    console.log("useEffect is running");
  }, [count]);
  // []==> this is dependency array

  // const images = [image1, image2, image3, image4];
  // const [selectedImage, setSelectedImage] = useState(image1);
  // const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div>


      {isFetching ? (
        <p>Loading....</p>
      ) : (
        <div className="w-8/12 mx-auto grid grid-cols-2 mt-4 ">
          <div className="relative w-full">
            <div className="relative overflow-hidden w-full h-[400px] flex items-center justify-center rounded-lg">
              {/* <img
          src={selectedImage}
          alt="Product"
          // className={`w-full h-full object-cover transition-transform duration-500 ${
          //   isZoomed ? "scale-150" : "scale-100"
          // }`}
          // onMouseEnter={() => setIsZoomed(true)}
          // onMouseLeave={() => setIsZoomed(false)}
          // style={{ cursor: "zoom-in" }}
        /> */}
              <InnerImageZoom src={singleProduct?.imageUrl || myImage} />
            </div>

            {/* <div className="flex gap-4 mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Thumbnail"
              className={`w-24 h-24 border-2 rounded-md cursor-pointer ${
                selectedImage === image ? "border-green-500" : "border-transparent"
              }`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div> */}
          </div>

          <div className="space-y-2 ml-10">
            <p className="text-xs text-green-500 font-semibold">
              {singleProduct?.category}
            </p>
            <p className="text-3xl font-semibold">{singleProduct?.name}</p>

            <div className="flex items-center gap-4">
              <ReactStars count={5} size={16} value={4.5} color2={"#ffd700"} />
              <p className="text-xs font-semibold text-green-500">
                (4 reviews)
              </p>
            </div>

            <div>
              <span className="text-xl font-bold">${singleProduct?.price}</span>{" "}
              <span className="text-xl font-bold opacity-60 line-through">
                ${singleProduct?.previousPrice}
              </span>{" "}
              <span className="text-sm text-red-500 ">10% Off</span>
              <p>{singleProduct?.discription}</p>
            </div>

            <hr className="opacity-20" />

            <div className="mt-8 space-x-4">
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 ">
                250g
              </span>
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 ">
                500g
              </span>
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 ">
                1kg
              </span>
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg w-24 mt-8">
              <span
                onClick={(e) => setCount(count - 1)}
                className="px-3 py-2 text-lg font-semibold border-r border-gray-300 w-full text-center text-gray-500 cursor-pointer"
              >
                -
              </span>

              <span className="px-3 py-2 text-lg font-semibold w-full text-center text-gray-500">
                {count}
              </span>

              <span
                onClick={(e) => setCount(count + 1)}
                className="px-3 py-2 text-lg font-semibold border-l border-gray-300 w-full text-center text-gray-500 cursor-pointer"
              >
                +
              </span>
            </div>

            <div className="mt-4 flex gap-4 cursor-pointer">
              <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg text-md hover:bg-green-600 transition duration-300 cursor-pointer">
                <FaShoppingBag className="text-white" size={20} />
                Add To cart
              </button>
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 hover:bg-gray-300 transition duration-300">
                <LuArrowLeftRight />
              </span>
              <span className="border border-gray-400 font-semibold px-4 py-2 rounded-md text-gray-500 hover:bg-gray-300 transition duration-300 ">
                <LuHeart />
              </span>
            </div>
            <hr className="opacity-20" />

            <ChildComponent name={name} />
            <ChildComponent name={"Hello World"} />
            <ChildComponent name="Hello World" />

            <div className="grid grid-cols-2 opacity-60 mt-4 text-s">
              <div>
                <p className="mt-4">Product Code:</p>
                <p className="mt-4">Availability:</p>
                <p className="mt-4">Type:</p>
                <p className="mt-4">Shipping:</p>
              </div>
              <div>
                <p className="mt-4">FBB00255</p>
                <p className="mt-4">In Stock</p>
                <p className="mt-4">Fruits</p>
                <p className="mt-4">
                  01 day shipping.{" "}
                  <span className="text-xs opacity-60">
                    ( Free pickup today)
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}


      
    </div>
  );
}
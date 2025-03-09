import myImage from "../../public/biscuits.jpg";
import ReactStars from "react-stars";
import SingleProductard from "./single-product-card";
import { useEffect, useState } from "react";
import axios from "axios";
export default function PopularProductsSection() {
  // const products = [
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies",
  //     name: "Haldirams Sev Bhujia",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 2",
  //     name: "Haldirams Sev Bhujia 2",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 3",
  //     name: "Haldirams Sev Bhujia 3",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchiesc4",
  //     name: "Haldirams Sev Bhujia 4",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 5",
  //     name: "Haldirams Sev Bhujia 5",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 6",
  //     name: "Haldirams Sev Bhujia 6",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 7",
  //     name: "Haldirams Sev Bhujia 7",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 8",
  //     name: "Haldirams Sev Bhujia 8",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 9",
  //     name: "Haldirams Sev Bhujia 9",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },

  //   {
  //     image: myImage,
  //     category: "Snack & Munchies 10",
  //     name: "Haldirams Sev Bhujia 10",
  //     rating: 4.5,
  //     reviews: 4,
  //     price: 200,
  //     previousPrice: 250,
  //   },
  // ];

  // //Hooks(useState,useEffect,useRef,useContext)
  // // useState Hook
  // //const[variable,setterFunction]=useState(initialValue)
  // const [name, setName] = useState("Sarita Sharma");
  // console.log(name);

  // // 2. useEffect Hook
  // //yesley katibela run hunx vanne determine garx
  // //useEffect runs when page reload or its dependency changes
  // const a = 5;
  // useEffect(() => {
  //   console.log("i am useEffect");
  // }, [a]);
  // //[] dependency array
  const [allProducts,setAllProducts]=useState(undefined);
  const fetchAllProducts = async () => {
    try {
      //npm axios
      const response = await axios.get("http://localhost:4000/products");
      console.log(response.data.data)
      setAllProducts(response.data.data)
    } catch (error) {
      console.log("Something went wrong",error);
    }
  };

  useEffect(()=>{
fetchAllProducts()
  },[])

  return (
    <div className="  md:w-8/12 mx-auto mt-24 space-y-8">
      {/* <button onClick={() => setName("sarita Updated")}>Change Name</button> */}

      <p className=" text-3xl font-semibold ">Popular Products</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4 ">
        {allProducts?.map((eachItem, index) => (
          <SingleProductard item={eachItem} key={index} />
        ))}
      </div>
    </div>
  );
}

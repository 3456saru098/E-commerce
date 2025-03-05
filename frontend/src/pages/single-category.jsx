import React from 'react'
import SingleProductard from '../components/single-product-card'
import myImage from "../../public/biscuits.jpg"

export default function SingleCcategory() {
  const products = [
    {
      image: myImage,
      category: "Snack & Munchies",
      name: "Haldirams Sev Bhujia",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 2",
      name: "Haldirams Sev Bhujia 2",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
    {
      image: myImage,
      category: "Snack & Munchies 3",
      name: "Haldirams Sev Bhujia 3",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchiesc4",
      name: "Haldirams Sev Bhujia 4",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 5",
      name: "Haldirams Sev Bhujia 5",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 6",
      name: "Haldirams Sev Bhujia 6",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 7",
      name: "Haldirams Sev Bhujia 7",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 8",
      name: "Haldirams Sev Bhujia 8",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 9",
      name: "Haldirams Sev Bhujia 9",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },

    {
      image: myImage,
      category: "Snack & Munchies 10",
      name: "Haldirams Sev Bhujia 10",
      rating: 4.5,
      reviews: 4,
      price: 200,
      previousPrice: 250,
    },
  ];

  return (
    <div className='w-8/12 mx-auto'>
      <div >
        <div className='bg-gray-300 py-24 text-5xl font-semibold text-center'>
          Snack and Munchies
        </div>
      </div>
      {/* list of items */}
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4">
        {
          products.map((item, index) => (
            <SingleProductard  item={item} key={index} /> //props passing
          ))
        }

      </div>

    </div>
  )
}

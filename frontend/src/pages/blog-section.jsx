import React from "react";
import BlogCategorySection from "./blog-category-section";
import Image1 from "../../public/blog-img-1.jpg"
import Image2 from "../../public/blog-img-2.jpg"
import Image3 from "../../public/blog-img-3.jpg"
import Image4 from "../../public/blog-img-4.jpg"
import Image5 from "../../public/blog-img-5.jpg"
import Image6 from "../../public/blog-img-6.jpg"
import Image7 from "../../public/blog-img-7.jpg"
import Image8 from "../../public/blog-img-8.jpg"
import Image9 from "../../public/blog-img-9.jpg"
const Items = [
  {
    Image: Image1,
    Category: "Recipes",
    Name: "Harissa Chickpeas with Whipped Feta",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "12 min",
  },
  {
    Image: Image2,
    Category: "Retailer",
    Name: "Almond Butter Chocolate Chip Zucchini Bars",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13 min",
  },
  {
    Image: Image3,
    Category: "Recipes",
    Name: "Spicy Shrimp Tacos Garlic Cilantro Lime Slaw",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "20 April 2024",
    Time: "13 min",
  },
  {
    Image: Image4,
    Category: "Retailer",
    Name: "Red Chile Chicken Tacos with Creamy Corn",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "15 February 2025",
    Time: "13 min",
  },
  {
    Image: Image5,
    Category: "Company",
    Name: "Basic + Awesome Broccoli Cheese Soup",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13 min",
  },
  {
    Image: Image6,
    Category: "Retailer",
    Name: "No-Boil Baked Penne with Meatballs",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "15 February 2024",
    Time: "13 min",
  },
  {
    Image: Image7,
    Category: "Recipes",
    Name: "Simple Homemade Tomato Soup",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13 min",
  },
  {
    Image: Image8,
    Category: "Company",
    Name: "Garlic Cream Bucatini with Peas and Asparagus",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13 min",
  },
  {
    Image: Image9,
    Category: "Recipes",
    Name: "Cheese Garlic Cream Soup",
    About_item:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum, ipsum ac pretium consequat, diam dui malesuada nu...",
    Date: "1 February 2025",
    Time: "13 min",
  },
];

export default function BlogSection() {
  return (
    <div className="w-full mx-auto">
      {/* Breadcrumb */}
      <div className="mt-2 font-semibold">
        <p className="flex gap-4">
          <span className="text-green-700 hover:text-green-400 cursor-pointer">Home</span>
          <span className="opacity-40">/</span>
          <span className="mr-4 opacity-40">Blog</span>
        </p>
      </div>

      {/* Blog Header */}
      <div className="mt-16">
        <p className="text-4xl font-bold opacity-80">FreshCart Blog</p>

        {/* Featured Blog */}
        <div className="mt-12 flex max-sm:flex-col items-center justify-between gap-8">
          <div className="relative w-full  cursor-pointer rounded-xl overflow-hidden">
            <img
              className="w-full h-auto tranform  object-cover transition-all hover:scale-110 duration-700"
              src={Image1}
              alt="Featured Blog"
            />
          </div>
          <div className="space-y-4 w-full">
            <p className="text-3xl font-semibold opacity-80 hover:text-green-800 cursor-pointer">
              Harissa Chickpeas with Whipped Feta
            </p>
            <p className="opacity-60 text-sm font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
              erat ut neque bibendum egestas sed quis justo. Integer non rhoncus
              diam. Nullam eget dapibus lectus, vitae condimentum sem.
            </p>
            <div className="text-xs font-semibold flex justify-between">
              <p className="opacity-50">1 February 2025</p>
              <p><span className="opacity-50">Read time:</span> 12 min</p>
            </div>
          </div>
        </div>

        {/* Blog List */}
        <div className="grid sm:grid-cols-1  md: grid-cols-2 lg:grid-cols-3 px-11 mt-5">
          {Items.map((item, index) => (
            <BlogCategorySection key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

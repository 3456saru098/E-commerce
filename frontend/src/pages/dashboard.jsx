import React, { useState, useEffect } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import CategoryCreate from "../components/category-create";
export default function Dashboard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [previousPrice, setPreviousPrice] = useState(null);
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState(null);

  const [isSubmitting, setisSubmitting] = useState(false);

  // console.log(title,description,price,previousPrice,category,image)

  const createProduct = async (e) => {
    e.preventDefault();

    try {
      setisSubmitting(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("previousPrice", previousPrice);
      formData.append("category", category);
      formData.append("imageUrl", image);

      const response = await axios.post(
        "http://localhost:4000/products",
        formData
      );
      console.log(response);

      setisSubmitting(false);
      setName("");
      setDescription("");
      setPreviousPrice("");
      setPrice("");
      setCategory("");
      setImage("");
    } catch (error) {
      console.log("something went wrong ", error);
      setisSubmitting(false);
    }
  };

  // fetch all products
  const [allProducts, setAllProducts] = useState();
  const fetAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setAllProducts(response.data.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetAllProducts();
  }, []);
  console.log(allProducts, "This is all products");
  const [isDeleting, setisDeleting] = useState(false);
  const handleProduct = async (_id) => {
    try {
      setisDeleting(true);
      const response = await axios.delete(
        `http://localhost:4000/products/${_id}`
      );
      setisDeleting(false);
      fetAllProducts()
    } catch (error) {
      setisDeleting(false);
      console.log("Something went wrong", error);
    }
  };

  return (
    <div className="w-8/12 mx-auto">
      <form
        onSubmit={createProduct}
        className="border p-6 shadow-xl flex flex-col gap-4"
      >
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Product Name"
          className="border border-gray-400 p-2 rounded-md"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='"Enter Product description'
          className="border border-gray-400 p-2 rounded-md"
        ></textarea>

        <input
          required
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="500"
          className=" border border-gray-400 p-2 rounded-md"
        />

        <input
          required
          value={previousPrice}
          onChange={(e) => setPreviousPrice(e.target.value)}
          type="number"
          placeholder="1000"
          className=" border border-gray-400 p-2 rounded-md"
        />

        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Enter category"
          className=" border border-gray-400 p-2 rounded-md"
        />

        <input
          required
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          placeholder="Enter Image"
          className="border border-gray-400 p-2 rounded-md"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          onClick={createProduct}
          className="bg-green-500 border-none text-white px-6 py-6 flex items-center gap-1 justify-center"
        >
          {isSubmitting && <LoaderCircle size={20} className="animate-spin" />}

          <span>Create Product</span>
        </button>
      </form>
      <div className="space-y-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quaerat?
        {allProducts?.map((item) => (
          <div>
            key={item._id}
            {item?.name}{" "}
            <button
              onClick={() => handleProduct(item._id)}
              className="text-white bg-red-500 px-4 py-2 border-none rounded-md">

             { isDeleting ? "Deleting...." : "Delete"}
            </button>
          </div>
        ))}
      </div>
      <CategoryCreate/>
    </div>
  );
}

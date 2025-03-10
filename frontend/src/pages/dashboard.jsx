import React, { useState } from 'react'
import axios from "axios"

export default function Dashboard() {

const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [price, setPrice] = useState("");
const [previousPrice, setPreviousPrice] = useState(null);
const [category, setCategory] = useState(null);
const [image, setImage] = useState(null);

// console.log(title,description,price,previousPrice,category,image)

const createProduct = async(e)=>{
  e.preventDefault()

  try {

  const formData = new FormData()
  formData.append("name", name)
  formData.append("description", description)
  formData.append("price", price)
  formData.append("previousPrice", previousPrice)
  formData.append("category", category)
  formData.append("imageUrl", image)

  const response = await axios.post("http://localhost:4000/products", formData)
  console.log(response)

  } catch (error) {
    console.log("something went wrong ", error)
    
  }
}


  return (
    <div className='w-8/12 mx-auto'>

<form onSubmit={createProduct} className='border p-6 shadow-xl flex flex-col gap-4'>
  <input
  required
  value={name}
  onChange={(e) => setName(e.target.value)}
  
  type="text" placeholder='Enter Product Name' className='border border-gray-400 p-2 rounded-md' />

<textarea 
value={description}
onChange={(e) => setDescription(e.target.value)}

placeholder='"Enter Product description' className='border border-gray-400 p-2 rounded-md'></textarea>


<input 
  required

value={price}
onChange={(e) => setPrice(e.target.value)}

type="number" placeholder='500' className=' border border-gray-400 p-2 rounded-md' />


<input 
  required


value={previousPrice}
onChange={(e) => setPreviousPrice(e.target.value)}
type="number" placeholder='1000' className=' border border-gray-400 p-2 rounded-md' />


<input 
  required

value={category}
onChange={(e) => setCategory(e.target.value)}
type="text" placeholder='Enter category' className=' border border-gray-400 p-2 rounded-md' />


<input
  required

onChange={(e) => setImage(e.target.files[0])}
type="file" placeholder='Enter Image' className='border border-gray-400 p-2 rounded-md' />


<button 
type='submit'
onClick={createProduct} className='bg-green-500 border-none '>Create Product</button>


</form>

    </div>
  )
}
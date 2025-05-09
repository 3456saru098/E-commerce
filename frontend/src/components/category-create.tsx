import React, { useState } from "react";
import axios from "axios";
export default function CategoryCreate() {
  const [name, setName] = useState("");
  const [image, setImage] = useState <File | null >(null);
console.log(name)
console.log(image)


const [isCreating,setisCreating]=useState(false)
const createCategory = async ()=>{
  try {
    setisCreating(true)
    const response= await axios.post("http://localhost:4000/categories");
    setisCreating(false)

  } catch (error) {
    console.log("something went wrong ",error)
    setisCreating(false)
    
  }
}

  return (
    <div>
      <form onSubmit={createCategory}>
        <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
          type="text"
          placeholder="Enter the category name"
          className="border border-gray-400 p-2 rounded-md"
        />
        <input
        onChange={(e)=>{
          if(e.target.files && e.target.files.length>0){
            setImage(e.target.files[0]);
          }
        }}

          type="file"
          placeholder="Select the file"
          className="border border-gray-400 p-2 rounded-md"
        />
        <button type="submit" className="px-12 py-3 bg-green-500 text-white">
          Create Category
        </button>
      </form>
    </div>
  );
}

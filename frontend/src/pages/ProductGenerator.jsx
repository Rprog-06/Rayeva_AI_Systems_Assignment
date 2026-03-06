import { useState } from "react";
import axios from "axios";

export default function ProductGenerator() {

 const [name,setName] = useState("");
 const [description,setDescription] = useState("");
 const [result,setResult] = useState(null);

 const handleSubmit = async () => {

  const res = await axios.post(
   "http://localhost:5000/api/products/generate",
   {name,description}
  );

  setResult(res.data.data);
 };

 return (

  <div style={{padding:"40px"}}>

   <h2>AI Product Category Generator</h2>

   <input
    placeholder="Product Name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
   />

   <br/><br/>

   <textarea
    placeholder="Product Description"
    value={description}
    onChange={(e)=>setDescription(e.target.value)}
   />

   <br/><br/>

   <button onClick={handleSubmit}>
     Generate AI Tags
   </button>

   {result && (

    <div>

     <h3>Category</h3>
     <p>{result.category}</p>

     <h3>Sub Category</h3>
     <p>{result.subCategory}</p>

     <h3>Tags</h3>
     <ul>
       {result.tags.map(tag=>(
         <li key={tag}>{tag}</li>
       ))}
     </ul>

     <h3>Sustainability Filters</h3>
     <ul>
       {result.sustainabilityFilters.map(f=>(
         <li key={f}>{f}</li>
       ))}
     </ul>

    </div>

   )}

  </div>

 );

}
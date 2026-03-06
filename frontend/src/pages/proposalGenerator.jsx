import { useState } from "react";
import axios from "axios";

export default function ProposalGenerator(){

const [budget,setBudget] = useState("");
const [companyType,setCompanyType] = useState("");

const [proposal,setProposal] = useState(null);

const generateProposal = async ()=>{

try{

const res = await axios.post(
"http://localhost:5000/api/proposals/generate",
{
budget,
companyType
}
);
console.log(res.data)

setProposal(res.data);

}catch(error){

console.error(error);

alert("Proposal generation failed");

}

};

return(

<div style={{padding:"40px"}}>

<h2>AI B2B Proposal Generator</h2>

<div>

<label>Budget</label>

<br/>

<input
type="number"
value={budget}
onChange={(e)=>setBudget(e.target.value)}
placeholder="Enter budget"
/>

</div>

<br/>

<div>

<label>Company Type</label>

<br/>

<input
value={companyType}
onChange={(e)=>setCompanyType(e.target.value)}
placeholder="Example: Corporate Office"
/>

</div>

<br/>

<button onClick={generateProposal}>
Generate Proposal
</button>

{proposal && (

<div style={{marginTop:"30px"}}>

<h3>Product Mix</h3>

<ul>

{Array.isArray(proposal.product_mix) && proposal.product_mix.map((item,index)=>(
  
<li key={index}>
{item.product} - Quantity: {item.quantity}
</li>

))}

</ul>

<h3>Budget Allocation</h3>

{proposal && proposal.budget_allocation && (

<ul>

{Object.entries(proposal.budget_allocation).map(([key,value])=>(
  
<li key={key}>
{key} : ₹{value}
</li>

))}

</ul>

)}

<h3>Estimated Cost</h3>

<p>₹{proposal.estimated_cost}</p>

<h3>Impact Summary</h3>

<p>{proposal.impact_summary}</p>

</div>

)}

</div>

);

}
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateProposal(budget, companyType){

let text = "";   // declare outside try so catch can access it

try{

const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const prompt = `
Return ONLY valid JSON.

Format:
{
 "product_mix":[
  {"product":"name","quantity":number}
 ],
 "budget_allocation":{
  "product_name":number
 },
 "estimated_cost":number,
 "impact_summary":"text"
}

Budget: ${budget}
Company Type: ${companyType}

Suggest sustainable product bundle for corporate gifting.
`;

const result = await model.generateContent(prompt);

text = result.response.text();

const cleanText = text
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();

const data = JSON.parse(cleanText);

// Safety checks
if(!Array.isArray(data.product_mix)){
data.product_mix = [];
}

if(typeof data.budget_allocation !== "object"){
data.budget_allocation = {};
}

return data;

}catch(error){

console.error("AI Parsing Error:", error.message);
console.log("Raw AI Response:", text);

// safe fallback so frontend doesn't crash
return {
product_mix: [],
budget_allocation: {},
estimated_cost: 0,
impact_summary: "AI could not generate proposal."
};

}

}

module.exports = { generateProposal };
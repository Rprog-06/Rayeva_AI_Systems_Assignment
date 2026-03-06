const { generateProposal } = require("../service/proposalaiService");
//const { generateProposal } = require("../service/proposalAIService");
const Proposal = require("../models/Proposal");

exports.createProposal = async (req,res)=>{

try{

const {budget, companyType} = req.body;

//const proposal = await generateProposal(budget, companyType);
const aiProposal = await generateProposal(budget,companyType);

const proposal = new Proposal({

budget,
companyType,
product_mix: aiProposal.product_mix,
budget_allocation: aiProposal.budget_allocation,
estimated_cost: aiProposal.estimated_cost,
impact_summary: aiProposal.impact_summary

});

await proposal.save();

res.json(proposal);

}catch(error){

console.error(error);

res.status(500).json({
message:"Proposal generation failed"
});

}

};
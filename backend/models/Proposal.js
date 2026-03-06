const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({

budget:Number,

companyType:String,

product_mix:Array,

budget_allocation:Object,

estimated_cost:Number,

impact_summary:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Proposal",proposalSchema);
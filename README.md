Project Overview

This project implements AI-powered modules designed to reduce manual catalog effort and automate business proposal generation for a sustainable commerce platform.

The system integrates AI models, backend services, and frontend UI to automate tasks such as:

Product categorization

SEO tag generation

Sustainability filtering

B2B proposal generation

The goal is to demonstrate production-ready AI integration with real business logic.

Implemented Modules
Module 1 — AI Auto Category & Tag Generator

This module automatically categorizes sustainable products and generates SEO metadata.

Features

Auto assigns primary product category

Suggests sub-category

Generates 5–10 SEO tags

Suggests sustainability filters

Returns structured JSON output

Stores results in MongoDB database

Example Input
{
 "name": "Bamboo Toothbrush",
 "description": "Eco friendly biodegradable toothbrush made from bamboo."
}
Example Output
{
 "category": "Oral Care",
 "sub_category": "Toothbrush",
 "tags": [
   "bamboo toothbrush",
   "eco friendly",
   "biodegradable",
   "zero waste",
   "natural oral care"
 ],
 "sustainability_filters": [
   "plastic-free",
   "compostable",
   "biodegradable"
 ]
}
Module 2 — AI B2B Proposal Generator

This module generates sustainable product proposals for companies based on their budget.

Features

Suggests sustainable product mix

Generates budget allocation

Estimates total cost

Produces impact summary

Stores proposal in MongoDB

Example Input
{
 "budget": 5000,
 "companyType": "Corporate Office"
}
Example Output
{
 "product_mix":[
   {"product":"Reusable Steel Bottle","quantity":200},
   {"product":"Bamboo Toothbrush","quantity":500}
 ],
 "budget_allocation":{
   "steel_bottles":3000,
   "toothbrushes":2000
 },
 "estimated_cost":5000,
 "impact_summary":"This proposal reduces plastic waste and promotes sustainable corporate gifting."
}
System Architecture

The system follows a clean modular architecture separating AI logic, business logic, and presentation layers.

Frontend (React)
       │
       ▼
Backend API (Node.js / Express)
       │
       ├── Controllers
       │
       ├── AI Service Layer
       │       └── Gemini API
       │
       └── Database Layer
               └── MongoDB
Components

Frontend

React

User inputs product data or budget

Displays AI-generated outputs

Backend

Node.js

Express API routes

Handles request validation

Connects AI services and database

AI Layer

Google Gemini API

Generates structured AI responses

Database

MongoDB

Stores:

Product catalog data

Generated B2B proposals

Architecture Diagram
                +----------------------+
                |      React UI        |
                |  Product / Proposal  |
                +----------+-----------+
                           |
                           ▼
                +----------------------+
                |   Express Backend    |
                |    API Endpoints     |
                +----------+-----------+
                           |
                           ▼
                +----------------------+
                |    AI Service Layer  |
                |    Gemini API        |
                +----------+-----------+
                           |
                           ▼
                +----------------------+
                |      MongoDB         |
                | Products / Proposals |
                +----------------------+
AI Prompt Design

The system uses structured prompts to ensure consistent AI outputs.

Example prompt used for proposal generation:

Return ONLY valid JSON.

{
 "product_mix":[
  {"product":"name","quantity":number}
 ],
 "budget_allocation":{},
 "estimated_cost":number,
 "impact_summary":"text"
}

Budget: {budget}
Company Type: {companyType}

Suggest sustainable corporate gifting products.

This ensures AI responses remain structured and machine-readable.

Error Handling

The system includes multiple safety mechanisms:

JSON cleaning for AI responses

Try–catch blocks for API failures

Validation of AI outputs before sending to frontend

Default fallback responses

This ensures stable system behavior even when AI responses fail.

Technology Stack
Frontend

React

Axios

Backend

Node.js

Express

AI Integration

Google Gemini API

Database

MongoDB

Mongoose

Project Folder Structure
backend
 ├── config
 │     db.js
 │
 ├── controller
 │     productController.js
 │     proposalController.js
 │
 ├── models
 │     Product.js
 │     Proposal.js
 │
 ├── routes
 │     productRoutes.js
 │     proposalRoutes.js
 │
 ├── service
 │     aiService.js
 │     proposalAIService.js
 │
 └── server.js

frontend
 └── React Application
Project Overview

The goal of this system is to build AI modules that:

Automatically categorize sustainable products

Generate SEO tags and sustainability filters

Create B2B product proposals based on budget

Store AI outputs in a database

Provide a scalable architecture for future AI features

Implemented Modules
Module 1 — AI Auto Category & Tag Generator

Automatically categorizes products and generates metadata for sustainable product catalogs.

Features

Auto assigns product category

Suggests sub-category

Generates 5–10 SEO tags

Suggests sustainability filters

Returns structured JSON

Stores results in MongoDB

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

Generates sustainable product bundles for corporate clients based on their budget.

Features

Suggests sustainable product mix

Generates budget allocation

Estimates total cost

Produces impact summary

Stores proposals in MongoDB

Example Input
{
  "budget": 5000,
  "companyType": "Corporate Office"
}
Example Output
{
  "product_mix": [
    {"product": "Reusable Steel Bottle", "quantity": 200},
    {"product": "Bamboo Toothbrush", "quantity": 500}
  ],
  "budget_allocation": {
    "steel_bottles": 3000,
    "toothbrushes": 2000
  },
  "estimated_cost": 5000,
  "impact_summary": "This proposal reduces plastic waste and promotes sustainable corporate gifting."
}
System Architecture

The system follows a modular architecture separating frontend, backend, AI services, and database layers.

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
|      Gemini API      |
+----------+-----------+
           |
           ▼
+----------------------+
|      MongoDB         |
| Products / Proposals |
+----------------------+
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
# Rayeva AI Systems Assignment

## Project Overview

This system builds AI modules that:

- Automatically categorize sustainable products
- Generate SEO tags and sustainability filters
- Create B2B product proposals based on budget
- Store AI outputs in a database
- Provide scalable architecture for future AI features

## Implemented Modules

### Module 1 - AI Auto Category and Tag Generator

Automatically categorizes products and generates metadata for sustainable product catalogs.

#### Features

- Auto-assigns product category
- Suggests sub-category
- Generates 5-10 SEO tags
- Suggests sustainability filters
- Returns structured JSON
- Stores results in MongoDB

#### Example Input

```json
{
  "name": "Bamboo Toothbrush",
  "description": "Eco friendly biodegradable toothbrush made from bamboo."
}
```

#### Example Output

```json
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
```

### Module 2 - AI B2B Proposal Generator

Generates sustainable product bundles for corporate clients based on their budget.

#### Features

- Suggests sustainable product mix
- Generates budget allocation
- Estimates total cost
- Produces impact summary
- Stores proposals in MongoDB

#### Example Input

```json
{
  "budget": 5000,
  "companyType": "Corporate Office"
}
```

#### Example Output

```json
{
  "product_mix": [
    { "product": "Reusable Steel Bottle", "quantity": 200 },
    { "product": "Bamboo Toothbrush", "quantity": 500 }
  ],
  "budget_allocation": {
    "steel_bottles": 3000,
    "toothbrushes": 2000
  },
  "estimated_cost": 5000,
  "impact_summary": "This proposal reduces plastic waste and promotes sustainable corporate gifting."
}
```

## Designed Modules (Architecture Only)

### Module 3 - AI Impact Reporting Generator

This module generates sustainability impact reports for product orders.

#### Architecture

```text
Order Completed
      |
      v
Impact Calculation Engine
      |
      v
AI Impact Generator
      |
      v
Impact Report Stored in Database
```

#### Example Output

```text
Plastic Saved: 2.5 kg
Carbon Avoided: 6.2 kg CO2
Local Impact: Supports sustainable bamboo farming
```

### Module 4 - AI WhatsApp Support Bot

This module provides automated customer support through WhatsApp.

#### Architecture

```text
Customer Message (WhatsApp)
        |
        v
Twilio Webhook
        |
        v
AI Intent Detection
        |
        v
Database Query
        |
        v
Automated Response
```

Supported queries include:

- Order status
- Return policy
- Refund requests
- Escalation to human support

## System Architecture

The system follows a modular architecture separating frontend, backend, AI services, and database layers.

```text
Frontend (React)
      |
      v
Backend API (Node.js / Express)
      |
      +-- Controllers
      |
      +-- AI Service Layer
      |     +-- Gemini API
      |
      +-- Database Layer
            +-- MongoDB
```

### Architecture Diagram

```text
+----------------------+
|      React UI        |
|  Product / Proposal  |
+----------+-----------+
           |
           v
+----------------------+
|   Express Backend    |
|    API Endpoints     |
+----------+-----------+
           |
           v
+----------------------+
|    AI Service Layer  |
|      Gemini API      |
+----------+-----------+
           |
           v
+----------------------+
|      MongoDB         |
| Products / Proposals |
+----------------------+
```

## Technology Stack

### Frontend

- React
- Axios

### Backend

- Node.js
- Express

### AI Integration

- Google Gemini API

### Database

- MongoDB
- Mongoose

## Project Folder Structure

```text
backend
|-- config
|   |-- db.js
|
|-- controller
|   |-- productController.js
|   |-- proposalController.js
|
|-- models
|   |-- Product.js
|   |-- Proposal.js
|
|-- routes
|   |-- productRoutes.js
|   |-- proposalRoutes.js
|
|-- service
|   |-- aiService.js
|   |-- proposalAIService.js
|
|-- server.js

frontend
|-- React Application
|-- src
    |-- components
    |   |-- ProductForm.js
    |   |-- ProposalForm.js
    |-- App.js
    |-- index.js
```
## Designed Modules (Architecture Only)

### Module 3 - AI Impact Reporting Generator

This module generates sustainability impact reports for product orders.

#### Architecture

```text
Order Completed
      |
      v
Impact Calculation Engine
      |
      v
AI Impact Generator
      |
      v
Impact Report Stored in Database
```

#### Example Output

```text
Plastic Saved: 2.5 kg
Carbon Avoided: 6.2 kg CO2
Local Impact: Supports sustainable bamboo farming
```

### Module 4 - AI WhatsApp Support Bot

This module provides automated customer support through WhatsApp.

#### Architecture

```text
Customer Message (WhatsApp)
        |
        v
Twilio Webhook
        |
        v
AI Intent Detection
        |
        v
Database Query
        |
        v
Automated Response
```

Supported queries include:

- Order status
- Return policy
- Refund requests
- Escalation to human support














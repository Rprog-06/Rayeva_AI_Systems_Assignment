const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCategoryTags(name, description) {

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
Return ONLY JSON.

Fields:
category
sub_category
tags (5-10)
sustainability_filters

Product Name: ${name}
Description: ${description}

Example filters:
plastic-free
compostable
vegan
recycled
`;

  const result = await model.generateContent(prompt);

  const text = result.response.text();
  const cleanText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanText);
}

module.exports = { generateCategoryTags };
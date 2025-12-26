import { GoogleGenerativeAI } from "@google/generative-ai";

// ⚠️ Store your API key safely — not in GitHub
const API_KEY = "AIzaSyBXlgmfiQnAT8tLAWVgzbeEgyKZx8czuPg ";

const genAI = new GoogleGenerativeAI(API_KEY);

// Create a model instance
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to generate chatbot responses
export async function generateResponse(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    return "⚠️ Sorry, I’m having trouble replying right now.";
  }
}

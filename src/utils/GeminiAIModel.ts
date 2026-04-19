import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// WARNING: See the security critique below regarding NEXT_PUBLIC_
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string; 
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64, // Note: Check documentation; topK is often deprecated or ignored in newer Flash iterations
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
    generationConfig,
});
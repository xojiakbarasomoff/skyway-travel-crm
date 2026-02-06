
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getTravelRecommendationStream = async (userPrompt: string, callback: (text: string) => void) => {
  try {
    const response = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: [{
        role: "user",
        parts: [{ text: `Siz SkyWay turistik firmasi uchun maxsus AI yordamchisiz. Quyidagi so'rovga asosan professional, chiroyli va o'zbek tilida maslahat bering: "${userPrompt}"` }]
      }],
    });

    let fullText = "";
    for await (const chunk of response) {
      const chunkText = chunk.text;
      fullText += chunkText;
      callback(fullText);
    }
  } catch (error) {
    console.error("Gemini Streaming Error:", error);
    callback("Xatolik yuz berdi. Iltimos, internet aloqasini tekshiring.");
  }
};

export const analyzeCustomerPreferences = async (customerData: any) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Mijoz ma'lumotlarini tahlil qiling va uning sayohat afzalliklari bo'yicha prognoz bering: ${JSON.stringify(customerData)}. Qaysi davlatlar unga mos kelishi mumkinligini ayting.`,
    });
    return response.text;
  } catch (error) {
    return "Tahlil jarayonida xatolik yuz berdi.";
  }
};

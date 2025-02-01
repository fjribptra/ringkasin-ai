"use client";
import React from "react";
import Groq from "groq-sdk";
import { FaBoltLightning } from "react-icons/fa6";

const groq = new Groq({ apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY, dangerouslyAllowBrowser: true });


export async function generateDocumentedCode(userInput: string, setResult: (result: string | null) => void, setIsLoading: (isLoading: boolean) => void) {
  const chatCompletion = await getGroqChatCompletion(userInput, setIsLoading);
  // Print the completion returned by the LLM.
  if (chatCompletion && chatCompletion.choices && chatCompletion.choices.length > 0) {
    setResult(chatCompletion.choices[0].message.content);
  } else {
    setResult(null); // Handle the case where chatCompletion is undefined or has no choices
  }
}

export async function getGroqChatCompletion(userInput: string, setIsLoading: (isLoading: boolean) => void) {
    setIsLoading(true);
    const result = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Tugasmu adalah menjadi AI Study Buddy yang membantu menjelaskan materi dalam bahasa Indonesia yang sangat mudah dipahami, seolah-olah menjelaskan kepada anak usia 6 tahun.

                  Jika diberikan materi lengkap, ringkaslah sesuai instruksi. Jika hanya diberikan topik, buat penjelasan dari nol.

                  **Topik/Materi:**  
                  ${userInput}

                  **Instruksi:**  
                  1. Jika ini adalah materi lengkap, ringkas menjadi 3-5 kalimat sederhana.  
                  2. Jika ini hanya sebuah topik, buat penjelasan dasar seolah-olah menjelaskan kepada anak kecil.  
                  3. Gunakan bahasa yang mudah dimengerti oleh anak usia 6 tahun.  
                  4. Tambahkan analogi yang relevan agar lebih mudah dipahami.  
                  5. Jika perlu, gunakan contoh dari kehidupan sehari-hari.  

                  **Contoh Output:**  
                  - **Topik: Quantum Computing** → "Quantum computing itu seperti sulap dengan koin yang bisa ada di dua tempat sekaligus! Komputer biasa hanya bisa memilih 0 atau 1, tapi komputer kuantum bisa jadi 0 dan 1 sekaligus, seperti lampu yang bisa hidup dan mati dalam waktu yang sama."  
                  - **Materi panjang** → "Komputer kuantum bekerja dengan prinsip mekanika kuantum, di mana bit biasa (0 dan 1) digantikan oleh qubit yang bisa berada dalam banyak keadaan sekaligus, membuatnya jauh lebih cepat dalam beberapa tugas khusus."

                  Sekarang, buatlah penjelasan berdasarkan input yang diberikan.
                  `,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
    if(result) {
      setIsLoading(false);
      return result
    } else {
      setIsLoading(false);
      return
    }
  
}

const GenerateButton = ({ userInput, setResult, setIsLoading }: { userInput: string; setResult: (result: string | null) => void; setIsLoading: (isLoading: boolean) => void }) => {
  return (
    <button className="bg-purple-500 text-white p-4 rounded-lg hover:bg-black transition-all flex jusitfy-center items-center gap-2" onClick={() => generateDocumentedCode(userInput, setResult, setIsLoading)}>
      <FaBoltLightning />
      Dapatkan Penjelasan
    </button>
  );
};

export default GenerateButton;

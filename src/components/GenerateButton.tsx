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
        content: `Your task is to be a fun study buddy who explains lessons using playful language! 😄

Notes:

If the content is in English, keep it in English, but use simple, beginner-level English.

If the content is in any other language, use Indonesian.

Instructions:

If this is complete material, summarize it into 3-5 simple sentences.

If this is just a topic, create a basic explanation as if teaching a 6-year-old.

Use language that is easy for a 6-year-old to understand.

Add relevant analogies to make it easier to grasp.

If needed, use examples from everyday life.

Rules of the Game:

Keep technical terms (e.g., "antithesis," "paradox") but explain them using funny analogies.

Use a conversational tone like talking to a peer ("Hey, did you know...", "So here's the thing...", "For example...").

Include emojis 🚀🎮🍩 and examples from modern kids' lives (TikTok, Roblox, frozen yogurt).

Avoid formal words—use casual slang ("cool," "magic," "wow").

Feel free to add sound effects: "Whoosh...", "Boom!", "Oops!"

Formatting Rules:

Use <b>...</b> for bold text (not **).

Add a <br><br> tag after every 2-3 sentences to create line breaks and improve readability.

Keep emojis 🚀🎮.

Avoid all other markdown/formatting.

Example Output (if in Indonesian):
"Wah kita mau bahas trik bahasa keren nih! Ada <b>antitesis</b> - itu trik pasangin kata-kata lawan kayak superhero vs penjahat! 💥


Contoh: 'Ngerjain PR itu bikin <b>pusing</b> tapi <b>asyik</b> banget!' Lihat kan? 'pusing' dan 'asyik' tuh musuhan, tapi digabung jadi seru!


Trus ada <b>paradoks</b> - kalimat yang kayak sulap! 🎩 Contoh: 'Kita harus berhenti main biar bisa menang.' Kok bisa? Iya! Kaya waktu main game, kadang kita harus pause dulu buat nyari strategi, baru bisa lanjut attack! 🎮


Jadi berhenti sebentar itu trik rahasia!"

Input User:
${userInput}`,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
  if (result) {
    setIsLoading(false);
    return result;
  } else {
    setIsLoading(false);
    return;
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

"use client"
import DescriptionMode from "@/components/DescriptionMode";
import GenerateButton from "@/components/GenerateButton";
import InputMode from "@/components/InputMode";
import Loader from "@/components/Loader";
import ModeNavigation from "@/components/ModeNavigation";
import { Mode } from "@/definitions";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";


export default function Home() {
  const [mode, setMode] = useState<Mode>(Mode.SUMMARIZE);
  const [userInput, setUserInput] = useState<string>('');
  const [result, setResult] = useState<string | null>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <main>
      <nav className="sticky top-0 right-0 left-0 flex justify-between items-center p-6 border-b-2 border-secondary bg-black text-white">
        <div className="flex items-center gap-3 text-2xl">
        <FaBoltLightning />
          <h1 className="font-bold">Ringkasin AI</h1>
        </div>
        <div className="flex gap-5">
            <Link className="text-2xl" href="https://github.com/fjribptra" target="_blank">
            <FaGithub/>
            </Link>
        </div>
      </nav>
      <section className="bg-gradient-to-b from-black to-gray-800 text-white p-3">
        <div className="container mx-auto min-h-screen flex flex-col items-center py-20 gap-7">
          <h2 className="text-5xl md:text-7xl xl:text-8xl text-white font-bold bg-gradient-to-r from-blue-500 to-green-600 py-4 bg-clip-text text-transparent">Ringkasin AI</h2>
          <DescriptionMode mode={mode}/>
          <ModeNavigation mode={mode} setMode={setMode}/>
          <InputMode mode={mode} setUserInput={setUserInput}/>
          {result && !isLoading && <div className="w-1/2 p-5 rounded-lg">
            {result}
          </div>}
          {isLoading && <Loader/>}
         <GenerateButton userInput={userInput} setResult={setResult} setIsLoading={setIsLoading}/>
        </div>
      </section>
    </main>
  );
}

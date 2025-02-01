import { Mode } from '@/definitions'
import React from 'react'

const InputMode = ({mode, setUserInput}: {mode: Mode, setUserInput: (userInput: string) => void}) => {
  return (
    <>
       {Mode.SUMMARIZE === mode && <textarea className="border border-black p-5 text-text w-full xl:w-1/2" cols={80} rows={15} placeholder="Salin materi ke sini" onChange={(e) => setUserInput(e.target.value)}></textarea>}
       {Mode.EXPLAIN === mode && <input type="text" className="border border-black p-5 text-text w-full md:w-1/2" placeholder="Jelaskan ..." onChange={(e) => setUserInput(e.target.value)}/>}
    </>
  )
}

export default InputMode

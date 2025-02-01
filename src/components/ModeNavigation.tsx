"use client"

import { Mode } from "@/definitions"

const ModeNavigation = ({mode, setMode}: {mode: Mode, setMode: (mode: Mode) => void}) => {
  
  return (
    <div className="flex gap-5">
            <button className={`border text-xs border-white p-2 lg:p-3 rounded-lg ${mode === 'EXPLAIN' ? 'bg-secondary text-white' : ''}`} onClick={() => setMode(Mode.EXPLAIN)}>Tanyain sebuah topik</button>
            <button className={`border text-xs border-white p-2 lg:p-3 rounded-lg ${mode === 'SUMMARIZE' ? 'bg-secondary text-white' : ''}`} onClick={() => setMode(Mode.SUMMARIZE)}>Ringkasin materi panjang</button>
          </div>
  )
}

export default ModeNavigation

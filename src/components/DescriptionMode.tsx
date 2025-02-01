import { Mode } from "@/definitions";
import React from "react";

const DescriptionMode = ({mode} : {mode: Mode}) => {
  return <h2 className="text-xl text-white text-center">{mode === Mode.EXPLAIN ? 'Ngerti konsep sulit dengan sederhana' : 'Ringkas materi dengan bahasa yang gampang buat dipahami'}</h2>;
};

export default DescriptionMode;

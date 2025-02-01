"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterText = () => {
  return (
      <Typewriter words={["Well Documented", "Easy to Understand"]} loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
  );
};

export default TypeWriterText;

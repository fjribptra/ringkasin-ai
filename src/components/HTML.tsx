"use client";

import React from "react";

const HTML = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="BaZI1dEoU-chgF1oO_CktflBxhmfCnUEsop82e3DkL8" />
      <meta name="keywords" content="ringkasin, ai, article summarizer" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      {children}
    </html>
  );
};

export default HTML;

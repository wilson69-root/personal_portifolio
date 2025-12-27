"use client";
import { type FC, useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
};

const Typewriter: FC<TypewriterProps> = ({ text, speed = 100, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default Typewriter;

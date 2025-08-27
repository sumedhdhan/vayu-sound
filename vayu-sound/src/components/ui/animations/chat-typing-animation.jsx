"use client";

import { useState, useEffect } from "react";

const prompts = [
  "SRV but at bedroom-volume",
  "Jimi Hendrix on a telecaster",
  "John Mayer glassy cleans",
  "Heavy riffs with clarity",
];

export default function ChatTypingAnimation() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // which prompt
  const [subIndex, setSubIndex] = useState(0); // typing progress
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= prompts.length) {
      setIndex(0);
      return;
    }

    // typing speed
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(prompts[index].substring(0, subIndex + 1));
          setSubIndex(subIndex + 1);

          if (subIndex + 1 === prompts[index].length) {
            setTimeout(() => setDeleting(true), 1200); // pause before deleting
          }
        } else {
          setText(prompts[index].substring(0, subIndex - 1));
          setSubIndex(subIndex - 1);

          if (subIndex === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % prompts.length);
          }
        }
      },
      deleting ? 50 : 120,
    ); // delete faster than typing

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="flex flex-col items-start gap-4 mt-8 w-full max-w-md mx-auto p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
      {/* AI question */}
      <div className="px-3 py-2 rounded-lg bg-purple-600/70 text-white  font-work-sans text-sm shadow-md">
        What’s your sound?
      </div>

      {/* User typing bubble */}
      <div className="flex items-center gap-2 px-4 py-2 bg-black/60 rounded-lg border border-white/20 shadow-inner min-h-[50px] w-full">
        <span className="text-pink-300">🎸</span>
        <span className="text-white font-taviraj">{text}</span>
        <span className="w-1.5 h-5 bg-white animate-pulse ml-1"></span>
      </div>
    </div>
  );
}

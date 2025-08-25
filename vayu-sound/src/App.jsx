"use client";

import { useEffect } from "react";
import { Button } from "./components/ui/button";
import "./App.css";
export default function LandingPage() {
  useEffect(() => {
    if (!window.UnicornStudio) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 z-10 w-full flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md text-white">
        <div className="text-xl font-bold">Vayu Sound</div>
        <nav className="flex space-x-6">
          <a href="#quiz" className="hover:underline">
            Quiz
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
        </nav>
      </header>

      {/* Hero / Unicorn Embed */}
      {/* Hero / Unicorn Embed */}
      <section
        id="hero"
        className="h-screen w-full relative flex items-center justify-center"
      >
        {/* Centered header text */}
        <div
          className="flex flex-col absolute items-center justify-center"
          style={{ top: "10%" }}
        >
          <h1 className="font-taviraj text-white inset-0 flex  justify-center  z-20 drop-shadow-lg">
            vayu
          </h1>
          <h2 className=" inset-0 flex self-end  text-white font-overpass-mono z-20 drop-shadow-l tracking-widest">
            sound
          </h2>
        </div>

        <p className="absolute font-work-sans tagline justify-center items-center text-white mt-20">
          Handwound guitar pickups. Made in Toronto.
        </p>

        <div
          className="hero-cta-flex flex flex-row justify-center absolute gap-10"
          style={{ bottom: "30%" }}
        >
          <Button className="text-white font-overpass-mono h-14  z-20 cta hover:bg-black hover:text-white">
            Take the quiz
          </Button>

          <Button className="text-white font-overpass-mono h-14  z-20 cta hover:bg-black hover:text-white">
            About us
          </Button>
        </div>

        <div
          data-us-project="qq6jK4OOsZqYtiI9bRnr"
          style={{ width: "100%", height: "95%" }}
        ></div>
      </section>

      {/* Quiz Section */}
      <section
        id="quiz"
        className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-700 to-indigo-900 text-white"
      >
        <div className="max-w-2xl text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Find Your Sound</h2>
          <p className="text-lg mb-6">
            Take our short quiz to discover your personalized sound experience.
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg hover:bg-gray-200 transition">
            Start Quiz
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen flex items-center justify-center bg-black text-white"
      >
        <div className="max-w-2xl text-center px-6">
          <h2 className="text-4xl font-bold mb-4">About Vayu Sound</h2>
          <p className="text-lg opacity-80">
            Vayu Sound blends technology and creativity to craft immersive sonic
            experiences. Our mission is to connect listeners to new dimensions
            of sound.
          </p>
        </div>
      </section>
    </div>
  );
}

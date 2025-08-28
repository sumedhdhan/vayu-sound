"use client";

import { useEffect } from "react";
import { Button } from "./components/ui/button";
import "./App.css";
import PickupAnimation from "./components/ui/animations/pickup-animation";
import ChatTypingAnimation from "./components/ui/animations/chat-typing-animation";

const valueProps = [
  {
    title: "Crafted by Hand",
    description:
      "Each pickup is meticulously handwound, ensuring a unique tonal character with unmatched precision.",

    animation: <PickupAnimation />,
  },
  {
    title: "Inspired by Tradition",
    description:
      "Our cutting-edge AI system provides you with a 100% custom pickup tailored to your tonal preferences and playing style.",
    animation: <ChatTypingAnimation />,
  },
  {
    title: "Tone for Every Player",
    description:
      "Designed to suit diverse playing styles, from soulful blues to heavy rock and experimental sounds.",
    animation: null,
  },
  {
    title: "Sustainable Craft",
    description:
      "Ethically sourced materials and eco-conscious production for a sound that respects the earth.",
    animation: null,
  },
];

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
        <a href="#hero" className="header-logo cursor-pointer hover:opacity-75">
          <span className="vayu">
            va<span>̄</span>yu
          </span>
        </a>
        <nav className="flex space-x-6 font-work-sans">
          <a href="#quiz">
            <Button variant="ghost">Quiz</Button>
          </a>
          <a href="#about">
            <Button variant="ghost">About</Button>
          </a>
        </nav>
      </header>

      {/* Hero / Unicorn Embed */}
      <section
        id="hero"
        className="h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-transparen to-black"
      >
        {/* Black gradient overlay for blending */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,1) 100%)",
          }}
        />
        {/* Centered header text */}
        <div
          className="flex flex-col absolute items-center justify-center"
          style={{ top: "15%" }}
        >
          <h1 className="font-taviraj text-white inset-0 flex  justify-center  z-20 drop-shadow-lg">
            <span className="vayu">
              va<span>̄</span>yu
            </span>
          </h1>
          <h2 className=" inset-0 flex self-end  text-white font-overpass-mono z-20 drop-shadow-l tracking-widest">
            sound
          </h2>
        </div>

        <p className="absolute font-work-sans tagline justify-center text-pink-50 mt-40">
          Custom, handwound guitar pickups.
        </p>

        <div
          className="hero-cta-flex flex flex-row justify-center items-center absolute gap-10"
          style={{ bottom: "25%" }}
        >
          <a href="#quiz">
            <Button className="text-white font-work-sans h-14 cta hover:opacity-75 hover:text-white">
              Find your tone
            </Button>
          </a>
          <a href="#about">
            <Button className="text-white font-work-sans h-14 cta hover:opacity-75 hover:text-white">
              About us
            </Button>
          </a>
        </div>

        <div
          data-us-project="qq6jK4OOsZqYtiI9bRnr"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </section>

      {/* Quiz Section */}
      <section
        id="quiz"
        className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-700 to-black text-white"
      >
        <div className="max-w-2xl text-center px-6">
          <h2 className="text-5xl mb-12 tracking-wide drop-shadow-md font-taviraj">
            Find your sound
          </h2>
          <p className="text-lg mb-6 font-work-sans">
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
        className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-400 text-white px-8 animate-fadeIn"
      >
        <div className="max-w-5xl w-full text-center font-work-sans">
          <h2 className="text-5xl mb-12 tracking-wide drop-shadow-md font-taviraj">
            About Vāyu
          </h2>
          <p></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueProps.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-around p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg min-h-[300px]"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-80 text-sm w-4/5 text-center mx-auto">
                    {item.description}
                  </p>
                </div>
                <div>{item.animation}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-sm opacity-80 w-2/3 items-center justify-center mx-auto">
            <p>
              Vāyu (Sanskrit for "wind") is a boutique guitar pickup shop based
              in Toronto, Ontario. Founded by Sumedh Dhanvanthry, Vāyu
              specializes in custom, handwound pickups that capture the essence
              of your unique sound. With a passion for tone and craftsmanship,
              Vayu offers a personalized experience to help you find the perfect
              pickups for your guitar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

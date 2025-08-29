"use client";

import { useEffect } from "react";
import { Button } from "./components/ui/button";
import "./App.css";
import PickupAnimation from "./components/ui/animations/pickup-animation";
import ChatTypingAnimation from "./components/ui/animations/chat-typing-animation";
import OscilloscopeWave from "./components/ui/animations/sound-wave-animation";

const valueProps = [
  {
    title: "Crafted by Hand",
    description:
      "Each pickup is carefully handwound, ensuring a unique tonal character with unmatched precision.",

    animation: <PickupAnimation />,
  },
  {
    title: "Cutting-Edge Tech",
    description:
      "Our AI-powered questionnaire provides you with a 100% custom pickup tailored to your tonal preferences and playing style.",
    animation: <ChatTypingAnimation />,
  },
  {
    title: "Science-Based Design",
    description:
      "Each pickup is engineered from proven principles to shape your ideal tone—from magnet strength to wire insulation.",
    animation: <OscilloscopeWave />,
  },
  {
    title: "Exceptional Customer Service",
    description:
      "Every guitarist is unique, which is why we treat every order with the utmost care and precision.",
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
          <h1 className="font-taviraj text-white inset-0 flex  justify-center drop-shadow-lg">
            <span className="vayu">
              va<span>̄</span>yu
            </span>
          </h1>
          <h2 className=" inset-0 flex self-end  text-white font-overpass-mono  drop-shadow-l tracking-widest">
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
            <Button className="text-white font- h-14 cta hover:opacity-75 hover:text-white">
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
        className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-600 to-black text-white"
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
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-400 text-white px-4 sm:px-8 animate-fadeIn"
      >
        <div className="max-w-5xl w-full text-center font-work-sans">
          <h2 className="text-5xl mb-12 tracking-wide drop-shadow-md font-taviraj">
            About Vāyu
          </h2>
          <div className="text-sm opacity-80 w-2/3 items-center justify-center mx-auto my-12">
            <p>
              Vāyu (Sanskrit for "wind") is a boutique guitar pickup shop based
              in Toronto, Ontario. Founded by Sumedh Dhanvanthry, Vāyu
              specializes in custom, handwound pickups that capture the essence
              of your unique sound. With a passion for tone and craftsmanship,
              Vāyu offers a personalized experience to help you find the perfect
              pickups for your guitar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-around p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg min-h-[300px]"
              >
                <div>
                  <h3 className="text-2xl  mb-2 font-work-sans">
                    {item.title}
                  </h3>
                  <p className="opacity-80 text-sm w-4/5 text-center mx-auto">
                    {item.description}
                  </p>
                </div>
                <div>{item.animation}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full bg-black/80 text-white py-6 mt-0 flex flex-col items-center justify-center border-t border-gray-700">
        <div className="font-taviraj text-lg mb-2">Vayu Sound</div>
        <div className="flex space-x-6">
          <a
            href="https://instagram.com/vayusound"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.1.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
            </svg>
          </a>
          <a
            href="https://facebook.com/vayusound"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
            </svg>
          </a>
          <a
            href="https://twitter.com/vayusound"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-300"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.917 0 .386.044.762.127 1.124C7.728 8.77 4.1 6.797 1.671 3.149c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
            </svg>
          </a>
        </div>
        <div className="mt-2 text-xs opacity-60">
          © {new Date().getFullYear()} Vayu Sound. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

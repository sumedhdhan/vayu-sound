"use client";

import { useEffect, useState } from "react";
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

  // Carousel state
  const carouselImages = [
    "0dccc9cc42b1c4bd2d01dfe33ad2ee90.jpg",
    "36.jpg",
    "86d4fbe52a75ae28754fb24d6715a32ecad8a420.jpeg",
    "pickupS_54.webp",
    "strat-sixty-four-main_square.jpg",
  ];
  const [carouselIdx, setCarouselIdx] = useState(0);
  const handlePrev = () =>
    setCarouselIdx((i) => (i === 0 ? carouselImages.length - 1 : i - 1));
  const handleNext = () =>
    setCarouselIdx((i) => (i === carouselImages.length - 1 ? 0 : i + 1));
  const handleDot = (i) => setCarouselIdx(i);
  // Helper to get 3 images centered on carouselIdx
  const getVisibleImages = () => {
    const len = carouselImages.length;
    if (len < 3) return carouselImages;
    const prev = (carouselIdx - 1 + len) % len;
    const next = (carouselIdx + 1) % len;
    return [
      carouselImages[prev],
      carouselImages[carouselIdx],
      carouselImages[next],
    ];
  };

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
        className="h-screen w-full relative flex flex-col items-center justify-center bg-gradient-to-b from-transparen to-black"
      >
        {/* Black gradient overlay for blending */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.3) 90%, rgba(0,0,0,1) 100%)",
          }}
        />

        {/* Hero / Unicorn Embed */}
        <section
          id="hero"
          className="h-screen w-full relative flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black"
        >
          {/* Unicorn Studio as full background */}
          <div
            data-us-project="qq6jK4OOsZqYtiI9bRnr"
            className="absolute inset-0 w-full h-full z-0"
            style={{ pointerEvents: "none" }}
          ></div>
          {/* Black gradient overlay for blending */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.3) 97%, rgba(0,0,0,1) 100%)",
            }}
          />
          {/* All hero content stacked above */}
          <div
            className="relative z-20 flex flex-col items-center justify-center w-full gap-8"
            style={{ marginTop: "-2rem" }}
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-taviraj text-white flex drop-shadow-lg">
                <span className="vayu">
                  va<span>̄</span>yu
                </span>
              </h1>
              <h2 className="flex self-end text-white font-overpass-mono drop-shadow-l tracking-widest">
                sound
              </h2>
            </div>
            <p className="font-taviraj tagline justify-center text-pink-50 text-lg">
              Custom, handwound guitar pickups.
            </p>

            <div className="hero-cta-flex flex flex-row justify-center items-center gap-10">
              <a href="#quiz">
                <Button className="text-white font- h-14 cta hover:opacity-75 hover:text-white">
                  Shop now
                </Button>
              </a>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div
                className="relative flex items-center justify-center"
                style={{ height: "140px", width: "660px", maxWidth: "100%" }}
              >
                <button
                  className="absolute top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 z-20"
                  style={{ border: "none", left: "-3rem" }}
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M15 19l-7-7 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="flex gap-6 items-center justify-center w-full">
                  {getVisibleImages().map((img, idx) => (
                    <img
                      key={img}
                      src={`/src/assets/pickups/${img}`}
                      alt={`Pickup demo ${img}`}
                      className={`rounded-xl shadow-lg border border-gray-700 object-cover transition-all duration-500 ${idx === 1 ? "scale-105 z-10" : "opacity-80"}`}
                      style={{
                        width: "200px",
                        height: "130px",
                        background: "transparent",
                        flex: "0 0 auto",
                      }}
                    />
                  ))}
                </div>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 z-20"
                  style={{ border: "none", right: "-3rem" }}
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M9 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Quiz Section */}
      <section
        id="quiz"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-blue-400 text-white px-4 sm:px-8 animate-fadeIn"
      >
        <div className="max-w-5xl w-full text-center font-work-sans">
          <h2 className="text-5xl mb-12 tracking-wide drop-shadow-md font-taviraj">
            Find Your Tone
          </h2>
          <div className="text-sm opacity-80 w-full items-center justify-center mx-auto my-12">
            <p>
              Take our quick quiz to discover the perfect Vāyu pickups for your
              guitar. Answer a few questions about your playing style and tonal
              preferences, and we'll recommend the ideal pickups to elevate your
              musical expression.
            </p>
          </div>
          <a href="#about">
            <Button className="text-white font-work-sans h-14 cta hover:opacity-75 hover:text-white">
              Start Quiz
            </Button>
          </a>
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

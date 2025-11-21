import { useState, useRef, useEffect } from "react";
import { songs } from "../data/songs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function PlaylistCarousel() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % songs.length);
  const prev = () => setIndex((prev) => (prev - 1 + songs.length) % songs.length);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [index]);

  const hearts = Array.from({ length: 15 });

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-6 bg-[#0d0d0d] text-white">

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 opacity-30"
            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
            animate={{ y: "-20vh" }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Navigation buttons */}
        <div className="flex justify-between items-center mb-4 w-full md:hidden">
          <button onClick={prev} className="p-2 bg-white/10 rounded-full backdrop-blur hover:bg-white/20 transition">
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm opacity-80 mx-4">
            {index + 1} / {songs.length}
          </span>
          <button onClick={next} className="p-2 bg-white/10 rounded-full backdrop-blur hover:bg-white/20 transition">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Left side – cover */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 w-full"
            >
              <img
                src={songs[index].image}
                alt="cover"
                className="w-full aspect-square object-cover rounded-xl shadow-lg"
              />

            </motion.div>
          </AnimatePresence>

          {/* Desktop navigation */}
          <div className="hidden md:flex justify-between items-center mt-4 w-3/4">
            <button onClick={prev} className="p-2 bg-white/10 rounded-full backdrop-blur hover:bg-white/20 transition">
              <ChevronLeft size={24} />
            </button>
            <span className="text-sm opacity-80 mx-4">
              {index + 1} / {songs.length}
            </span>
            <button onClick={next} className="p-2 bg-white/10 rounded-full backdrop-blur hover:bg-white/20 transition">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right side – text + audio */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold mb-4">{songs[index].title}</h2>
          <p className="text-md opacity-90 mb-6 leading-relaxed">
            {songs[index].description}
          </p>

          <audio ref={audioRef} controls className="w-full mt-4">
            <source src={songs[index].audio} type="audio/mp3" />
          </audio>

          {/* Button for final page (only on last song) */}
          {index === songs.length - 1 && (
            <Link
              to="/final"
              className="inline-block mt-6 px-5 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl transition font-semibold shadow-lg"
            >
              💗
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

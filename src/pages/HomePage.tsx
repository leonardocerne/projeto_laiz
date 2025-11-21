import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

export default function HomePage() {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0d0d0d] text-white flex items-center justify-center p-6">

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 opacity-30"
            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
            animate={{ y: "-20vh" }}
            transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5 }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Content Split */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">

        {/* Left side — Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src="/src/assets/images/nois.jpg"
            alt="Vocês dois"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md rounded-3xl shadow-2xl border border-white/10 object-cover"
          />
        </div>

        {/* Right side — Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold drop-shadow-lg"
          >
            Pro meu bebe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg md:text-2xl max-w-xl opacity-90 leading-relaxed"
          >
            Algumas músicas que me fazem lembrar de você e de nós dois, espero que goste
          </motion.p>

          <Link
            to="/playlist"
            className="mt-10 px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-2xl text-xl shadow-lg transition"
          >
            Começar a playlist 💕
          </Link>
        </div>

      </div>
    </div>
  );
}

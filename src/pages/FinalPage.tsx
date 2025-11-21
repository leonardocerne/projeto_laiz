import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FinalPage() {
  const hearts = Array.from({ length: 15 });
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // volume suave
      audioRef.current.play().catch(() => {}); // ignora bloqueios de autoplay
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#0d0d0d] text-white p-6">

      {/* Música de fundo */}
      <audio
        ref={audioRef}
        src="/src/assets/songs/final.mp3" // <- troque aqui o arquivo
        loop
      />

      {/* Hearts background */}
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
              delay: Math.random() * 5
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Eu te amo! 💖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mt-6 text-lg md:text-2xl max-w-3xl opacity-90 leading-relaxed"
        >
          Muito obrigado por ser a melhor pessoa do mundo pra mim <br />
          eu te amo, eu te amo, eu te amo <br />
          to esperando ansiosamente pro dia que vou te pedir em namoro <br />
          você é minha música favorita, todos os dias. 🎶✨
        </motion.p>
      </div>
    </div>
  );
}

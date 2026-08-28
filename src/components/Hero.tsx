import { motion } from "framer-motion";
import heroMp4 from "../assets/img/hero.mp4";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* <source src="/src/assets/img/hero.webm" type="video/webm" /> */}
        <source src={heroMp4} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-neutral-950/60" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-tight">
          Hyago Souza
        </h1>

        <p className="font-body text-white/80 text-base sm:text-lg mt-4 max-w-md mx-auto">
          Design que comunica, conecta e transforma.
        </p>

        <motion.a
          href="#projetos"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-8 rounded-full bg-babyblue text-neutral-950
                     font-semibold px-6 py-2.5 transition-colors hover:bg-babyblue-light"
        >
          Ver projetos
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
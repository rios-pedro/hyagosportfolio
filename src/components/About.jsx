import { motion } from "framer-motion";

function About() {
  return (
    <section id="sobre" className="relative px-6 py-24 sm:py-32 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Texto — esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <h2 className="font-display text-3xl sm:text-4xl mb-6">
            Sobre
          </h2>
          <p className="font-body text-white/70 leading-relaxed">
            {/* [EDITAR: bio do Hyago] */}
            Designer apaixonado por transformar ideias em experiências visuais
            claras e marcantes. Com um olhar atento a detalhes e uma abordagem
            criativa, cada projeto é conduzido com o objetivo de unir estética
            e propósito.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {["Branding", "UI Design", "Editorial", "Direção de Arte"].map(
              (skill) => (
                <span
                  key={skill}
                  className="text-xs font-body px-2.5 py-1 rounded-full
                             bg-babyblue/15 text-babyblue-light"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>

        {/* Foto — direita */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 md:order-2"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/src/assets/img/hyago.jpeg"
              alt="Hyago Souza"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-babyblue/20 rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
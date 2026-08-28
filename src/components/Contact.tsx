import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contato" className="relative px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl sm:text-5xl mb-6">
          Trabalhe comigo
        </h2>

        <p className="font-body text-white/70 leading-relaxed mb-10">
          Tem um projeto em mente ou quer conversar sobre uma ideia? Vamos
          transformar isso em algo visual e memorável.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="mailto:hyago@email.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto rounded-full bg-babyblue text-neutral-950
                       font-semibold px-6 py-3 transition-colors hover:bg-babyblue-light"
          >
            hyago@email.com
          </motion.a>

          <motion.a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto rounded-full border border-white/20 text-white
                       font-semibold px-6 py-3 transition-colors hover:border-babyblue/50 hover:text-babyblue-light"
          >
            Behance ↗
          </motion.a>
        </div>
      </motion.div>

      <footer className="mt-24 text-center text-white/40 text-xs font-body">
        © {new Date().getFullYear()} Hyago Souza. Todos os direitos reservados.
      </footer>
    </section>
  );
}

export default Contact;
import { motion } from "framer-motion";
import logoSvg from "../assets/img/logo.svg";

const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Trabalhe comigo", href: "#contato" },
];

function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl"
    >
      <nav
        className="flex items-center justify-between px-5 py-3 rounded-full
                   bg-white/10 backdrop-blur-md border border-white/20
                   shadow-lg shadow-black/20"
      >
        <a href="#top" className="flex items-center gap-2">
          <img
            src={logoSvg}
            alt="Hyago Souza"
            className="h-8 w-auto"
          />
        </a>

        <ul className="hidden sm:flex items-center gap-6 font-body text-sm text-white/90">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-babyblue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
<a
        
          href="#contato"
          className="hidden sm:inline-block rounded-full bg-babyblue text-neutral-950
                     text-sm font-semibold px-4 py-1.5 transition-colors
                     hover:bg-babyblue-light"
        >
          Vamos falar
        </a>

        <button className="sm:hidden text-white/90" aria-label="Abrir menu">
          ☰
        </button>
      </nav>
    </motion.header>
  );
}

export default Header;
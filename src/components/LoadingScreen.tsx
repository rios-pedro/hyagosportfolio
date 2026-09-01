import { motion } from "framer-motion";
import logo from "../assets/img/logoAzul.svg";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950"
    >
      <div className="flex flex-col items-center gap-6">
        <motion.img
          src={logo}
          alt="Hyago Souza"
          className="h-10 w-auto"
          initial={{ opacity: 0.4, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 rounded-full border-2 border-white/20 border-t-babyblue"
        />
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
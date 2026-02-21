import { motion } from "framer-motion";

const Preloader = ({ finish }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-purple-500 mb-4">
          Munnsaa
        </h1>

        <div className="w-40 h-[3px] bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
            onAnimationComplete={finish}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
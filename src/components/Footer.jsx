import { motion } from "framer-motion";

const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-black via-[#0a0014] to-black text-white pt-24 pb-12 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[200px] rounded-full -top-40 -left-40" />
      <div className="absolute w-[350px] h-[350px] bg-fuchsia-600/20 blur-[180px] rounded-full bottom-0 right-0" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Divider */}
        <div className="border-t border-white/10 mb-14" />

        {/* ================= SOCIAL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-8 mb-12"
        >

          {["instagram", "linkedin", "discord", "github"].map(
            (icon, index) => (
              <a
                key={index}
                href="#"
                className="
                  w-12 h-12 flex items-center justify-center
                  border border-purple-500/40
                  rounded-full text-xl
                  text-purple-400
                  backdrop-blur-md
                  transition-all duration-300
                  hover:bg-purple-600/20
                  hover:text-white
                  hover:scale-110
                  hover:shadow-[0_0_25px_#a855f7]
                "
              >
                <i className={`ri-${icon}-line`} />
              </a>
            )
          )}

        </motion.div>

        {/* ================= NAV ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-10 text-sm text-zinc-400 mb-12"
        >

          {["home", "about", "tools", "project", "contact"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item)}
                className="
                  uppercase tracking-wider
                  transition-all duration-300
                  hover:text-purple-400
                  hover:tracking-widest
                "
              >
                {item}
              </button>
            )
          )}

        </motion.div>

        {/* ================= CREDIT ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-sm text-zinc-500"
        >

          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Munnsaa
          </span>
          . Created with{" "}

          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent font-semibold">
            Tailwind CSS 4
          </span>{" "}
          &{" "}

          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent font-semibold">
            React JS 19
          </span>

        </motion.div>

      </div>

    </footer>
  );
};

export default Footer; 
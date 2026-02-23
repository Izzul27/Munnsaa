import { useState, useEffect, useRef } from "react";
import { listTools, listproject } from "./data";
import { motion } from "framer-motion";

const BASE = import.meta.env.BASE_URL;

import CursorGlow from "./components/CursorGlow";
import Preloader from "./components/Preloader";
import ScrollReveal from "./components/ScrollReveal";

const clients = [
  "google.png",
  "gojek.png",
  "tokopedia.png",
  "traveloka.png",
  "shopee.png",
];

/* ================= SOCIAL LINKS ================= */

const socials = [
  {
    name: "instagram",
    url: "https://www.instagram.com/raihannovfaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    name: "tiktok",
    url: "https://tiktok.com/@USERNAME_KAMU",
  },
  {
    name: "youtube",
    url: "https://youtube.com/@USERNAME_KAMU",
  },
  {
    name: "discord",
    url: "https://discord.gg/INVITE_KAMU",
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/in/USERNAME_KAMU",
  },
];

/* ================= TYPEWRITER ================= */

function Typewriter({ words, speed = 120, delay = 1500 }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (reverse ? prev - 1 : prev + 1));
      },
      reverse ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  return (
    <span className="text-purple-500 font-semibold">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* ================= APP ================= */

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  const filteredProjects =
    activeCategory === "All"
      ? listproject
      : listproject.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* PRELOADER */}
      {loading && <Preloader finish={() => setLoading(false)} />}

      {/* CURSOR GLOW */}
      {!loading && !selectedProject && window.innerWidth > 768 && (
        <CursorGlow />
      )}

      {!loading && (
        <>
          {/* ================= HERO ================= */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black"
          >
            {/* ================= VIDEO BG ================= */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={`${BASE}assets/video/hero.mp4`} />
            </video>

            {/* ================= OVERLAY ================= */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 backdrop-blur-[1px]" />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 px-6 max-w-4xl">
              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                Hi, It’s{" "}
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                  Munnsaa
                </span>
              </h1>

              {/* Typewriter */}
              <h2 className="text-xl md:text-2xl mb-8 opacity-90">
                I’m a{" "}
                <Typewriter
                  words={["Video Editor", "Content Creator", "Gamer"]}
                />
              </h2>

              {/* Desc */}
              <p className="opacity-70 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
                Creating cinematic visuals and digital storytelling with modern
                aesthetics and creative impact.
              </p>

              {/* ================= SOCIAL ================= */}

              <div className="flex justify-center gap-6 flex-wrap mb-10">
                {socials.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
          bg-black/40 backdrop-blur-md
          border border-purple-500/40
          p-4 rounded-2xl
          text-purple-400
          transition-all duration-300
          hover:scale-125
          hover:bg-purple-600/30
          hover:text-white
          hover:shadow-[0_0_30px_#a855f7]
        "
                  >
                    <i className={`ri-${item.name}-fill text-2xl`} />
                  </a>
                ))}
              </div>

              {/* ================= VIEW PROJECT BUTTON ================= */}
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    document
                      .getElementById("project")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="
            relative overflow-hidden
            px-8 py-4 rounded-full
            font-semibold tracking-wide
            text-white
            bg-gradient-to-r from-purple-600 to-fuchsia-600
            transition-all duration-300
            hover:scale-110
            hover:shadow-[0_0_40px_#a855f7]
            active:scale-95
          "
                >
                  <span className="relative z-10">View Projects</span>

                  {/* Glow Effect */}
                  <span
                    className="
              absolute inset-0
              bg-gradient-to-r from-fuchsia-600 to-purple-600
              opacity-0 hover:opacity-100
              transition
            "
                  />
                </button>
              </div>
            </div>
          </section>

          {/* ================= ABOUT ================= */}

          <ScrollReveal>
            <section
              id="about"
              className="relative py-28 px-6 bg-black text-white overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute w-[350px] h-[350px] bg-purple-600/20 blur-[160px] rounded-full -top-32 -left-32" />
              <div className="absolute w-[300px] h-[300px] bg-fuchsia-600/20 blur-[140px] rounded-full bottom-0 right-0" />
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6">
                  About <span className="text-purple-500">Me</span>
                </h2>

                <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-14">
                  A little story about me and what I usually do in my creative
                  work.
                </p>

                <div className="grid md:grid-cols-2 gap-14 items-start">
                  {/* ================= LEFT : ABOUT STORY ================= */}

                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl space-y-5">
                    <p className="opacity-80 text-lg leading-relaxed">
                      Hi, I’m{" "}
                      <span className="text-purple-400 font-medium">
                        Munnsaa
                      </span>
                      , a passionate video editor and content creator who loves
                      turning ideas into engaging visual stories.
                    </p>

                    <p className="opacity-70 leading-relaxed">
                      I focus on creating cinematic videos, social media
                      content, and creative edits that help brands stand out
                      online.
                    </p>

                    <p className="opacity-70 leading-relaxed">
                      My goal is simple: deliver high-quality visuals that
                      connect with people and leave a strong impression.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                      <Counter number={100} label="Projects Done" />
                      <Counter number={4} label="Years Experience" />
                    </div>
                  </div>

                  {/* ================= RIGHT : SERVICES ================= */}

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                      My{" "}
                      <span className="text-purple-400">Quality Services</span>
                    </h3>

                    <ServiceItem
                      number="01"
                      title="Video Editing"
                      desc="Professional video editing for YouTube, social media, and branding."
                    />

                    <ServiceItem
                      number="02"
                      title="Motion Graphics"
                      desc="Creative animations, lower thirds, and visual effects."
                    />

                    <ServiceItem
                      number="03"
                      title="Cinematic Video"
                      desc="High-quality cinematic videos with storytelling focus."
                    />

                    <ServiceItem
                      number="04"
                      title="Content Creation"
                      desc="Short-form and long-form content optimized for engagement."
                    />
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ================= TOOLS ================= */}

          <ScrollReveal>
            <section
              id="tools"
              className="relative py-28 px-6 bg-zinc-900 text-white overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute w-[350px] h-[350px] bg-purple-600/20 blur-[160px] rounded-full -top-32 -right-32" />
              <div className="absolute w-[300px] h-[300px] bg-fuchsia-600/20 blur-[140px] rounded-full bottom-0 left-0" />
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-6">
                  Tools <span className="text-purple-500">Used</span>
                </h2>

                <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-14">
                  The software I usually use to work on my projects.
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                  {listTools.map((tool) => (
                    <div
                      key={tool.id}
                      className="
                          bg-black/60 backdrop-blur-xl
                          border border-white/10
                          rounded-xl p-5
                          flex gap-4 items-center
                          hover:border-purple-500/50
                          transition
                        "
                    >
                      <img
                        src={`${BASE}${tool.gambar}`}
                        className="w-14 rounded"
                      />

                      <div>
                        <h4 className="font-bold">{tool.nama}</h4>
                        <p className="opacity-50 text-sm">{tool.ket}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ================= PROJECT ================= */}

          <section
            id="project"
            className="relative py-28 px-6 bg-black text-white overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[180px] rounded-full -top-40 left-1/2 -translate-x-1/2" />
            <div className="absolute w-[300px] h-[300px] bg-fuchsia-600/20 blur-[150px] rounded-full bottom-0 right-0" />

            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl font-bold mb-4"
              >
                My <span className="text-purple-500">Projects</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center text-zinc-400 mb-10"
              >
                Some projects that I’ve worked on and enjoyed creating.
              </motion.p>

              {/* ================= FILTER ================= */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex justify-center gap-4 flex-wrap mb-14"
              >
                {["All", "VFX", "Animation", "Motion", "Gaming"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
              px-5 py-2 rounded-full text-sm
              backdrop-blur-md border
              transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-purple-600/30 border-purple-500/50 text-white shadow-[0_0_20px_#a855f7]"
                  : "bg-black/40 border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/40"
              }
            `}
                  >
                    {cat}
                  </button>
                ))}
              </motion.div>

              {/* ================= GRID ================= */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </motion.div>
            </div>
          </section>

          {/* ================= CLIENTS ================= */}
          <ScrollReveal>
            <section
              id="clients"
              className="relative py-28 px-6 bg-zinc-900 text-white overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[180px] rounded-full -top-40 -left-40" />
              <div className="absolute w-[350px] h-[350px] bg-fuchsia-600/20 blur-[160px] rounded-full bottom-0 right-0" />

              <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-4xl font-bold mb-6">
                  My <span className="text-purple-500">Clients</span>
                </h2>

                <p className="text-zinc-400 mb-12">
                  Some clients and brands I’ve worked with over time.
                </p>

                {/* Marquee */}
                <div className="relative overflow-hidden">
                  <div className="flex gap-14 w-max animate-marquee hover:[animation-play-state:paused]">
                    {[...clients, ...clients].map((logo, i) => (
                      <div
                        key={i}
                        className="min-w-[160px] h-20 flex items-center justify-center"
                      >
                        <img
                          src={`${BASE}assets/clients/${logo}`}
                          alt="client"
                          className="
                    h-14 md:h-16 lg:h-18
                    max-w-[160px]
                    object-contain
                    opacity-60
                    grayscale
                    transition-all duration-300
                    hover:opacity-100
                    hover:grayscale-0
                    hover:scale-110
                  "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ================= CONTACT ================= */}

          <section
            id="contact"
            className="relative py-28 px-6 bg-black text-white overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] bg-purple-600/20 blur-[160px] rounded-full -top-32 right-0" />
            <div className="absolute w-[300px] h-[300px] bg-fuchsia-600/20 blur-[140px] rounded-full bottom-0 left-0" />

            <div className="max-w-xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-6">
                Contact <span className="text-purple-500">Me</span>
              </h2>

              <p className="text-center opacity-50 mb-6">
                If you’d like to work together or have any questions, feel free
                to contact me here.
              </p>

              <form
                action="https://formsubmit.co/el/duruli"
                method="POST"
                className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-xl"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Message from Portfolio"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_replyto" value="%email%" />

                <input
                  type="hidden"
                  name="_next"
                  value="https://izzul27.github.io/portfolio-munnsaa/#contact"
                />

                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="p-3 bg-black border border-zinc-700 rounded"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="p-3 bg-black border border-zinc-700 rounded"
                  />

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                    className="p-3 bg-black border border-zinc-700 rounded"
                  />

                  <button
                    type="submit"
                    className="bg-purple-600 py-3 rounded hover:bg-purple-500 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* ================= MODAL ================= */}

          {selectedProject && (
            <Modal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </>
      )}
    </>
  );
}

/* ================= COMPONENTS ================= */

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
      whileHover={{ scale: 1.03 }}
      className="
          relative group cursor-pointer
          bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden
          border border-white/10
          hover:border-purple-500/50
          transition-all duration-500
          will-change-transform will-change-opacity
        "
    >
      <img
        src={`${BASE}${project.gambar}`}
        className="w-full h-48 object-cover"
        alt={project.nama}
      />

      <div className="p-5">
        <h3 className="font-semibold mb-1">{project.nama}</h3>

        <p className="text-sm opacity-60 line-clamp-2">{project.desk}</p>
      </div>
    </motion.div>
  );
}

function Counter({ number, label }) {
  const ref = useRef();
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.5 }
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let cur = 0;
    const step = Math.ceil(number / 60);

    const timer = setInterval(() => {
      cur += step;

      if (cur >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(cur);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, number]);

  return (
    <div
      ref={ref}
      className="bg-black/60 p-6 rounded-xl text-center border border-white/10"
    >
      <h3 className="text-3xl font-bold text-purple-500">{count}+</h3>

      <p className="opacity-60">{label}</p>
    </div>
  );
}

function Skill({ name, percent }) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>

      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-600"
          style={{
            width: `${percent}%`,
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
}

function Modal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-xl px-4"
      onClick={onClose}
    >
      <div
        className="bg-zinc-900 max-w-3xl w-full rounded-xl p-6 relative border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-purple-500"
        >
          ✕
        </button>

        {/* ================= VIDEO ================= */}

        <div className="w-full aspect-video rounded-lg overflow-hidden mb-5 bg-black">
          {/* YouTube */}
          {project.videoType === "youtube" && (
            <iframe
              src={`https://www.youtube.com/embed/${project.videoId}`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}

          {/* Vimeo */}
          {project.videoType === "vimeo" && (
            <iframe
              src={`https://player.vimeo.com/video/${project.videoId}`}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          )}
        </div>

        {/* Info */}
        <h2 className="text-2xl font-bold mb-2">{project.nama}</h2>

        <p className="opacity-70 mb-4">{project.desk}</p>
      </div>
    </div>
  );
}

function ServiceItem({ number, title, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="
          group cursor-pointer
          bg-black/50 backdrop-blur-xl
          border border-white/10
          rounded-xl p-5
          transition-all duration-300
          hover:border-purple-500/40
          hover:shadow-[0_0_25px_#a855f740]
        "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-purple-400 font-semibold">{number}</span>

          <h4 className="font-medium">{title}</h4>
        </div>

        <span
          className={`
              text-purple-400 transition
              ${open ? "rotate-45" : ""}
            `}
        >
          +
        </span>
      </div>

      {/* Content */}
      {open && (
        <p className="mt-4 text-sm text-zinc-400 leading-relaxed">{desc}</p>
      )}
    </div>
  );
}

export default App;

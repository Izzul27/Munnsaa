import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  /* ================= SCROLL DETECT ================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= NAV CLICK ================= */

  const handleNavClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "tools", label: "Tools" },
    { id: "project", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-xl shadow-[0_0_30px_#a855f740]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

          {/* ================= LOGO ================= */}

          <h1 className="text-2xl font-bold tracking-widest">
            Munnsaa
            <span className="text-purple-500">.</span>
          </h1>

          {/* ================= DESKTOP ================= */}

          <ul className="hidden md:flex gap-10">

            {menuItems.map((item) => (
              <li key={item.id} className="relative group">

                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    uppercase tracking-widest text-sm
                    transition-all duration-300
                    ${
                      activeLink === item.id
                        ? "text-purple-500"
                        : "text-white/80 hover:text-purple-400"
                    }
                  `}
                >
                  {item.label}

                  {/* Underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-2 h-[2px]
                      bg-gradient-to-r from-purple-500 to-fuchsia-500
                      transition-all duration-500
                      ${
                        activeLink === item.id
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </button>

              </li>
            ))}

          </ul>

          {/* ================= MOBILE BTN ================= */}

          <button
            className="md:hidden text-white z-50 hover:text-purple-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* ================= OVERLAY ================= */}

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* ================= MOBILE SIDEBAR ================= */}

        <div
          className={`
            fixed top-0 right-0 h-full w-3/4 sm:w-1/2
            bg-black/90 backdrop-blur-xl
            border-l border-white/10
            p-8 flex flex-col gap-8
            transform transition-transform duration-500
            z-50 md:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close */}
          <button
            className="self-end text-white hover:text-purple-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Menu */}
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                text-left text-lg uppercase tracking-widest
                transition-all duration-300
                ${
                  activeLink === item.id
                    ? "text-purple-500"
                    : "text-white/80 hover:text-purple-400"
                }
              `}
            >
              {item.label}
            </button>
          ))}

          {/* Glow */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-52 h-52 bg-purple-600/30 blur-[140px] rounded-full" />

        </div>

      </nav>
    </>
  );
};

export default Navbar;
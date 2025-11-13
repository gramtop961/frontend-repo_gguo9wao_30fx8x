import { Menu, Instagram, Github } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("top")} className="font-semibold tracking-tight text-gray-900 text-lg">
          ADHIL MUHAMMED
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("experience")}>Experience</button>
          <button onClick={() => scrollTo("contact")} className="px-3 py-1.5 rounded-full bg-gray-900 text-white">Contact</button>
          <a href="https://instagram.com/aadhile_" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-500"><Instagram size={18} /></a>
          <a href="https://github.com/Aadhile" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-900"><Github size={18} /></a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm">
            <button onClick={() => scrollTo("about")} className="text-left">About</button>
            <button onClick={() => scrollTo("skills")} className="text-left">Skills</button>
            <button onClick={() => scrollTo("projects")} className="text-left">Projects</button>
            <button onClick={() => scrollTo("experience")} className="text-left">Experience</button>
            <button onClick={() => scrollTo("contact")} className="text-left">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}

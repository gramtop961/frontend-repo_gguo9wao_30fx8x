import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="top" className="relative h-[90vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full grid md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
              ADHIL MUHAMMED – Full-Stack Developer & Storyteller of Code
            </h1>
            <p className="mt-4 text-gray-700 max-w-2xl">
              Hi, I’m ADHIL MUHAMMED, a full-stack developer passionate about crafting web solutions that combine creativity, functionality, and seamless user experiences. I specialize in building modern web applications that not only work flawlessly but tell a story through their design and interaction.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => scrollTo('projects')} className="px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition">View My Work</button>
              <button onClick={() => scrollTo('contact')} className="px-5 py-2.5 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition">Contact Me</button>
              <a href="https://instagram.com/aadhile_" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">Follow Me on Instagram</a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
    </section>
  );
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/50 to-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title="About Me" subtitle="I’m a full-stack developer who loves problem-solving and turning complex challenges into simple, elegant solutions. From front-end animations to back-end logic, I enjoy building every piece of the puzzle. Beyond code, I believe every project should tell a story and engage users in meaningful ways.">
          <div className="prose max-w-none">
            <p className="text-gray-700">Key Highlights:</p>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>Expertise in modern web technologies: JavaScript, React, Node.js, Python, etc.</li>
              <li>Experience with responsive, user-friendly web applications</li>
              <li>Passion for innovative storytelling and interactive UI/UX design</li>
            </ul>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="projects" title="Projects" subtitle="Showcase of selected projects with brief descriptions and live demos.">
          <Projects />
        </Section>

        <Section id="experience" title="Experience" subtitle="Internships, freelance work, and personal projects with measurable impact.">
          <Experience />
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s build something amazing together!">
          <Contact />
        </Section>
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ADHIL MUHAMMED. All rights reserved.
      </footer>
    </div>
  )
}

export default App
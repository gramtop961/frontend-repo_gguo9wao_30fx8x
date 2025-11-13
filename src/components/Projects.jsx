import { useState } from 'react';

const defaultProjects = [
  {
    name: 'Project One',
    tagline: 'A modern web app experience',
    tech: 'React, Node.js, MongoDB',
    role: 'Full-Stack Developer',
    description: 'A web application that allows users to manage tasks with real-time collaboration.',
    live: '#'
  },
  {
    name: 'Project Two',
    tagline: 'Data-driven dashboard',
    tech: 'React, Express, PostgreSQL',
    role: 'Full-Stack Developer',
    description: 'Analytics dashboard with authentication and role-based access.',
    live: '#'
  },
  {
    name: 'Project Three',
    tagline: 'Interactive ecommerce UI',
    tech: 'Next.js, Stripe',
    role: 'Front-End Developer',
    description: 'High-converting storefront with animations and A/B testing.',
    live: '#'
  }
];

export default function Projects({ projects = defaultProjects }) {
  const [hover, setHover] = useState(-1);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p, i) => (
        <a
          key={p.name}
          href={p.live}
          target={p.live?.startsWith('http') ? '_blank' : undefined}
          rel={p.live?.startsWith('http') ? 'noreferrer' : undefined}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(-1)}
          className="group relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-lg transition overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:via-indigo-500/[0.03] group-hover:to-indigo-500/[0.06] pointer-events-none" />
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{p.name} – <span className="font-normal text-gray-700">{p.tagline}</span></h3>
              <p className="mt-2 text-sm text-gray-600">Tech Used: {p.tech}</p>
              <p className="text-sm text-gray-600">Role: {p.role}</p>
            </div>
            <div className={`h-2 w-2 rounded-full mt-2 ${hover === i ? 'bg-indigo-500' : 'bg-gray-300'}`} />
          </div>
          <p className="mt-4 text-gray-700">{p.description}</p>
          <div className="mt-4 text-sm text-indigo-600 font-medium">{p.live === '#' ? 'Preview coming soon' : 'Live demo'}</div>
        </a>
      ))}
    </div>
  );
}

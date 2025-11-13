export default function Skills() {
  const groups = [
    {
      title: 'Front-End',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind']
    },
    {
      title: 'Back-End',
      items: ['Node.js', 'Express', 'MongoDB', 'SQL']
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Vercel', 'Figma']
    },
    {
      title: 'Other',
      items: ['REST APIs', 'Authentication', 'Deployment', 'Web Animations']
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {groups.map((g) => (
        <div key={g.title} className="rounded-xl border border-black/5 bg-white shadow-sm p-5">
          <h3 className="font-semibold text-gray-900">{g.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {g.items.map((item) => (
              <span key={item} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

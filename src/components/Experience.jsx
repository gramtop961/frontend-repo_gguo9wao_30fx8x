export default function Experience() {
  const items = [
    {
      title: 'Freelance Developer',
      company: 'Self-employed',
      period: '2022 — Present',
      points: [
        'Delivered responsive, accessible web apps with modern stacks',
        'Collaborated with clients to translate ideas into shipped products',
        'Optimized performance and SEO to improve engagement'
      ]
    },
    {
      title: 'Personal Projects',
      company: 'Indie Dev',
      period: 'Ongoing',
      points: [
        'Exploring interactive storytelling with animations and 3D',
        'Building full-stack apps with real-world constraints',
        'Documenting learnings and best practices'
      ]
    }
  ];

  return (
    <div className="grid gap-4">
      {items.map((exp) => (
        <div key={exp.title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{exp.title} • <span className="font-normal text-gray-700">{exp.company}</span></h3>
            <span className="text-sm text-gray-500">{exp.period}</span>
          </div>
          <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
            {exp.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

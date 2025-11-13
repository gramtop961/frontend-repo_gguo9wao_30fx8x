export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

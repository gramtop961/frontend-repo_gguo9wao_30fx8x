import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // For demo: just fake a network call
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    setLoading(false);
    e.currentTarget.reset();
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900">Let’s build something amazing together!</h3>
        <ul className="mt-3 text-gray-700 space-y-1">
          <li>Email: <a href="mailto:aadhile2004@gmail.com" className="text-indigo-600">aadhile2004@gmail.com</a></li>
          <li>Instagram: <a href="https://instagram.com/aadhile_" target="_blank" rel="noreferrer" className="text-indigo-600">@aadhile_</a></li>
          <li>GitHub: <a href="https://github.com/Aadhile" target="_blank" rel="noreferrer" className="text-indigo-600">Aadhile</a></li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
        <div className="grid gap-4">
          <input name="name" required placeholder="Name" className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" required placeholder="Message" rows="4" className="w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <button disabled={loading} className="rounded-lg bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 disabled:opacity-60">
            {loading ? 'Sending...' : 'Submit'}
          </button>
          {sent && <p className="text-green-600 text-sm">Thanks! I’ll get back to you soon.</p>}
        </div>
      </form>
    </div>
  );
}

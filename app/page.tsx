export default function Home() {
  return (
    <main className="bg-[#0b0b0c] text-white min-h-screen px-8 py-24">
      <h1 className="text-6xl font-bold">SelfForge</h1>
      <p className="mt-6 text-[#9a9a9a] max-w-xl">
        We build focused software products that replace complexity with clarity.
      </p>
      <section className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="border border-white/10 p-6 rounded-lg">AutoForge</div>
        <div className="border border-white/10 p-6 rounded-lg">DevBuddy</div>
        <div className="border border-white/10 p-6 rounded-lg">?????</div>
      </section>
    </main>
  );
}
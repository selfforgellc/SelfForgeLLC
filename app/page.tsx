export default function HomePage() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">SelfForge</h1>
        <p className="hero-subtitle">
          We build focused software products that replace complexity with clarity.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <div className="product-card">
          <h2>AutoForge</h2>
          <p>
            Intelligent automotive software that turns vehicle data, diagnostics,
            and workflows into something humans can actually use.
          </p>
        </div>

        <div className="product-card">
          <h2>DevBuddy</h2>
          <p>
            A developer-focused AI assistant designed to reason, build,
            troubleshoot, and ship alongside you — not talk in circles.
          </p>
        </div>

        <div className="product-card muted">
          <h2>?????</h2>
          <p>
            A logistics and fleet platform currently in development.
            Purpose-built for the real-world trucking industry.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} SelfForge LLC</p>
      </footer>
    </main>
  );
}

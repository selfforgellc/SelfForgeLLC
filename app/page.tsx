export default function HomePage() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <h1>Focused software. Forged to replace complexity.</h1>
        <p className="hero-sub">
          SelfForge builds software products that stay sharp, intentional,
          and grounded in real-world workflows.
        </p>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products">
        <div className="product">
          <h2>AutoForge</h2>
          <p>
            Automotive intelligence software that turns vehicle data,
            diagnostics, and workflows into something humans can actually use.
          </p>
          <span className="product-link">Explore →</span>
        </div>

        <div className="product">
          <h2>DevBuddy</h2>
          <p>
            A developer-focused AI assistant designed to reason, build,
            troubleshoot, and ship alongside you.
          </p>
          <span className="product-link">Explore →</span>
        </div>

        <div className="product muted">
          <h2>?????</h2>
          <p>
            A logistics and fleet platform currently in development for the
            trucking industry.
          </p>
          <span className="product-link">In progress</span>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="why">
        <h3>Why SelfForge</h3>
        <p>
          Most software grows bloated, noisy, and disconnected from the people
          who actually use it. SelfForge exists to build tools that remain
          focused, grounded, and useful long after launch.
        </p>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <p>© {new Date().getFullYear()} SelfForge LLC</p>
        <p>
          <a href="mailto:contact@selfforgellc.com">
            contact@selfforgellc.com
          </a>
        </p>
      </footer>
    </main>
  );
}

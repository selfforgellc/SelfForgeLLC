const serviceCards = [
  {
    title: "Interior & exterior painting",
    text: "Clean prep, sharp finish work, and real-world production speed for homes, rentals, and turnover jobs.",
  },
  {
    title: "Drywall, patching & texture",
    text: "Repairs, patches, finishing, and texture work that blends in instead of looking like a band-aid.",
  },
  {
    title: "Flooring & finish updates",
    text: "LVP, trim, refreshes, punch-list upgrades, and the details that make a place feel finished again.",
  },
  {
    title: "Remodeling & property turns",
    text: "Bathrooms, kitchens, maintenance-ready updates, and practical remodel work built around speed and value.",
  },
];

const productCards = [
  {
    title: "AutoForge",
    badge: "Flagship product",
    text: "AI-powered automotive diagnostics and workflow software built to make vehicle problems easier to understand, track, and solve.",
  },
  {
    title: "DevBuddy",
    badge: "In development",
    text: "A serious AI builder designed to help reason through code, troubleshoot systems, and ship real products faster.",
  },
  {
    title: "TruckerForge",
    badge: "Coming soon",
    text: "A trucking and logistics platform focused on dispatch, loads, drivers, routes, and real operational clarity.",
  },
];

const trustPoints = [
  "Kingman and surrounding areas",
  "Free estimate path built into the site",
  "Field-tested work backed by real trade experience",
  "Software products built from real-world workflow pain points",
];

export default function HomePage() {
  return (
    <main id="top">
      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">Built in the field. Forged for the future.</p>
            <h1>
              One company for <span>real-world services</span> and
              <span> next-generation software.</span>
            </h1>
            <p className="hero-subtitle">
              SelfForge Services delivers remodeling, repair, and handyman work
              in Kingman and surrounding areas. SelfForge Software builds tools
              like AutoForge, DevBuddy, and TruckerForge from the same real
              workflow experience.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Get a Free Quote
              </a>
              <a className="button button-secondary" href="#products">
                Explore Software
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="meta-label">Call</span>
                <a href="tel:4174960622">(417) 496-0622</a>
              </div>
              <div>
                <span className="meta-label">Email</span>
                <a href="mailto:selfforgeadmin@selfforgellc.com">
                  selfforgeadmin@selfforgellc.com
                </a>
              </div>
              <div>
                <span className="meta-label">Service area</span>
                <p>Kingman and surrounding areas</p>
              </div>
            </div>
          </div>

          <div className="hero-panel reveal-up delay-1">
            <div className="hero-panel-top">
              <span className="status-pill">SelfForge Services</span>
              <span className="status-pill muted">SelfForge Software</span>
            </div>

            <div className="hero-panel-body">
              <div className="signal-card active">
                <span className="signal-kicker">Services</span>
                <h2>Remodeling, repairs, punch lists, and property turns</h2>
                <p>
                  Built to help you win local work fast without hiding the bigger
                  software vision behind SelfForge.
                </p>
              </div>

              <div className="signal-card">
                <span className="signal-kicker">Software</span>
                <h2>Products shaped by actual work instead of guesswork</h2>
                <p>
                  Real field experience feeds the software side so the brand
                  feels intentional, not split.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band">
        <div className="shell proof-grid">
          {trustPoints.map((point) => (
            <div className="proof-item" key={point}>
              <span className="proof-dot" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="shell">
          <div className="section-heading reveal-up">
            <p className="eyebrow">Arizona services</p>
            <h2>SelfForge Services</h2>
            <p>
              The money-making side of the brand needs to be front and center.
              This section is built to help homeowners, landlords, and property
              managers understand what you do fast.
            </p>
          </div>

          <div className="services-layout">
            <div className="card stack-card reveal-up delay-1">
              <h3>What we handle</h3>
              <div className="service-grid">
                {serviceCards.map((item) => (
                  <article className="service-card" key={item.title}>
                    <span className="service-icon">◆</span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="card side-panel reveal-up delay-2">
              <div className="side-panel-block">
                <p className="mini-label">Positioning</p>
                <h3>Built for homeowners and fast-moving property work</h3>
                <p>
                  Whether it is a refresh, repair, rental turn, or practical
                  remodel, SelfForge Services is positioned to look organized,
                  trustworthy, and serious from the first click.
                </p>
              </div>

              <div className="side-panel-block">
                <p className="mini-label">Why this works</p>
                <ul className="clean-list">
                  <li>Clear local service message</li>
                  <li>Professional look without fake fluff</li>
                  <li>Strong path to call, email, or request a quote</li>
                  <li>Still supports your long-term software brand</li>
                </ul>
              </div>

              <a className="button button-primary full-width" href="#contact">
                Request a Quote
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="shell split-grid">
          <div className="section-heading narrow reveal-up">
            <p className="eyebrow">Why SelfForge feels different</p>
            <h2>Not just another handyman site. Not just another software page.</h2>
            <p>
              Most brands would split this into two disconnected businesses.
              SelfForge is stronger when both sides reinforce each other.
            </p>
          </div>

          <div className="card quote-card reveal-up delay-1">
            <p>
              We do not just talk about workflow, labor, cost, and efficiency.
              We have lived it. That is what gives the service side credibility
              and the software side meaning.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="section products-section">
        <div className="shell">
          <div className="section-heading reveal-up">
            <p className="eyebrow">Software ecosystem</p>
            <h2>Products built from real problems</h2>
            <p>
              The software side of SelfForge should look premium and serious,
              but it should also feel grounded in the kind of work that creates
              real pain points and real opportunities.
            </p>
          </div>

          <div className="product-grid">
            {productCards.map((product, index) => (
              <article
                className={`card product-card reveal-up delay-${(index % 3) + 1}`}
                key={product.title}
              >
                <div className="product-top">
                  <span className="product-badge">{product.badge}</span>
                  <span className="product-arrow">↗</span>
                </div>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="shell about-grid">
          <div className="section-heading reveal-up">
            <p className="eyebrow">About the brand</p>
            <h2>One forge. Two lanes. Same foundation.</h2>
            <p>
              SelfForge exists to build better tools and do better work.
              Remodeling and service work create immediate value in the field.
              Software products scale that thinking into systems people can use
              every day.
            </p>
          </div>

          <div className="card about-card reveal-up delay-1">
            <div className="about-stat">
              <span>01</span>
              <div>
                <h3>Field-first credibility</h3>
                <p>
                  Real-world remodeling and repair experience gives the brand a
                  grounded, practical edge.
                </p>
              </div>
            </div>
            <div className="about-stat">
              <span>02</span>
              <div>
                <h3>Software with a reason to exist</h3>
                <p>
                  SelfForge products are meant to replace fragmented tools with
                  cleaner systems and better outcomes.
                </p>
              </div>
            </div>
            <div className="about-stat">
              <span>03</span>
              <div>
                <h3>Designed for growth</h3>
                <p>
                  The site now supports local lead generation and long-term brand
                  positioning at the same time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="shell contact-grid">
          <div className="section-heading reveal-up">
            <p className="eyebrow">Contact SelfForge</p>
            <h2>Ready to talk about a job or the bigger vision?</h2>
            <p>
              Whether you need remodeling help in Kingman and surrounding areas,
              or you want to connect about the SelfForge software side, there is
              a clear path here.
            </p>
          </div>

          <div className="card contact-card reveal-up delay-1">
            <div className="contact-row">
              <span>Phone</span>
              <a href="tel:4174960622">(417) 496-0622</a>
            </div>
            <div className="contact-row">
              <span>Email</span>
              <a href="mailto:selfforgeadmin@selfforgellc.com">
                selfforgeadmin@selfforgellc.com
              </a>
            </div>
            <div className="contact-row">
              <span>Service area</span>
              <p>Kingman and surrounding areas</p>
            </div>
            <div className="contact-row top-align">
              <span>Quick start</span>
              <p>
                Call for the fastest response, or email with your job type,
                location, timeline, and photos if available.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href="tel:4174960622">
                Call Now
              </a>
              <a
                className="button button-secondary"
                href="mailto:selfforgeadmin@selfforgellc.com?subject=Quote%20Request%20-%20SelfForge%20Services"
              >
                Email for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <p className="footer-brand">SelfForge LLC</p>
            <p className="footer-copy">
              Services and software built from real work.
            </p>
          </div>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

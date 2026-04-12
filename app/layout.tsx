import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SelfForge LLC | Services + Software",
  description:
    "SelfForge LLC builds software and provides field-tested remodeling and handyman services in Kingman, Arizona and surrounding areas.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sf-root">
          <div className="sf-background" />
          <div className="sf-grid" />
          <header className="site-header">
            <div className="shell header-inner">
              <a href="#top" className="brand" aria-label="SelfForge home">
                <span className="brand-mark">SF</span>
                <span className="brand-copy">
                  <strong>SelfForge</strong>
                  <span>Services + Software</span>
                </span>
              </a>

              <nav className="main-nav" aria-label="Primary">
                <a href="#services">Services</a>
                <a href="#products">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </nav>

              <a className="header-cta" href="#contact">
                Get a Quote
              </a>
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "SelfForge LLC",
  description:
    "Focused software products forged to replace complexity with clarity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="sf-root">
          <div className="sf-background" />
          <header className="header">
            <div className="header-inner">
              <div className="logo">SelfForge</div>
              <nav className="nav">
                <a href="#products">Products</a>
                <a href="#why">Why</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
              <span className="font-display text-xl text-primary">N</span>
            </div>
            <span className="font-display text-xl tracking-ultrawide text-foreground group-hover:text-primary transition-colors">
              NOIR FILMS
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {["Films", "Trailers", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-6 h-0.5 bg-foreground"></span>
            <span className="w-4 h-0.5 bg-primary"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

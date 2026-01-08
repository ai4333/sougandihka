const Footer = () => {
  return (
    <footer className="bg-noir py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary flex items-center justify-center">
              <span className="font-display text-sm text-primary">N</span>
            </div>
            <span className="font-display text-sm tracking-ultrawide text-muted-foreground">
              NOIR FILMS
            </span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-8">
            {["Instagram", "Vimeo", "IMDb"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase"
              >
                {link}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground">
            &copy; 2024 Noir Films. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

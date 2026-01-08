import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-noir py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-primary flex items-center justify-center">
              <span className="font-display text-sm text-primary">S</span>
            </div>
            <span className="font-display text-sm tracking-ultrawide text-muted-foreground">
              SOUGANDHIKA STUDIOS
            </span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://www.instagram.com/sougandhika_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase group"
            >
              <Instagram className="w-4 h-4 text-primary" />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@SougandhikaStudios"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest text-muted-foreground hover:text-foreground transition-colors uppercase"
            >
              YouTube
            </a>
          </div>
          
          {/* Copyright */}
          <p className="font-body text-xs text-muted-foreground">
            &copy; 2026 Sougandhika Studios. All rights reserved.
          </p>
        </div>
        
        {/* Yashaverse tagline */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="font-body text-xs tracking-megawide text-muted-foreground">
            THE YASHAVERSE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

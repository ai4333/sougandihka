import { Instagram } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-noir-gradient py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <p className="font-body text-sm tracking-megawide text-primary mb-4">
              THE STUDIO
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 red-underline inline-block">
              ABOUT US
            </h2>
            
            {/* About text - exact text provided */}
            <div className="space-y-6 mt-12">
              <p className="font-body text-lg text-silver-muted leading-relaxed">
                Sougandhika Studios, founded by <span className="text-foreground font-medium">Yashwanth C.V.</span>, began its creative journey in 2020 as a YouTube-based initiative and received formal legal recognition in 2026. The studio specializes in producing short films set within its own original cinematic universe, known as the <span className="text-primary font-medium">"Yashaverse"</span>, where stories unfold around carefully crafted worlds and original characters.
              </p>
              
              <p className="font-body text-lg text-silver-muted leading-relaxed">
                At present, Sougandhika Studios is developing its first feature-length film, <span className="text-foreground font-medium">"The End of the Start"</span>, in collaboration with Kondeti Flicks. Following an initial delay, the film is slated for release in 2026, marking a major milestone in the studio's growth and creative evolution.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">
                Follow Us
              </p>
              <a
                href="https://www.instagram.com/sougandhika_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-primary" />
                <span className="font-body text-sm tracking-widest text-foreground group-hover:text-primary transition-colors">
                  @sougandhika_studios
                </span>
              </a>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            {/* Abstract visual element */}
            <div className="aspect-square relative">
              {/* Layered squares */}
              <div className="absolute inset-8 border border-border" />
              <div className="absolute inset-16 border border-primary/30" />
              <div className="absolute inset-24 bg-charcoal" />
              
              {/* Center symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-primary flex items-center justify-center">
                  <span className="font-display text-6xl text-primary">S</span>
                </div>
              </div>
              
              {/* Yashaverse text */}
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <p className="font-body text-xs tracking-megawide text-muted-foreground">
                  THE YASHAVERSE
                </p>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

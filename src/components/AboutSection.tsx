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
              OUR STORY
            </h2>
            
            {/* Dramatic narrative copy */}
            <div className="space-y-6 mt-12">
              <p className="font-body text-lg text-silver-muted leading-relaxed">
                In the shadows of the industry, where others fear to tread, we found our calling. 
                <span className="text-foreground font-medium"> Noir Films </span>
                was born from a singular vision: to create cinema that doesn't just entertain—it haunts.
              </p>
              
              <p className="font-body text-lg text-silver-muted leading-relaxed">
                Every frame we craft is a confession. Every story we tell is a descent into the depths of human nature. We don't make films for the faint of heart.
              </p>
              
              <p className="font-body text-lg text-foreground leading-relaxed italic">
                "We make films that stay with you—like a debt unpaid."
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="font-display text-4xl md:text-5xl text-primary">47</span>
                <p className="font-body text-sm text-muted-foreground mt-2 tracking-wide">FILMS PRODUCED</p>
              </div>
              <div>
                <span className="font-display text-4xl md:text-5xl text-primary">12</span>
                <p className="font-body text-sm text-muted-foreground mt-2 tracking-wide">AWARDS WON</p>
              </div>
              <div>
                <span className="font-display text-4xl md:text-5xl text-primary">8</span>
                <p className="font-body text-sm text-muted-foreground mt-2 tracking-wide">YEARS ACTIVE</p>
              </div>
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
                  <span className="font-display text-6xl text-primary">N</span>
                </div>
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

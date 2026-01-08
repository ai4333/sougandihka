import upcomingPlaceholder from "@/assets/upcoming-placeholder.jpg";

const UpcomingMoviesSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 smoke-overlay opacity-30" />
      <div className="film-grain" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-megawide text-primary mb-4">
            COMING SOON
          </p>
          <h2 className="font-display text-4xl md:text-6xl text-foreground text-cinematic">
            UPCOMING MOVIES
          </h2>
          <div className="mt-6 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
        
        {/* Large Image Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Image Container */}
            <div className="relative aspect-[21/9] overflow-hidden border border-silver-muted/20">
              <img
                src={upcomingPlaceholder}
                alt="Upcoming Movie"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 bg-noir-vignette opacity-60" />
              
              {/* Coming Soon Badge */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <span className="inline-block px-4 py-2 bg-background/80 border border-primary/50 font-display text-sm tracking-ultrawide text-primary">
                  2026
                </span>
              </div>
            </div>
            
            {/* Red glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(139,0,0,0.3)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMoviesSection;

import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlays */}
      <div className="absolute inset-0 bg-noir-vignette" />
      <div className="absolute inset-0 smoke-overlay" />
      <div className="absolute inset-0 light-leak opacity-60" />
      
      {/* Film Grain */}
      <div className="film-grain" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="font-body text-sm tracking-megawide text-silver-muted mb-6 fade-in-up">
            PREMIUM FILM PRODUCTION
          </p>
          
          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground text-cinematic mb-8 fade-in-up delay-200">
            SOUGANDHIKA
            <span className="block text-primary">STUDIOS</span>
          </h1>
          
          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-silver-muted max-w-xl mx-auto mb-12 fade-in-up delay-400">
            Where stories become legends. Crafting cinematic experiences from the Yashaverse.
          </p>
          
          {/* CTA */}
          <div className="fade-in-up delay-600">
            <a
              href="#trailers"
              className="inline-flex items-center gap-4 px-8 py-4 border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-500 group"
            >
              <span className="font-display text-lg tracking-ultrawide text-foreground">
                WATCH TRAILER
              </span>
              <svg 
                className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-up delay-700">
        <span className="font-body text-xs tracking-widest text-muted-foreground">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

import { Play } from "lucide-react";

const TrailerSection = () => {
  return (
    <section id="trailers" className="bg-background py-24 lg:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-right">
          <p className="font-body text-sm tracking-megawide text-primary mb-4">
            LATEST RELEASE
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground">
            WATCH THE TRAILER
          </h2>
        </div>
        
        {/* Video Container */}
        <div className="relative group cursor-pointer">
          {/* Video Placeholder */}
          <div className="aspect-video bg-charcoal-light rounded-sm overflow-hidden relative">
            {/* Fake video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-noir opacity-80" />
            
            {/* Film strip decoration */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-noir flex items-center gap-4 px-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-charcoal-light rounded-sm" />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-noir flex items-center gap-4 px-4">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-charcoal-light rounded-sm" />
              ))}
            </div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary flex items-center justify-center bg-primary/10 backdrop-blur-sm group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                <Play className="w-10 h-10 md:w-12 md:h-12 text-primary fill-primary ml-1" />
              </div>
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-16 left-8 md:left-16">
              <p className="font-body text-xs tracking-widest text-muted-foreground mb-2">
                OFFICIAL TRAILER
              </p>
              <h3 className="font-display text-3xl md:text-5xl text-foreground">
                BLOOD OATH
              </h3>
            </div>
          </div>
          
          {/* Red glow on hover */}
          <div className="absolute -inset-4 bg-red-glow opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none blur-2xl" />
        </div>
        
        {/* Bullet Divider */}
        <div className="bullet-divider mt-24" />
      </div>
    </section>
  );
};

export default TrailerSection;

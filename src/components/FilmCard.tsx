interface FilmCardProps {
  title: string;
  year: string;
  genre: string;
  image: string;
  youtubeLink?: string;
  delay?: string;
}

const FilmCard = ({ title, year, genre, image, youtubeLink, delay = "" }: FilmCardProps) => {
  const handleClick = () => {
    if (youtubeLink) {
      window.open(youtubeLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div 
      className={`poster-card group ${youtubeLink ? 'cursor-pointer' : ''} fade-in-up ${delay}`}
      onClick={handleClick}
      role={youtubeLink ? "link" : undefined}
      tabIndex={youtubeLink ? 0 : undefined}
      onKeyDown={(e) => {
        if (youtubeLink && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Image */}
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        {/* Year Badge */}
        <span className="inline-block px-3 py-1 text-xs font-body tracking-widest text-primary border border-primary/50 mb-3">
          {year}
        </span>
        
        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Genre */}
        <p className="font-body text-sm text-muted-foreground tracking-wide">
          {genre}
        </p>
        
        {/* Watch indicator */}
        {youtubeLink && (
          <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="font-body text-xs tracking-widest text-primary uppercase">Watch Now</span>
          </div>
        )}
      </div>
      
      {/* Hover Red Glow */}
      <div className="absolute inset-0 bg-red-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default FilmCard;

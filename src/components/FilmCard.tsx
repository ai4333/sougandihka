interface FilmCardProps {
  title: string;
  year: string;
  genre: string;
  image: string;
  delay?: string;
}

const FilmCard = ({ title, year, genre, image, delay = "" }: FilmCardProps) => {
  return (
    <div className={`poster-card group cursor-pointer fade-in-up ${delay}`}>
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
      </div>
      
      {/* Hover Red Glow */}
      <div className="absolute inset-0 bg-red-glow opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default FilmCard;

import FilmCard from "./FilmCard";
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";

const films = [
  {
    title: "BLOOD OATH",
    year: "2024",
    genre: "Crime Thriller",
    image: poster1,
  },
  {
    title: "CRIMSON RAIN",
    year: "2024",
    genre: "Neo-Noir Drama",
    image: poster2,
  },
  {
    title: "THE SYNDICATE",
    year: "2023",
    genre: "Heist Action",
    image: poster3,
  },
  {
    title: "LAST SHADOWS",
    year: "2023",
    genre: "Revenge Thriller",
    image: poster4,
  },
];

const FilmsSection = () => {
  return (
    <section id="films" className="bg-noir-gradient py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <p className="font-body text-sm tracking-megawide text-primary mb-4">
            OUR WORK
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground red-underline inline-block">
            FEATURED FILMS
          </h2>
        </div>
        
        {/* Films Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {films.map((film, index) => (
            <FilmCard
              key={film.title}
              {...film}
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
        
        {/* View All Link */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 font-body text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
          >
            VIEW ALL PROJECTS
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FilmsSection;

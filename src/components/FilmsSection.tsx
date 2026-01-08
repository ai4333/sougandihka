import FilmCard from "./FilmCard";
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";

// Placeholder for the 5th film - can be replaced later
const poster5 = poster1; // Temporary placeholder

const films = [
  {
    title: "THE END OF THE WORLD",
    year: "2024",
    genre: "Short Film",
    image: poster1,
    youtubeLink: "https://youtu.be/LgwcB8B9D74?si=9Cv5pvJL38DnxLRB",
  },
  {
    title: "HARIYO",
    year: "2024",
    genre: "Short Film",
    image: poster2,
    youtubeLink: "https://youtube.com/shorts/ddV6BSGbRs4?si=z1-Qub7QOXgAiWKm",
  },
  {
    title: "SADISTIC",
    year: "2023",
    genre: "Short Film",
    image: poster3,
    youtubeLink: "https://youtu.be/gQK5Mq-0NkM?si=bCFLLE0oZ6i5hZJs",
  },
  {
    title: "ANIRIKSHITA",
    year: "2023",
    genre: "Short Film",
    image: poster4,
    youtubeLink: "https://youtu.be/vM0Ynao1NoE?si=eTOq0AEWQZya6dzp",
  },
  {
    title: "GIPA",
    year: "2024",
    genre: "Coming Soon",
    image: poster5, // Replace this image manually later
    youtubeLink: undefined, // No YouTube link yet
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
        
        {/* Films Grid - 5 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6">
          {films.map((film, index) => (
            <FilmCard
              key={film.title}
              {...film}
              delay={`delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
        
        {/* Note about clicking films */}
        <div className="mt-12 text-center">
          <p className="font-body text-sm text-muted-foreground tracking-wide">
            Click on any poster to watch the film
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilmsSection;

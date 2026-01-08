import FilmCard from "./FilmCard";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import sadisticBackground from "@/assets/sadistic-background.png";
import anirikshitaBackground from "@/assets/anirikshita-background.png";
import hariyoPhiriyoBackground from "@/assets/hariyo-phiriyo-background.png";

const films = [
  {
    title: "HARIYO PHIRIYO",
    year: "2023",
    genre: "Short Film",
    image: hariyoPhiriyoBackground,
    youtubeLink: "https://youtube.com/shorts/ddV6BSGbRs4?si=z1-Qub7QOXgAiWKm",
  },
  {
    title: "ANIRIKSHITA",
    year: "2022",
    genre: "Short Film",
    image: anirikshitaBackground,
    youtubeLink: "https://youtu.be/vM0Ynao1NoE?si=eTOq0AEWQZya6dzp",
  },
  {
    title: "SADISTIC",
    year: "2022",
    genre: "Short Film",
    image: sadisticBackground,
    youtubeLink: "https://youtu.be/gQK5Mq-0NkM?si=bCFLLE0oZ6i5hZJs",
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
        
        {/* Films Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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

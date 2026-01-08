import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingMoviesSection from "@/components/UpcomingMoviesSection";
import TrailerSection from "@/components/TrailerSection";
import FilmsSection from "@/components/FilmsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Film Grain Overlay */}
      <div className="film-grain" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Upcoming Movies Section */}
      <UpcomingMoviesSection />
      
      {/* Trailer Section - Prominent position */}
      <TrailerSection />
      
      {/* Films Section */}
      <FilmsSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;

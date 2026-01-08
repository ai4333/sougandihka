import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilmsSection from "@/components/FilmsSection";
import TrailerSection from "@/components/TrailerSection";
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
      
      {/* Films Section */}
      <FilmsSection />
      
      {/* Trailer Section */}
      <TrailerSection />
      
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

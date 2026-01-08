import { useState } from "react";
import { Instagram } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-background py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="font-body text-sm tracking-megawide text-primary mb-4">
              GET IN TOUCH
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              LET'S CREATE
              <span className="block text-primary">SOMETHING EPIC</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-md">
              Have a story that needs to be told? A vision that demands to be seen? 
              Join the Yashaverse.
            </p>
            
            {/* Contact Info */}
            <div className="mt-12 space-y-4">
              <a
                href="https://www.instagram.com/sougandhika_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-primary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-sm text-silver-muted tracking-wide group-hover:text-foreground transition-colors">
                  @sougandhika_studios
                </span>
              </a>
            </div>
          </div>
          
          {/* Right Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="font-body text-xs tracking-widest text-muted-foreground uppercase">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-charcoal border border-border px-4 py-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              {/* Email Field */}
              <div className="space-y-2">
                <label className="font-body text-xs tracking-widest text-muted-foreground uppercase">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-charcoal border border-border px-4 py-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              {/* Message Field */}
              <div className="space-y-2">
                <label className="font-body text-xs tracking-widest text-muted-foreground uppercase">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-charcoal border border-border px-4 py-4 font-body text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-blood-glow text-primary-foreground font-display text-lg tracking-ultrawide transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

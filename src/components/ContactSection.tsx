import { Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-hero">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
            Let's discuss your project
          </h2>
          <p className="text-hero-muted leading-relaxed mb-10">
            Whether you need a quick consultation or long-term support, I'm happy to explore how I can help. Reach out and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:info@abokait.com"
              className="flex items-center gap-3 bg-accent text-accent-foreground px-7 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="h-5 w-5" />
              info@abokait.com
            </a>
            <a
              href="https://abokait.com"
              className="flex items-center gap-3 border border-hero-muted/30 text-hero-foreground px-7 py-3 rounded-md font-medium hover:border-hero-muted/60 transition-colors"
            >
              <Globe className="h-5 w-5" />
              abokait.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

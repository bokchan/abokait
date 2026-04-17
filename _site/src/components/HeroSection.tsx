const HeroSection = () => {
  return (
    <section className="bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            IT Consulting
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
            Reliable IT expertise for your business
          </h1>
          <p className="text-lg text-hero-muted leading-relaxed mb-10 max-w-xl">
            Helping organisations navigate technology decisions with clarity, from strategy and architecture to hands-on implementation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-accent text-accent-foreground px-7 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Explore services
            </a>
            <a
              href="#contact"
              className="border border-hero-muted/30 text-hero-foreground px-7 py-3 rounded-md font-medium hover:border-hero-muted/60 transition-colors"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

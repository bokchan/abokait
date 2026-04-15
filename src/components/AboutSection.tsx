const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-sm font-medium tracking-widths uppercase mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Independent expertise, personal commitment
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ABOKA IT Consult is a one-person consultancy offering senior-level IT expertise without the overhead of a large firm. I work directly with clients to understand their challenges and deliver practical, lasting solutions.
              </p>
              <p>
                With experience spanning cloud infrastructure, enterprise architecture, and digital transformation, I bring a broad perspective to every engagement — always focused on what creates real value for your organisation.
              </p>
            </div>
          </div>
          <div className="bg-section-alt rounded-lg p-10 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Why work with me
            </h3>
            <ul className="space-y-4">
              {[
                "Senior expertise with direct engagement — no juniors, no middlemen",
                "Vendor-neutral advice focused on your best interests",
                "Flexible terms — scale up or down as needed",
                "Clear communication and transparent pricing",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

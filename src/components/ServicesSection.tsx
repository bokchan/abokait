import { Monitor, Shield, Settings, Users } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "IT Strategy & Advisory",
    description:
      "Aligning technology with business goals through roadmaps, vendor evaluation, and architecture planning.",
  },
  {
    icon: Monitor,
    title: "Systems & Infrastructure",
    description:
      "Cloud migrations, infrastructure design, and modernisation of legacy systems for improved performance.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Risk assessments, security audits, and guidance on regulatory compliance frameworks.",
  },
  {
    icon: Users,
    title: "Project & Change Management",
    description:
      "Delivering IT projects on time and budget while ensuring smooth adoption across the organisation.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="max-w-xl mb-14">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How I can help
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Flexible engagement models — from short advisory sessions to long-term project involvement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-8 w-8 text-accent mb-5" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

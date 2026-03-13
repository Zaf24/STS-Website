import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import kolamImage from "@/assets/kolam-pattern.jpg";

const MissionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <ScrollReveal>
            <SectionLabel english="Our Purpose" tamil="எங்கள் நோக்கம்" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              A Living Bridge Between{" "}
              <span className="text-primary">Heritage</span> and{" "}
              <span className="text-accent">Tomorrow</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              The Singapore Tamil Society exists to preserve, celebrate, and evolve Tamil cultural identity. Through language, literature, arts, and community action, we connect generations and keep our heritage vibrant and relevant.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              {[
                { number: "90+", label: "Years of Heritage" },
                { number: "50+", label: "Annual Events" },
                { number: "2,000+", label: "Active Members" },
                { number: "15+", label: "Active Programmes" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <img
                src={kolamImage}
                alt="Intricate kolam pattern representing Tamil artistic heritage"
                className="w-full rounded-sm object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 border-2 border-secondary rounded-sm" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

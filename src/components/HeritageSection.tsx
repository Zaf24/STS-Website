import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import heritageLamp from "@/assets/heritage-lamp.jpg";

const milestones = [
  {
    year: "1932",
    event:
      "The organisation is registered as the Tamils Reform Association under the leadership of Mr. G. Sarangapany.",
  },
  {
    year: "Renaming",
    event:
      "The association is renamed Singai Tamil Sangam (Singapore Tamil Society), reflecting its evolving role in the community.",
  },
  {
    year: "2019–2025",
    event:
      "More than 1,000 beneficiaries are impacted through programmes, initiatives, and events led by a growing volunteer base.",
  },
  {
    year: "Today",
    event:
      "Recognised as the oldest Tamil organisation in Singapore, continuing to build a strong and vibrant Tamil community.",
  },
];

const HeritageSection = () => {
  return (
    <section className="section-padding bg-foreground text-primary-foreground overflow-hidden">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16">
          {/* Image */}
          <ScrollReveal className="lg:col-span-2">
            <img
              src={heritageLamp}
              alt="Traditional Tamil bronze oil lamp symbolising heritage"
              className="w-full aspect-[3/4] object-cover rounded-sm"
            />
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal className="lg:col-span-3" delay={0.2}>
            <SectionLabel english="Heritage" tamil="பாரம்பரியம்" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-8 md:mb-10">
              A Legacy of Cultural Stewardship
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-4 sm:gap-6">
                  <div className="flex flex-col items-center">
                    <span className="font-display text-sm font-bold text-secondary whitespace-nowrap w-16">
                      {m.year}
                    </span>
                  </div>
                  <div className="border-l border-primary-foreground/20 pl-4 sm:pl-6 pb-2">
                    <p className="text-primary-foreground/70 leading-relaxed">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    quote: "STS gave me a space to reconnect with my Tamil roots. The literary programmes opened a whole new world of appreciation for our language.",
    name: "Priya Ravindran",
    role: "Member since 2018",
  },
  {
    quote: "Volunteering at Sorkanal was transformative. Seeing children compete in Tamil word games with such joy — that's the future of our culture.",
    name: "Kumar Selvan",
    role: "Volunteer Coordinator",
  },
  {
    quote: "As a second-generation Singaporean Tamil, STS helped me feel connected to a community and heritage I might have otherwise lost touch with.",
    name: "Deepa Subramaniam",
    role: "Youth Wing Member",
  },
];

const CommunitySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel english="Community Voices" tamil="சமுதாய குரல்கள்" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Stories From Our Community
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <blockquote className="border-l-2 border-primary/30 pl-6 h-full flex flex-col">
                <p className="text-foreground/80 leading-relaxed italic font-display flex-1">
                  "{t.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-body font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
                </div>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-16">
            <Link
              to="/community"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded transition-all hover:opacity-90"
            >
              Join Our Community
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CommunitySection;

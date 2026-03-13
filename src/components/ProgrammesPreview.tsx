import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionLabel from "./SectionLabel";
import eventLiterary from "@/assets/event-literary.jpg";
import communityYouth from "@/assets/community-youth.jpg";

const programmes = [
  {
    title: "Sorkanal",
    tamil: "சொர்க்கனல்",
    description:
      "A flagship Tamil word game competition that tests vocabulary, wit, and linguistic mastery across generations.",
    image: eventLiterary,
    tag: "Flagship Event",
  },
  {
    title: "Odi Vilaiyaadu Nanba",
    tamil: "ஓடி விளையாடு நண்பா",
    description:
      "A vibrant community sports and cultural programme that brings families together through play and fellowship.",
    image: communityYouth,
    tag: "Community Programme",
  },
];

const ProgrammesPreview = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-editorial">
        <ScrollReveal>
          <SectionLabel english="Signature Programmes" tamil="முக்கிய நிகழ்ச்சிகள்" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-lg">
              Programmes That Define Our Community
            </h2>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all programmes
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programmes.map((prog, i) => (
            <ScrollReveal key={prog.title} delay={i * 0.15}>
              <Link to="/programmes" className="group block">
                <div className="overflow-hidden rounded-sm mb-4">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-secondary">
                  {prog.tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-1 group-hover:text-primary transition-colors">
                  {prog.title}
                </h3>
                <p className="font-tamil text-sm text-muted-foreground mb-2">{prog.tamil}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {prog.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesPreview;

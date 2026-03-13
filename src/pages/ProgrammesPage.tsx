import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import eventLiterary from "@/assets/event-literary.jpg";
import communityYouth from "@/assets/community-youth.jpg";
import kolamImage from "@/assets/kolam-pattern.jpg";

const programmes = [
  {
    title: "Sorkanal",
    tamil: "சொர்க்கனல்",
    category: "Flagship Competition",
    description: "A premier Tamil word game competition that tests vocabulary, linguistic mastery, and quick thinking. Participants from all ages compete in rounds of increasing difficulty, celebrating the richness of the Tamil language.",
    highlights: ["Annual competition since 2005", "Open to all age groups", "Televised finals", "Cash prizes and trophies"],
    image: eventLiterary,
  },
  {
    title: "Odi Vilaiyaadu Nanba",
    tamil: "ஓடி விளையாடு நண்பா",
    category: "Community Sports",
    description: "A vibrant community sports and cultural programme that brings Tamil families together through play, fellowship, and healthy competition. From traditional games to modern sports, this programme builds bonds across generations.",
    highlights: ["Family-friendly events", "Traditional & modern games", "Cultural performances", "Community bonding"],
    image: communityYouth,
  },
  {
    title: "Tamil Literary Circle",
    tamil: "தமிழ் இலக்கிய வட்டம்",
    category: "Literature & Arts",
    description: "A regular gathering of Tamil literature enthusiasts for readings, discussions, and creative writing workshops. The circle nurtures new voices while honouring the great Tamil literary tradition.",
    highlights: ["Monthly meetings", "Guest author sessions", "Poetry workshops", "Published anthologies"],
    image: kolamImage,
  },
  {
    title: "Youth Wing",
    tamil: "இளைஞர் பிரிவு",
    category: "Youth Development",
    description: "Dedicated programmes for young Tamil Singaporeans to explore their cultural identity through arts, leadership, community service, and creative expression.",
    highlights: ["Leadership camps", "Cultural workshops", "Community service", "Mentorship programme"],
    image: communityYouth,
  },
];

const ProgrammesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Programmes" tamil="நிகழ்ச்சிகள்" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Programmes That Shape Our Community
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Each programme is designed to preserve Tamil heritage while building skills, connections, and pride in our cultural identity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {programmes.map((prog, i) => (
        <section
          key={prog.title}
          className={`section-padding ${i % 2 === 0 ? "bg-muted" : "bg-background"}`}
        >
          <div className="container-editorial">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <ScrollReveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full rounded-sm object-cover aspect-[4/3]"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.15} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-secondary">
                  {prog.category}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-1">
                  {prog.title}
                </h2>
                <p className="font-tamil text-sm text-muted-foreground mb-4">{prog.tamil}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{prog.description}</p>
                <ul className="space-y-2">
                  {prog.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-editorial text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              Want to Start a New Programme?
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
              We welcome proposals from community members. If you have an idea for a programme, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded transition-all hover:opacity-90"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgrammesPage;

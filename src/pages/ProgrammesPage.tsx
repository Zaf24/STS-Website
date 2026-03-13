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
    category: "Flagship Debate Competition",
    description:
      "Sorkanal (சொற்கனல்) is an annual inter-university Tamil debate competition, inaugurated in 2023. It aims to enhance university students' interest in Tamil and provide them a platform to debate topics at a level beyond school debates.",
    highlights: [
      "Annual inter-university Tamil debate competition",
      "Inaugurated in 2023",
      "Platform for higher-level Tamil debates",
      "Encourages critical thinking in Tamil",
    ],
    image: eventLiterary,
  },
  {
    title: "Odi Vilaiyaadu Nanba",
    tamil: "ஓடி விளையாடு நண்பா",
    category: "Community Sports",
    description:
      "Odi Vilaiyaadu Nanba brings Tamil heritage to life through play and teamwork. As part of the Tamil Language Festival, teams race through stations themed on the Aimperum Kaapiyangal and Moovendargal, blending speed with culture, language, and collaboration.",
    highlights: [
      "Flagship Tamil Language Festival event",
      "Race-style format with themed stations",
      "Centred on Aimperum Kaapiyangal and Moovendargal",
      "Celebrates Tamil identity through games and teamwork",
    ],
    image: communityYouth,
  },
  {
    title: "Maathi Yosi – Digital Bommalattam",
    tamil: "மாத்தி யோசி",
    category: "Workshops & Competitions",
    description:
      "As part of the Tamil Language Festival 2021, the Youth Wing introduced a fresh take on Bommalattam by digitising the traditional art form. The virtual show, streamed via Facebook Live, attracted over 1,000 views.",
    highlights: [
      "Part of Tamil Language Festival 2021",
      "Digitised traditional Bommalattam",
      "Streamed via Facebook Live",
      "Reached over 1,000 viewers",
    ],
    image: kolamImage,
  },
  {
    title: "Kutties Koothu & Elderlies Befriender",
    tamil: "குட்டீஸ் கூத்து / மூத்தோர் நட்பு",
    category: "Community Outreach",
    description:
      "In partnership with Sree Narayana Mission, STS youth lead monthly cultural sessions for elderly residents, celebrating festivals through crafts and games. These initiatives showcase youth-led compassion and intergenerational bonding.",
    highlights: [
      "Monthly cultural sessions for elderly residents",
      "Partnership with Sree Narayana Mission",
      "Festival-themed crafts and games",
      "Strengthens intergenerational bonds",
    ],
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

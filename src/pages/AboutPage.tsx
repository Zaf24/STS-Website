import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import kolamImage from "@/assets/kolam-pattern.jpg";
import heritageLamp from "@/assets/heritage-lamp.jpg";

const milestones = [
  { year: "1932", event: "Singapore Tamil Society founded by a group of Tamil intellectuals and community leaders." },
  { year: "1940s", event: "Continued cultural activities despite wartime challenges, preserving Tamil identity." },
  { year: "1960s", event: "Formalised Tamil language education programmes and literary initiatives." },
  { year: "1980s", event: "Expanded community outreach with cultural festivals, youth engagement, and partnerships." },
  { year: "2000s", event: "Launched flagship events like Sorkanal. Modernised governance and operations." },
  { year: "2010s", event: "Embraced digital initiatives and grew membership to new heights." },
  { year: "Present", event: "A thriving cultural institution serving 2,000+ members with 50+ annual events." },
];

const leaders = [
  { name: "Dr. Anand Krishnan", role: "President" },
  { name: "Mrs. Lakshmi Devi", role: "Vice President" },
  { name: "Mr. Rajesh Muthusamy", role: "Secretary" },
  { name: "Ms. Kavitha Sundaram", role: "Treasurer" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="About Us" tamil="எங்களைப் பற்றி" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Custodians of Tamil Culture in Singapore
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              For over nine decades, the Singapore Tamil Society has been the anchor of Tamil cultural life — a place where language thrives, traditions evolve, and community deepens.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionLabel english="Our Story" tamil="எங்கள் கதை" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Born From a Love of Language
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 1932, a small group of Tamil scholars, writers, and community activists in Singapore came together with a shared vision: to create a society that would preserve and promote the Tamil language and its rich literary heritage.
                </p>
                <p>
                  What began as intimate literary gatherings has grown into one of Singapore's most respected cultural institutions — an organisation that bridges generations, nurtures artistic expression, and keeps the Tamil spirit alive in a modern, multicultural city-state.
                </p>
                <p>
                  Today, STS serves as both guardian and innovator — honouring ancient traditions while creating fresh, relevant programmes that speak to contemporary Tamil identity.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img
                src={kolamImage}
                alt="Kolam pattern representing artistic tradition"
                className="w-full rounded-sm object-cover aspect-square"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal>
              <SectionLabel english="Mission" tamil="நோக்கம்" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">What We Stand For</h3>
              <p className="text-muted-foreground leading-relaxed">
                To preserve, promote, and evolve Tamil language, literature, arts, and cultural heritage in Singapore through community-driven programmes, events, and educational initiatives that connect generations and inspire pride in Tamil identity.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <SectionLabel english="Vision" tamil="தொலைநோக்கு" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Where We're Headed</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the foremost cultural institution for Tamil heritage in Southeast Asia — a living, breathing community platform where tradition meets innovation, and every Tamil Singaporean can find connection, expression, and belonging.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Heritage Timeline" tamil="வரலாற்றுப் பாதை" />
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-12">
              Our Journey Through Time
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-foreground/20 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex gap-8 md:ml-0">
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-secondary relative z-10" />
                    </div>
                    <div>
                      <span className="font-display text-lg font-bold text-secondary">{m.year}</span>
                      <p className="text-primary-foreground/70 mt-1 leading-relaxed">{m.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Leadership" tamil="தலைமை" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12">
              Our Committee
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {leaders.map((l, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary">
                      {l.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground">{l.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{l.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

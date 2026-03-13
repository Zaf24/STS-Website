import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import kolamImage from "@/assets/kolam-pattern.jpg";
import heritageLamp from "@/assets/heritage-lamp.jpg";

const milestones = [
  {
    year: "1932",
    event:
      "The organisation is registered as the Tamils Reform Association under the leadership of Mr. G. Sarangapany.",
  },
  {
    year: "1930s–1950s",
    event:
      "Begins its journey as one of Singapore’s earliest Tamil organisations, supporting language, culture, and community life.",
  },
  {
    year: "Renaming",
    event:
      "The association is renamed Singai Tamil Sangam (Singapore Tamil Society) to reflect its evolving role in the community.",
  },
  {
    year: "2019–2025",
    event:
      "Over 1,000 beneficiaries impacted through programmes, initiatives, and events led by a growing volunteer base.",
  },
  {
    year: "Today",
    event:
      "Recognised as the oldest Tamil organisation in Singapore, continuing to build a strong and vibrant Tamil community.",
  },
];

const leaders = [
  { name: "K Karthikeyan", role: "President" },
  { name: "Viji Jagadeesh, PBM", role: "Vice President (Membership and Funding)" },
  { name: "Sanjay Muthukumaran", role: "Vice President (Projects)" },
  { name: "Rajan Manogaran", role: "Honorary Treasurer" },
  { name: "Moola Venkatesh Ashwini", role: "Honorary Secretary" },
  { name: "Gopikka Narasa Lakshmi N", role: "Assistant Secretary" },
  { name: "V Eashwar", role: "Assistant Treasurer" },
  { name: "Ramanujam Saravanan", role: "Internal Auditor" },
  { name: "Kumaran Barathan", role: "Committee Member" },
  { name: "Kumaran Pillai", role: "Committee Member" },
  { name: "Malligha D/O Krishnasamy", role: "Committee Member" },
  { name: "Durairaj Marudeeswaran", role: "Committee Member" },
  { name: "Yugesh Kannan", role: "Committee Member" },
  { name: "Maria Immaculate", role: "Committee Member" },
  { name: "T Sakthi Nivas", role: "Committee Member" },
  { name: "Ashreena Bte Mohamed Zakir", role: "Committee Member" },
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
                  The Singapore Tamil Society traces its roots to 1932, when it was registered as the Tamils Reform Association under the leadership of Mr. G. Sarangapany. From the very beginning, its purpose has been to uplift the Tamil community and ensure that Tamil language and culture continue to thrive in Singapore.
                </p>
                <p>
                  Over time, the organisation evolved and became known as Singai Tamil Sangam, reflecting a renewed commitment to building a strong and vibrant Tamil community that speaks, appreciates, and takes pride in Tamizh, while being confidently bilingual in Singapore&apos;s multicultural society.
                </p>
                <p>
                  Today, Singapore Tamil Society continues this journey by creating programmes, events, and initiatives that connect generations, nurture Tamil identity, and support the community&apos;s social, cultural, and educational growth.
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
                To build a strong and vibrant Tamil community in Singapore that continues to speak and appreciate Tamizh, while being confidently bilingual and actively engaged in the nation&apos;s multicultural life.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <SectionLabel english="Vision" tamil="தொலைநோக்கு" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Where We're Headed</h3>
              <p className="text-muted-foreground leading-relaxed">
                To remain a trusted cornerstone for Tamil language, culture, and community — uplifting generations through service, programmes, and partnerships that keep Tamil heritage alive and relevant in modern Singapore.
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

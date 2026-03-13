import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import heroCultural from "@/assets/hero-cultural.jpg";
import eventLiterary from "@/assets/event-literary.jpg";
import communityYouth from "@/assets/community-youth.jpg";
import kolamImage from "@/assets/kolam-pattern.jpg";
import heritageLamp from "@/assets/heritage-lamp.jpg";

const galleryImages = [
  { src: heroCultural, alt: "Cultural celebration", span: "md:col-span-2 md:row-span-2" },
  { src: eventLiterary, alt: "Literary event", span: "" },
  { src: communityYouth, alt: "Community gathering", span: "" },
  { src: kolamImage, alt: "Kolam art", span: "md:col-span-2" },
  { src: heritageLamp, alt: "Heritage lamp", span: "" },
];

const news = [
  {
    title: "STS Announces Sorkanal 2026 Registration",
    date: "10 March 2026",
    excerpt: "Registration is now open for the 21st edition of Singapore's premier Tamil word game competition.",
  },
  {
    title: "Tamil Literary Festival Returns to Esplanade",
    date: "25 February 2026",
    excerpt: "The annual celebration of Tamil literature will feature international authors and local voices.",
  },
  {
    title: "Youth Wing Launches Mentorship Programme",
    date: "15 January 2026",
    excerpt: "A new initiative connecting young Tamil professionals with experienced community leaders.",
  },
];

const MediaPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Media" tamil="ஊடகம்" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Our Living Archive
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Explore our gallery of events, read the latest news, and discover the stories that shape our community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Photo Gallery" tamil="புகைப்பட தொகுப்பு" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12">
              Moments Captured
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className={img.span}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-sm min-h-[200px]"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="News & Announcements" tamil="செய்திகள்" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12">
              Latest Updates
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {news.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <article className="border-b border-border pb-8">
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MediaPage;

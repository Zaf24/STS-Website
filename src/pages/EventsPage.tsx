import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import eventLiterary from "@/assets/event-literary.jpg";
import communityYouth from "@/assets/community-youth.jpg";
import heroCultural from "@/assets/hero-cultural.jpg";

const upcomingEvents = [
  {
    title: "Sorkanal 2026",
    tamil: "சொர்க்கனல் 2026",
    date: "15 June 2026",
    venue: "National Library, Singapore",
    description: "The 21st edition of our flagship Tamil word game competition. Open registration now available.",
    image: eventLiterary,
    tag: "Flagship",
  },
  {
    title: "Odi Vilaiyaadu Nanba 2026",
    tamil: "ஓடி விளையாடு நண்பா 2026",
    date: "20 July 2026",
    venue: "Bishan Community Centre",
    description: "Annual community sports day for Tamil families. Games, food, music, and fellowship.",
    image: communityYouth,
    tag: "Community",
  },
  {
    title: "Tamil Literary Festival 2026",
    tamil: "தமிழ் இலக்கிய விழா 2026",
    date: "12 September 2026",
    venue: "Esplanade, Singapore",
    description: "A weekend celebration of Tamil literature featuring authors, poets, and panel discussions.",
    image: heroCultural,
    tag: "Festival",
  },
];

const pastEvents = [
  { title: "Sorkanal 2025", year: "2025" },
  { title: "Pongal Celebration 2025", year: "2025" },
  { title: "Tamil New Year Gala 2025", year: "2025" },
  { title: "Sorkanal 2024", year: "2024" },
  { title: "Youth Leadership Summit 2024", year: "2024" },
  { title: "Heritage Walk 2024", year: "2024" },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Events" tamil="நிகழ்வுகள்" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Where Culture Comes Alive
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              From flagship competitions to intimate literary evenings, our events are where the Tamil community gathers, celebrates, and grows together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Upcoming" tamil="வரவிருக்கும்" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12">
              What's Coming Up
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            {upcomingEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full aspect-[3/2] object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-secondary">
                      {event.tag}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1 mb-1">
                      {event.title}
                    </h3>
                    <p className="font-tamil text-sm text-muted-foreground mb-3">{event.tamil}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {event.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {event.venue}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{event.description}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Register Interest <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                {i < upcomingEvents.length - 1 && <div className="heritage-divider mt-12" />}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Archive" tamil="ஆவணக்காப்பகம்" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12">
              Past Events
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center justify-between p-4 border border-border rounded-sm hover:border-primary/30 transition-colors">
                  <span className="font-display font-semibold text-foreground">{event.title}</span>
                  <span className="text-sm text-muted-foreground">{event.year}</span>
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

export default EventsPage;

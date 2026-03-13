import { ArrowRight, Users, Heart, Star, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import communityYouth from "@/assets/community-youth.jpg";

const ways = [
  {
    icon: Users,
    title: "Become a Member",
    description: "Join our growing family of 2,000+ members. Enjoy priority event access, voting rights, and community benefits.",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Contribute your time and skills. From event coordination to content creation, every role makes a difference.",
  },
  {
    icon: Heart,
    title: "Donate or Sponsor",
    description: "Support our programmes financially. Your contribution helps us sustain and grow cultural initiatives.",
  },
  {
    icon: Star,
    title: "Partner With Us",
    description: "Collaborate on cultural projects, co-host events, or provide in-kind support for our programmes.",
  },
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Community" tamil="சமுதாயம்" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              A Community Built on Belonging
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              STS is more than an organisation — it's a family. Here's how you can be part of the Tamil community's most vibrant platform.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Get Involved" tamil="இணையுங்கள்" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-12">
              Ways to Participate
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ways.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.1}>
                <div className="p-8 bg-background rounded-sm border border-border hover:border-primary/20 transition-colors">
                  <w.icon size={28} className="text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{w.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{w.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionLabel english="Our Impact" tamil="எங்கள் தாக்கம்" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                Making a Difference, Together
              </h2>
              <div className="grid grid-cols-2 gap-8 mt-8">
                {[
                  { number: "2,000+", label: "Active Members" },
                  { number: "50+", label: "Events Per Year" },
                  { number: "500+", label: "Volunteers" },
                  { number: "10,000+", label: "Lives Touched Annually" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <img
                src={communityYouth}
                alt="STS community members"
                className="w-full rounded-sm object-cover aspect-[4/3]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground text-primary-foreground text-center">
        <div className="container-editorial">
          <ScrollReveal>
            <p className="font-tamil text-secondary/80 text-lg mb-4">வாருங்கள்</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4 max-w-xl mx-auto">
              Ready to Join?
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Whether you're a lifelong Tamil community member or just discovering your roots, we welcome you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded transition-all hover:opacity-90"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;

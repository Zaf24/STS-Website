import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-editorial text-center">
        <ScrollReveal>
          <p className="font-tamil text-primary/60 text-lg mb-4">இணைந்திடுங்கள்</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl mx-auto mb-6">
            Be Part of Something Meaningful
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you want to volunteer, attend events, or simply be part of a vibrant Tamil community in Singapore — there's a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded transition-all hover:opacity-90"
            >
              Get Involved
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/20 text-foreground font-body font-medium text-sm rounded transition-all hover:bg-foreground/5"
            >
              Upcoming Events
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cultural.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-end pb-16 sm:pb-20 md:pb-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tamil community cultural celebration in Singapore"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/10" />
      </div>

      {/* Content */}
      <div className="container-editorial relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="font-tamil text-secondary/80 text-base sm:text-lg mb-2 sm:mb-3">
            சிங்கப்பூர் தமிழ்ச் சங்கம்
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-4 sm:mb-6">
            Rooted in Heritage.{" "}
            <span className="text-secondary">Alive</span> in Community.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-6 sm:mb-8 font-body leading-relaxed">
            Since 1932, the Singapore Tamil Society has been the cultural heartbeat of the Tamil community — nurturing language, arts, and belonging.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/programmes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded transition-all hover:opacity-90 active:scale-[0.98]"
            >
              Explore Programmes
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 border border-primary-foreground/30 text-primary-foreground font-body font-medium text-sm rounded transition-all hover:bg-primary-foreground/10 active:scale-[0.98]"
            >
              Our Story
            </Link>
          </div>
        </motion.div>

        {/* Heritage badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-20 right-8 md:right-12 hidden md:block"
        >
          <div className="text-right">
            <p className="text-6xl lg:text-8xl font-display font-bold text-primary-foreground/10">
              1932
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

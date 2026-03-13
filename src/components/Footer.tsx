import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-editorial py-14 md:py-20 lg:py-28">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 mb-4 lg:mb-0">
            <h3 className="font-display text-lg sm:text-xl font-bold mb-2">
              Singapore Tamil Society
            </h3>
            <p className="font-tamil text-primary-foreground/60 text-sm mb-3">
              சிங்கப்பூர் தமிழ்ச் சங்கம்
            </p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Preserving and promoting Tamil language, culture, and heritage in Singapore since 1932.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-primary-foreground/80">
              Navigate
            </h4>
            <ul className="space-y-2">
              {["About", "Programmes", "Events", "Community", "Media", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-primary-foreground/80">
              Programmes
            </h4>
            <ul className="space-y-2">
              {["Sorkanal", "Odi Vilaiyaadu Nanba", "Tamil Literary Circle", "Youth Wing"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-primary-foreground/60">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4 text-primary-foreground/80">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Singapore</p>
              <p className="break-all sm:break-normal">info@singaporetamilsociety.org</p>
            </div>
          </div>
        </div>

        <div className="heritage-divider mt-10 md:mt-16 mb-6 md:mb-8 opacity-20" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Singapore Tamil Society. All rights reserved.</p>
          <p className="font-tamil">அன்பே சிவம் — Love is God</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

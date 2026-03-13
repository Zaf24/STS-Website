import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-xl font-bold mb-2">
              Singapore Tamil Society
            </h3>
            <p className="font-tamil text-primary-foreground/60 text-sm mb-4">
              சிங்கப்பூர் தமிழ்ச் சங்கம்
            </p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Preserving and promoting Tamil language, culture, and heritage in Singapore since 1932.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
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
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
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
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-primary-foreground/60">
              <p>Singapore</p>
              <p>info@singaporetamilsociety.org</p>
            </div>
          </div>
        </div>

        <div className="heritage-divider mt-16 mb-8 opacity-20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Singapore Tamil Society. All rights reserved.</p>
          <p className="font-tamil">அன்பே சிவம் — Love is God</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

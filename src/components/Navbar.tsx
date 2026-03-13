import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import stsLogo from "@/assets/STS LOGO FINAL_edited.png-2.avif";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Programmes", path: "/programmes" },
  { label: "Events", path: "/events" },
  { label: "Community", path: "/community" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-editorial flex items-center justify-between h-14 md:h-20">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <img
            src={stsLogo}
            alt="Singapore Tamil Society logo"
            className="h-8 w-8 md:h-10 md:w-10 rounded-sm object-contain shrink-0"
          />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="font-tamil font-semibold text-base sm:text-lg md:text-xl text-primary truncate">
              சிங்கப்பூர் தமிழ்ச் சங்கம்
            </span>
            <span className="font-display text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-wide uppercase">
              Singapore Tamil Society
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-body font-medium tracking-wide transition-colors hover:text-primary whitespace-nowrap ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 -mr-2 tap-highlight-transparent"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu - simple dropdown under navbar */}
      {isOpen && (
        <div className="lg:hidden border-b border-border bg-background/98 backdrop-blur-md">
          <div className="container-editorial py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-body py-2 px-1 rounded transition-colors active:bg-muted ${
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="heritage-divider my-3" />
            <p className="font-tamil text-sm text-muted-foreground px-1 pb-1">
              சிங்கப்பூர் தமிழ்ச் சங்கம்
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

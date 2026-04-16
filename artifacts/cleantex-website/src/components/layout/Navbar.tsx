import { useState, useEffect, useRef } from "react";
import { Menu, X, MessageCircle, Mail, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Why Choose Us", href: "/#why-us" },
  { name: "About Us", href: "/#about" },
  { name: "Watch Us in Action", href: "/#reels" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.slice(2);
      setMobileMenuOpen(false);
      if (location === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        setLocation("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  };

  const linkClass = "text-sm font-bold text-foreground/80 hover:text-primary transition-colors relative group";
  const mobileLinkClass = "px-4 py-2 text-base font-bold text-foreground hover:bg-accent hover:text-primary rounded-lg transition-colors";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-1"
          : "bg-transparent py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src="/images/cleantex-logo.png"
              alt="Cleantex Environmental Services Limited"
              className="h-56 w-auto object-contain -my-10 group-hover:opacity-90 transition-opacity"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={linkClass}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={linkClass}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              )
            )}

            {/* Get a Quote dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get a Quote
                <ChevronDown size={15} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-border overflow-hidden z-50"
                  >
                    <a
                      href="https://wa.me/2348064551684"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-5 py-4 hover:bg-accent/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageCircle size={16} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">WhatsApp</p>
                        <p className="text-xs text-muted-foreground">Chat with us</p>
                      </div>
                    </a>
                    <div className="border-t border-border" />
                    <a
                      href="/#contact"
                      onClick={(e) => { handleNavClick(e, "/#contact"); setDropdownOpen(false); }}
                      className="flex items-center gap-3 px-5 py-4 hover:bg-accent/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">Email Us</p>
                        <p className="text-xs text-muted-foreground">Send a message</p>
                      </div>
                    </a>
                    <div className="border-t border-border" />
                    <a
                      href="tel:+2348064551684"
                      onClick={(e) => { e.preventDefault(); setDropdownOpen(false); (window as any).gtag_report_conversion('tel:+2348064551684'); }}
                      className="flex items-center gap-3 px-5 py-4 hover:bg-accent/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Phone size={16} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">Call Us</p>
                        <p className="text-xs text-muted-foreground">08064551684</p>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={mobileLinkClass}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={mobileLinkClass}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="mx-4 mt-2 flex flex-col gap-3">
                <a
                  href="https://wa.me/2348064551684"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
                <a
                  href="/#contact"
                  onClick={(e) => { handleNavClick(e, "/#contact"); }}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold"
                >
                  <Mail size={18} />
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

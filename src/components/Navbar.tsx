import { useState, useEffect, useRef } from "react";
import { plumbingServices, electricalServices } from "../data/services";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/Logotipo.svg"
              alt="Plomeros Multiservicios"
              className="h-[65px] md:h-[73px] w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-text font-medium hover:text-secondary transition-colors relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1.5 text-text font-medium hover:text-secondary transition-colors relative group"
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </button>

              {/* Dropdown Panel */}
              <div
                className={`absolute top-full right-0 mt-3 w-[600px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 origin-top ${
                  isServicesOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Plomería */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-7-9H4m16 0h1M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707" />
                          </svg>
                        </div>
                        <h3 className="font-heading font-bold text-accent text-sm uppercase tracking-wide">
                          Plomería
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {plumbingServices.map((s) => (
                          <a
                            key={s.slug}
                            href={`/servicios/${s.slug}`}
                            className="block px-3 py-2 rounded-lg text-sm text-text-light hover:bg-secondary-light hover:text-text transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {s.title}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Electricidad */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-heading font-bold text-accent text-sm uppercase tracking-wide">
                          Electricidad
                        </h3>
                      </div>
                      <div className="space-y-1">
                        {electricalServices.map((s) => (
                          <a
                            key={s.slug}
                            href={`/servicios/${s.slug}`}
                            className="block px-3 py-2 rounded-lg text-sm text-text-light hover:bg-accent-light hover:text-text transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {s.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <a
                      href="/servicios"
                      className="flex items-center justify-center gap-2 text-sm font-semibold text-secondary hover:text-secondary-dark transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Ver todos los servicios
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/contacto"
              className="text-text font-medium hover:text-secondary transition-colors relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="/contacto"
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              Cotizar ahora
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menú"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-text transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-text transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-80 max-w-[85vw] bg-white z-50 md:hidden transition-transform duration-300 overflow-y-auto shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-2">
          <a
            href="/"
            className="block py-3 px-4 rounded-xl text-text font-medium hover:bg-secondary-light transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </a>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-text font-medium hover:bg-secondary-light transition-colors"
            >
              Servicios
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-4 space-y-4 pt-2 pb-2">
                <div>
                  <p className="px-4 py-1 text-xs font-bold text-accent uppercase tracking-wider">
                    Plomería
                  </p>
                  {plumbingServices.map((s) => (
                    <a
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="block py-2 px-4 text-sm text-text-light hover:text-secondary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
                <div>
                  <p className="px-4 py-1 text-xs font-bold text-accent uppercase tracking-wider">
                    Electricidad
                  </p>
                  {electricalServices.map((s) => (
                    <a
                      key={s.slug}
                      href={`/servicios/${s.slug}`}
                      className="block py-2 px-4 text-sm text-text-light hover:text-secondary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
                <a
                  href="/servicios"
                  className="block py-2 px-4 text-sm font-semibold text-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver todos →
                </a>
              </div>
            </div>
          </div>

          <a
            href="/contacto"
            className="block py-3 px-4 rounded-xl text-text font-medium hover:bg-secondary-light transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </a>

          <div className="pt-4">
            <a
              href="/contacto"
              className="block w-full text-center bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotizar ahora
            </a>
          </div>

          {/* Mobile Contact Info */}
          <div className="pt-6 border-t border-border mt-4 space-y-3">
            <a href="tel:3155533085" onClick={(e) => { e.preventDefault(); (globalThis as any).gtag_report_conversion?.('tel:3155533085'); }} className="flex items-center gap-3 text-sm text-text-light hover:text-secondary transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              315 553 3085
            </a>
            <a href="tel:3184689368" onClick={(e) => { e.preventDefault(); (globalThis as any).gtag_report_conversion?.('tel:3184689368'); }} className="flex items-center gap-3 text-sm text-text-light hover:text-secondary transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              318 468 9368
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

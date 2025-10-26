import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { EMERGENCY_PHONE, ADDRESS_STREET, ADDRESS_CITY, ADDRESS_COUNTRY, EMAIL } from "@/config/constants";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.svg" 
                alt="Logo" 
                className="h-8 w-8 [filter:brightness(0)_saturate(100%)_invert(100%)]"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(100%)'
                }}
              />
              <span className="font-serif text-xl font-semibold">
                Bestattungshaus Floßdorf
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Wir begleiten Sie einfühlsam durch schwere Stunden und helfen dabei, 
              einen würdevollen Abschied zu gestalten. Mit Respekt, Verständnis und 
              jahrelanger Erfahrung stehen wir Ihnen zur Seite.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{EMERGENCY_PHONE}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{EMAIL}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{ADDRESS_STREET}, {ADDRESS_CITY}, {ADDRESS_COUNTRY}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/erste-schritte" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">
                  Erste Schritte
                </Link>
              </li>
              <li>
                <Link to="/bestattungsarten" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">
                  Bestattungsarten
                </Link>
              </li>
              <li>
                <Link to="/kostenrechner" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">
                  Kostenrechner
                </Link>
              </li>
              <li>
                <Link to="/notfall" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">
                  Notfall
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">
                  Datenschutz
                </Link>
              </li>
              {/*
              <li>
                <Link to="/agb" className="text-primary-foreground/80 hover:text-primary-foreground transition-elegant">
                  AGB
                </Link>
              </li>
              */}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025  Bestattungshaus Flossdorf. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
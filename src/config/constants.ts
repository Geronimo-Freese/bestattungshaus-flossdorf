// Globale Konstanten für die Website
export const SITE_CONFIG = {
  // Kontaktinformationen
  phone: {
    emergency: "+49 176 6257 1773", // 24h Notfall
  },
  
  // Adresse
  address: {
    street: "Südanlage 7a",
    city: "35390 Giessen",
    country: "Deutschland"
  },
  
  // Öffnungszeiten
  hours: {
    weekdays: "Mo-Do: 8:00 - 17:00",
    saturday: "Fr-Sa: 9:00 - 14:00",
    sunday: "So: Geschlossen"
  },
  
  // E-Mail
  email: "info@bestattungshaus-flossdorf.de",
  
  // Website-Informationen
  siteName: "Bestattungshaus Flossdorf",
  siteDescription: "Einfühlsame Bestattungsdienstleistungen mit persönlicher Betreuung",
  
  // Impressum & Rechtliches
  legal: {
    companyName: "Bestattungshaus Flossdorf",
    owner: "Jill Flossdorf",
    taxId: "020 817 61 886", // Steuernummer
    // vatId: "DE123456789", // Umsatzsteuer-ID
    responsibleForContent: "Jill Flossdorf",
  },
  
  // Social Media (falls vorhanden)
  social: {
    facebook: "",
    instagram: "",
    linkedin: ""
  }
} as const;

// Export einzelner Konstanten für einfachere Verwendung
export const EMERGENCY_PHONE = SITE_CONFIG.phone.emergency;
export const EMAIL = SITE_CONFIG.email;
export const SITE_NAME = SITE_CONFIG.siteName;
export const ADDRESS_STREET = SITE_CONFIG.address.street;
export const ADDRESS_CITY = SITE_CONFIG.address.city;
export const ADDRESS_COUNTRY = SITE_CONFIG.address.country;
export const WEEKDAYS = SITE_CONFIG.hours.weekdays;
export const SATURDAY = SITE_CONFIG.hours.saturday;
export const SUNDAY = SITE_CONFIG.hours.sunday;

// Impressum Konstanten
export const COMPANY_NAME = SITE_CONFIG.legal.companyName;
export const OWNER = SITE_CONFIG.legal.owner;
export const TAX_ID = SITE_CONFIG.legal.taxId;
export const VAT_ID = SITE_CONFIG.legal.vatId;
export const REGISTER_COURT = SITE_CONFIG.legal.registerCourt;
export const REGISTER_NUMBER = SITE_CONFIG.legal.registerNumber;
export const RESPONSIBLE_FOR_CONTENT = SITE_CONFIG.legal.responsibleForContent;
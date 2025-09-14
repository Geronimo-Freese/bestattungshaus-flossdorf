import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Mail, MapPin, Phone, Building, Scale } from "lucide-react";
import { 
  COMPANY_NAME, 
  OWNER, 
  EMAIL, 
  ADDRESS_STREET, 
  ADDRESS_CITY, 
  ADDRESS_COUNTRY,
  EMERGENCY_PHONE,
  TAX_ID,
  VAT_ID,
  REGISTER_COURT,
  REGISTER_NUMBER,
  RESPONSIBLE_FOR_CONTENT,
  SITE_CONFIG
} from "@/config/constants";

export const Impressum = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Impressum
          </h1>
          <p className="text-lg text-muted-foreground">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        <div className="space-y-8">
          {/* Unternehmensinformationen */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Building className="h-5 w-5 mr-2 text-primary" />
                Unternehmensinformationen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Firmenname</h3>
                <p className="text-muted-foreground">{COMPANY_NAME}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Inhaber</h3>
                <p className="text-muted-foreground">{OWNER}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Handelsregister</h3>
                <p className="text-muted-foreground">
                  {REGISTER_COURT}<br />
                  Registernummer: {REGISTER_NUMBER}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Kontaktinformationen */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Kontaktinformationen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Anschrift</h3>
                <p className="text-muted-foreground">
                  {ADDRESS_STREET}<br />
                  {ADDRESS_CITY}<br />
                  {ADDRESS_COUNTRY}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                <p className="text-muted-foreground">
                  <a href={`tel:${EMERGENCY_PHONE}`} className="hover:text-primary transition-colors">
                    {EMERGENCY_PHONE}
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
                <p className="text-muted-foreground">
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                    {EMAIL}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Steuerliche Angaben */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Scale className="h-5 w-5 mr-2 text-primary" />
                Steuerliche Angaben
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Steuernummer</h3>
                <p className="text-muted-foreground">{TAX_ID}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Umsatzsteuer-ID</h3>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  {VAT_ID}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Verantwortlich für den Inhalt */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Verantwortlich für den Inhalt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                <strong>{RESPONSIBLE_FOR_CONTENT}</strong>
              </p>
            </CardContent>
          </Card>

          {/* Berufshaftpflichtversicherung */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Scale className="h-5 w-5 mr-2 text-primary" />
                Berufshaftpflichtversicherung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Versicherungsgesellschaft</h3>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.legal.professionalLiabilityInsurance.provider}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Geltungsraum</h3>
                <p className="text-muted-foreground">
                  {SITE_CONFIG.legal.professionalLiabilityInsurance.coverage}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Haftungsausschluss */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Haftungsausschluss</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Datenschutz */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Datenschutz</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf 
                unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, 
                erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche 
                Zustimmung nicht an Dritte weitergegeben.
              </p>
              <p className="mt-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

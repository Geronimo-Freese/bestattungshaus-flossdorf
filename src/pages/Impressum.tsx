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

        </div>
      </div>
    </div>
  );
};

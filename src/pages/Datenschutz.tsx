import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Mail, MapPin, Phone, Building, Scale, Eye, Database, Lock } from "lucide-react";
import { 
  COMPANY_NAME, 
  OWNER, 
  EMAIL, 
  ADDRESS_STREET, 
  ADDRESS_CITY, 
  ADDRESS_COUNTRY,
  EMERGENCY_PHONE
} from "@/config/constants";

export const Datenschutz = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-muted-foreground">
            Informationen zum Datenschutz gemäß DSGVO
          </p>
        </div>

        <div className="space-y-8">
          {/* Verantwortlicher */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Building className="h-5 w-5 mr-2 text-primary" />
                Verantwortlicher
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Verantwortlicher für die Datenverarbeitung</h3>
                <p className="text-muted-foreground">
                  {COMPANY_NAME}<br />
                  {OWNER}<br />
                  {ADDRESS_STREET}<br />
                  {ADDRESS_CITY}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Kontakt</h3>
                <p className="text-muted-foreground">
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                    {EMAIL}
                  </a><br />
                  <a href={`tel:${EMERGENCY_PHONE}`} className="hover:text-primary transition-colors">
                    {EMERGENCY_PHONE}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Allgemeine Hinweise zur Datenverarbeitung */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Database className="h-5 w-5 mr-2 text-primary" />
                Allgemeine Hinweise zur Datenverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Rechtsgrundlage</h3>
                <p>
                  Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO) 
                  und des Bundesdatenschutzgesetzes (BDSG). Wir verarbeiten personenbezogene Daten nur, soweit dies zur 
                  Erfüllung unserer Leistungen erforderlich ist oder Sie uns hierzu Ihre Einwilligung erteilt haben.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Zweck der Datenverarbeitung</h3>
                <p>
                  Wir verarbeiten personenbezogene Daten ausschließlich für die Erbringung unserer Bestattungsdienstleistungen, 
                  die Kommunikation mit Ihnen und die Erfüllung rechtlicher Verpflichtungen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Speicherdauer</h3>
                <p>
                  Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die Erfüllung der Zwecke 
                  erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Erhebung und Verarbeitung personenbezogener Daten */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Eye className="h-5 w-5 mr-2 text-primary" />
                Erhebung und Verarbeitung personenbezogener Daten
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Kontaktaufnahme</h3>
                <p>
                  Bei der Kontaktaufnahme mit uns (per Telefon, E-Mail oder über unser Kontaktformular) werden die von Ihnen 
                  mitgeteilten Daten (Name, Anschrift, Telefonnummer, E-Mail-Adresse) zur Bearbeitung Ihrer Anfrage 
                  gespeichert. Diese Daten werden nicht an Dritte weitergegeben.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Bestattungsdienstleistungen</h3>
                <p>
                  Für die Erbringung unserer Bestattungsdienstleistungen erheben und verarbeiten wir die für die 
                  Durchführung der Bestattung erforderlichen personenbezogenen Daten des Verstorbenen und der 
                  Angehörigen. Dies erfolgt auf Grundlage von Vertragserfüllung und rechtlichen Verpflichtungen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Website-Nutzung</h3>
                <p>
                  Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet. 
                  Diese Informationen werden temporär in einem sogenannten Logfile gespeichert.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies und Tracking */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                Cookies und Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cookies</h3>
                <p>
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. 
                  Sie dienen dazu, unsere Website benutzerfreundlicher zu machen und die Nutzung zu analysieren. Sie können 
                  die Speicherung von Cookies in den Einstellungen Ihres Browsers deaktivieren.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Analyse-Tools</h3>
                <p>
                  Wir verwenden derzeit keine Analyse-Tools wie Google Analytics. Sollten wir in Zukunft solche Tools 
                  einsetzen, werden wir Sie hierüber informieren und Ihre Einwilligung einholen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ihre Rechte */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Scale className="h-5 w-5 mr-2 text-primary" />
                Ihre Rechte
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Auskunftsrecht</h3>
                <p>
                  Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu verlangen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Recht auf Berichtigung</h3>
                <p>
                  Sie haben das Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Recht auf Löschung</h3>
                <p>
                  Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten, sofern keine gesetzlichen 
                  Aufbewahrungsfristen bestehen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Recht auf Einschränkung</h3>
                <p>
                  Sie haben das Recht auf Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Widerspruchsrecht</h3>
                <p>
                  Sie haben das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Beschwerderecht</h3>
                <p>
                  Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung 
                  Ihrer personenbezogenen Daten durch uns zu beschweren.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Datensicherheit */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Lock className="h-5 w-5 mr-2 text-primary" />
                Datensicherheit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">SSL-Verschlüsselung</h3>
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte 
                  eine SSL-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung daran, dass die Adresszeile 
                  des Browsers von "http://" auf "https://" wechselt.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Sicherheitsmaßnahmen</h3>
                <p>
                  Wir treffen angemessene technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten 
                  vor unbefugtem Zugriff, Verlust, Missbrauch oder Veränderung zu schützen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Kontakt für Datenschutz */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                Kontakt für Datenschutz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Datenschutzbeauftragter</h3>
                <p className="text-muted-foreground">
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an:
                </p>
                <p className="text-muted-foreground mt-2">
                  <a href={`mailto:${EMAIL}`} className="hover:text-primary transition-colors">
                    {EMAIL}
                  </a><br />
                  <a href={`tel:${EMERGENCY_PHONE}`} className="hover:text-primary transition-colors">
                    {EMERGENCY_PHONE}
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Änderungen der Datenschutzerklärung */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Änderungen der Datenschutzerklärung</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Die jeweils aktuelle 
                Version finden Sie auf dieser Seite. Wesentliche Änderungen werden wir Ihnen mitteilen.
              </p>
              <p className="mt-4">
                <strong>Stand dieser Datenschutzerklärung:</strong> {new Date().toLocaleDateString('de-DE')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

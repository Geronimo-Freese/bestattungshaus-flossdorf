import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Clock, Phone, Mail, Wrench, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { EMERGENCY_PHONE, EMAIL } from "@/config/constants";

export const UnderConstruction = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Wrench className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Seite in Bearbeitung
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir arbeiten gerade an dieser Seite, um Ihnen die bestmögliche Erfahrung zu bieten. 
            Bald können Sie hier mehr über uns erfahren.
          </p>
        </div>

        <div className="space-y-8">
          {/* Construction Info */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Was passiert gerade?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Wir arbeiten intensiv daran, diese Seite mit wertvollen Informationen über unser Team, 
                unsere Geschichte und unsere Werte zu füllen. Unser Ziel ist es, Ihnen einen 
                umfassenden Einblick in unsere Arbeit und unser Engagement zu geben.
              </p>
              <p>
                In der Zwischenzeit stehen wir Ihnen gerne für alle Ihre Fragen zur Verfügung. 
                Kontaktieren Sie uns jederzeit – wir sind für Sie da.
              </p>
            </CardContent>
          </Card>

          {/* Alternative Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Options */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-primary" />
                  Kontakt aufnehmen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">24h Notfallnummer</p>
                      <p className="text-muted-foreground">{EMERGENCY_PHONE}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">E-Mail</p>
                      <p className="text-muted-foreground">{EMAIL}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button className="w-full" asChild>
                    <a href={`tel:${EMERGENCY_PHONE}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`mailto:${EMAIL}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      E-Mail senden
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Other Pages */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Weitere Informationen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Entdecken Sie unsere anderen Seiten, die bereits verfügbar sind:
                </p>
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/erste-schritte">
                      <Heart className="mr-2 h-4 w-4" />
                      Erste Schritte im Trauerfall
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/bestattungsarten">
                      <Heart className="mr-2 h-4 w-4" />
                      Bestattungsarten
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/kontakt">
                      <Heart className="mr-2 h-4 w-4" />
                      Kontakt
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Wann ist die Seite fertig?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Aktuell</p>
                  <p>Inhalte werden erstellt und optimiert</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Bald</p>
                  <p>Qualitätskontrolle und finale Überarbeitung</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-foreground">Demnächst</p>
                  <p>Veröffentlichung der vollständigen Seite</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center">
            <Button asChild>
              <Link to="/">
                <Heart className="mr-2 h-4 w-4" />
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, FileText, Clock, Heart, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const ErsteSchritte = () => {
  const steps = [
    {
      icon: Phone,
      title: "1. Sofortige Kontaktaufnahme",
      description: "Rufen Sie uns sofort an oder lassen Sie uns zu Ihnen kommen",
      details: [
        "24h Notfalltelefon: 0800 123 456 789",
        "Hausbesuch innerhalb einer Stunde",
        "Erste Beratung kostenlos und unverbindlich"
      ]
    },
    {
      icon: FileText,
      title: "2. Wichtige Dokumente",
      description: "Wir helfen bei der Beschaffung aller notwendigen Unterlagen",
      details: [
        "Personalausweis des Verstorbenen",
        "Sterbeurkunde vom Standesamt",
        "Krankenversicherungsnachweis",
        "Bestattungsverfügung (falls vorhanden)"
      ]
    },
    {
      icon: Heart,
      title: "3. Bestattungsart wählen",
      description: "Gemeinsam finden wir die passende Form des Abschieds",
      details: [
        "Erdbestattung oder Feuerbestattung",
        "Auswahl des Friedhofs",
        "Sarg- oder Urnenauswahl",
        "Gestaltung der Trauerfeier"
      ]
    },
    {
      icon: Clock,
      title: "4. Ablauf planen",
      description: "Wir organisieren alle Details für Sie",
      details: [
        "Terminkoordination mit Friedhof",
        "Blumenschmuck und Dekoration",
        "Musik und Redner organisieren",
        "Trauerkarten und Anzeigen"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Erste Schritte im Trauerfall
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ein Todesfall tritt oft unerwartet ein und bringt viele Fragen mit sich. 
            Wir begleiten Sie Schritt für Schritt durch diese schwere Zeit und nehmen 
            Ihnen alle organisatorischen Aufgaben ab.
          </p>
        </div>

        {/* Emergency Contact */}
        <Card className="mb-12 border-destructive bg-destructive/5">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <CardTitle className="text-destructive">Im akuten Trauerfall</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold mb-2">24h Notfallnummer</p>
                <p className="text-3xl font-bold text-destructive">0800 123 456 789</p>
                <p className="text-muted-foreground">Kostenlos aus dem deutschen Festnetz und Mobilfunk</p>
              </div>
              <Button size="lg" variant="destructive">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-serif text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Wichtige Hinweise</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Lassen Sie sich nicht unter Druck setzen - wir haben Zeit für Sie</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Alle Kosten werden vorab transparent kommuniziert</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Wir organisieren auch kurzfristige Bestattungen</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Trauerbegleitung und psychologische Unterstützung verfügbar</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif text-xl">Weiterführende Hilfe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/kostenrechner">
                  <FileText className="mr-2 h-4 w-4" />
                  Kostenrechner nutzen
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/bestattungsarten">
                  <Heart className="mr-2 h-4 w-4" />
                  Bestattungsarten erkunden
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/ueber-uns">
                  <Phone className="mr-2 h-4 w-4" />
                  Unser Team kennenlernen
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
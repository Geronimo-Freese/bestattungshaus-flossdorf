import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, Shield, Phone, ChevronRight, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/background.jpg)' }}>
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        {/* Content mit höherem z-index */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/logo.svg" 
              alt="Logo" 
              className="h-16 w-auto mx-auto mb-6 [filter:brightness(0)_saturate(100%)_invert(40%)_sepia(80%)_saturate(200%)_hue-rotate(60deg)]"
              style={{
                filter: 'brightness(0) saturate(100%) invert(40%) sepia(80%) saturate(200%) hue-rotate(60deg)'
              }}
            />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            In schweren Stunden<br />
            <span className="text-primary-foreground">sind wir für Sie da</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Wir begleiten Sie einfühlsam und professionell bei der Organisation einer 
            würdevollen Bestattung. Mit Respekt, Verständnis und jahrelanger Erfahrung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/erste-schritte">
                Erste Schritte
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/kostenrechner">
                <Calculator className="mr-2 h-5 w-5" />
                Kostenrechner
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/kontakt">
                <Phone className="mr-2 h-5 w-5" />
                24h Notfall
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Von der ersten Beratung bis zur Trauerfeier – wir begleiten Sie durch alle Schritte 
              und sorgen für einen würdevollen Abschied.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-elegant transition-elegant">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Einfühlsame Beratung</CardTitle>
                <CardDescription>
                  Persönliche Betreuung in Ihrem Zuhause oder in unseren Räumen. 
                  Wir nehmen uns Zeit für Ihre Wünsche und Bedürfnisse.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/erste-schritte">Mehr erfahren</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-elegant">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">24h Verfügbarkeit</CardTitle>
                <CardDescription>
                  Im Todesfall sind wir rund um die Uhr für Sie erreichbar. 
                  Unser Notdienst steht Ihnen jederzeit zur Verfügung.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/notfall">Notfall-Kontakt</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-elegant">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="font-serif text-xl">Transparente Kosten</CardTitle>
                <CardDescription>
                  Faire und transparente Preisgestaltung. Nutzen Sie unseren 
                  Kostenrechner für eine erste Orientierung.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/kostenrechner">Kosten berechnen</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bestattungsarten Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Bestattungsarten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jeder Abschied ist individuell. Wir bieten verschiedene Bestattungsformen, 
              die den Wünschen des Verstorbenen und der Angehörigen entsprechen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Erdbestattung", description: "Traditionelle Beisetzung auf dem Friedhof" },
              { title: "Feuerbestattung", description: "Einäscherung mit verschiedenen Beisetzungsoptionen" },
              { title: "Seebestattung", description: "Beisetzung in Nord- oder Ostsee" },
            ].map((type, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-elegant">
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{type.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/bestattungsarten">Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Haben Sie Fragen oder benötigen Sie Hilfe?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Unser erfahrenes Team steht Ihnen jederzeit zur Verfügung. 
            Kontaktieren Sie uns für ein persönliches Gespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontakt">
                Kontakt aufnehmen
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/ueber-uns">
                Über uns erfahren
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
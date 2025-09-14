import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Clock, Award, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const UeberUns = () => {
  const team = [
    {
      name: "Maria Schneider",
      role: "Geschäftsführerin & Bestatterin",
      experience: "25 Jahre Erfahrung",
      specialties: ["Trauerbegleitung", "Bestattungsplanung", "Angehörigenbetreuung"],
      description: "Mit Leidenschaft und Einfühlungsvermögen begleite ich Familien seit über zwei Jahrzehnten durch schwere Stunden."
    },
    {
      name: "Thomas Weber", 
      role: "Bestatter & Trauerredner",
      experience: "18 Jahre Erfahrung",
      specialties: ["Trauerreden", "Bestattungsorganisation", "Friedhofskoordination"],
      description: "Als ausgebildeter Trauerredner gestalte ich würdevolle Abschiedsfeiern, die das Leben des Verstorbenen ehren."
    },
    {
      name: "Sarah Klein",
      role: "Trauerbegleiterin",
      experience: "12 Jahre Erfahrung", 
      specialties: ["Psychologische Betreuung", "Kindergruppenbegleitung", "Krisenintervention"],
      description: "Ich unterstütze Trauernde dabei, ihren eigenen Weg durch die Trauer zu finden und neue Kraft zu schöpfen."
    },
    {
      name: "Michael König",
      role: "Bestattungsvorsorge",
      experience: "15 Jahre Erfahrung",
      specialties: ["Bestattungsvorsorge", "Vertragsberatung", "Finanzplanung"],
      description: "Ich berate Sie umfassend bei der Bestattungsvorsorge, damit Sie und Ihre Angehörigen abgesichert sind."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Menschlichkeit",
      description: "Wir begegnen jedem Menschen mit Respekt, Würde und Verständnis für ihre individuelle Situation."
    },
    {
      icon: Users,
      title: "Familiäre Betreuung",
      description: "Als Familienbetrieb in dritter Generation pflegen wir persönliche Beziehungen zu unseren Familien."
    },
    {
      icon: Clock,
      title: "Zuverlässigkeit",
      description: "Seit über 60 Jahren sind wir eine vertrauensvolle Anlaufstelle in Zeiten der Trauer."
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Höchste Standards in der Ausbildung und kontinuierliche Weiterbildung unseres Teams."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Über uns
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seit 1960 begleiten wir Familien in schweren Stunden. Als traditionsreiches 
            Familienunternehmen verbinden wir jahrzehntelange Erfahrung mit modernen, 
            einfühlsamen Bestattungsdienstleistungen.
          </p>
        </div>

        {/* Company Story */}
        <Card className="mb-16 shadow-soft">
          <CardContent className="py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Unsere Geschichte
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Seit über fünf Jahren begleite ich Angehörige in einer besonders sensiblen Lebenssituation – beim Abschied von einem geliebten Menschen. Die Begleitung trauernder Familien ist für mich nicht nur ein Beruf, sondern eine verantwortungsvolle Aufgabe, der ich mich mit großer Sorgfalt und persönlichem Engagement widme.
                  </p>
                  <p>
                    In unserem Familienunternehmen legen wir besonderen Wert auf Vertrauenswürdigkeit und Transparenz. Wir wissen, dass in Momenten der Trauer nicht nur emotionale, sondern auch organisatorische und finanzielle Fragen eine große Rolle spielen. Deshalb garantieren wir Ihnen klare Abläufe, offene Kommunikation und absolute Kostentransparenz – vom ersten Gespräch bis zur Durchführung der Bestattung.
                  </p>
                  <p>
                    Es ist uns ein Herzensanliegen, dass Sie sich in dieser schweren Zeit gut aufgehoben fühlen. Wir begleiten Sie mit Würde, Mitgefühl und dem tiefen Respekt für die Einzigartigkeit jedes Lebens.
                  </p>
                  <p>
                    Sprechen Sie uns an – wir sind für Sie da, wann immer Sie uns brauchen.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-primary rounded-lg p-8">
                <div className="text-center space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-primary">60+</div>
                    <div className="text-muted-foreground">Jahre Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">2000+</div>
                    <div className="text-muted-foreground">Begleitete Familien</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">3</div>
                    <div className="text-muted-foreground">Generationen</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <div className="text-muted-foreground">Erreichbarkeit</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diese Grundsätze leiten uns täglich in unserem Handeln und prägen 
              unsere Beziehung zu den Familien, die uns ihr Vertrauen schenken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-elegant transition-elegant">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lernen Sie die Menschen kennen, die mit Herz und Professionalität 
              für Sie da sind. Jedes Teammitglied bringt einzigartige Qualifikationen 
              und langjährige Erfahrung mit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-serif text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mb-2">
                        {member.role}
                      </CardDescription>
                      <Badge variant="secondary">{member.experience}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Spezialgebiete:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <Card className="mb-16 shadow-soft">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-center">Qualifikationen & Mitgliedschaften</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-secondary/30 rounded-lg">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Bundesverband Deutscher Bestatter</h4>
                <p className="text-sm text-muted-foreground">Zertifizierte Mitgliedschaft</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Ausgebildete Trauerbegleiter</h4>
                <p className="text-sm text-muted-foreground">Psychologische Zusatzqualifikation</p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">ISO 9001 Zertifiziert</h4>
                <p className="text-sm text-muted-foreground">Qualitätsmanagement</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card className="shadow-elegant">
          <CardContent className="py-12 text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Lernen Sie uns persönlich kennen
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Gerne laden wir Sie zu einem unverbindlichen Kennenlern-Gespräch ein. 
              Besuchen Sie uns in unseren Räumen oder wir kommen zu Ihnen nach Hause.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/kontakt">
                  <Mail className="mr-2 h-5 w-5" />
                  Termin vereinbaren
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/erste-schritte">
                  <Phone className="mr-2 h-5 w-5" />
                  Sofort sprechen
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
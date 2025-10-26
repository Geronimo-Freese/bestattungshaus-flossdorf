import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Clock, Award, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const UeberUns = () => {
  

  const values = [
    {
      icon: Heart,
      title: "Menschlichkeit",
      description: "Mit Herz und Verständnis begleiten wir Sie."
    },
    {
      icon: Users,
      title: "Familiäre Betreuung",
      description: "Familiär, vertraut und fürsorglich."
    },
    {
      icon: Clock,
      title: "Zuverlässigkeit",
      description: "Verlässlichkeit, die in schweren Zeiten trägt."
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Echte Qualität schafft bleibende Erinnerungen."
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Unser Bestattungshaus
          </h1>
          <blockquote className="text-xl text-muted-foreground max-w-3xl mx-auto italic font-serif">
            <p className="mb-4">
              „Was man tief in seinem Herzen besitzt, kann man nicht durch den Tod verlieren."
            </p>
          </blockquote>
            <cite className="text-sm text-muted-foreground font-medium">
              – Johann Wolfgang von Goethe
            </cite>
        </div>

        {/* Company Story */}
        <Card className="mb-16 shadow-soft">
          <CardContent className="py-12">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Über mich
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Seit über fünf Jahren begleite ich Angehörige in einer besonders sensiblen Lebenssituation: beim Abschied von einem geliebten Menschen. Die Begleitung trauernder Familien ist für mich nicht nur ein Beruf, sondern eine verantwortungsvolle Aufgabe, der ich mich mit großer Sorgfalt und persönlichem Engagement widme. Da ich im Wetteraukreis aufgewachsen bin und meine Familie hier verwurzelt ist, liegt mir die Verbundenheit zu dieser Region besonders am Herzen.
                  </p>
                  <p>
                    Auf meiner Website lege ich besonderen Wert auf Vertrauenswürdigkeit und Transparenz. Mir ist bewusst, dass in Momenten der Trauer neben emotionalen auch organisatorische und finanzielle Fragen eine große Rolle spielen. Deshalb garantieren wir Ihnen klare Abläufe, offene Kommunikation und absolute Kostentransparenz – vom ersten Gespräch bis zur Durchführung der Bestattung.
                  </p>
                  <p>
                    Es ist mir ein Herzensanliegen, dass Sie sich in dieser schweren Zeit gut aufgehoben fühlen. Wir begleiten Sie mit Würde, Mitgefühl und dem tiefen Respekt vor der Einzigartigkeit jedes Lebens.
                  </p>
                </div>
              </div>
              <div className="rounded-lg  p-8">
                <div className="text-center space-y-4">
                  <img 
                    src="/Jill_Portrait.jpeg" 
                    alt="Portrait" 
                    className="w-64 h-80 object-contain rounded-lg shadow-lg mx-auto"
                  />
                  <img
                    src="/Unterschrift.png"
                    alt="Unterschrift"
                    className="w-64 h-20 object-contain mx-auto filter brightness-0 opacity-80"
                  />
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
              Wir glauben daran, dass Begleitung mehr bedeutet als Organisation.
              Es geht um Nähe, Zuhören und den behutsamen Umgang mit dem, was bleibt.
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

      </div>
    </div>
  );
};
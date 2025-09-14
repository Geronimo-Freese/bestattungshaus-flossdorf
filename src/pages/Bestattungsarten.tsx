import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Mountain, Waves, TreePine, Cross, Heart, MapPin, Clock, Euro } from "lucide-react";
import { Link } from "react-router-dom";

export const Bestattungsarten = () => {
  const burialTypes = [
    {
      id: "erdbestattung",
      icon: Cross,
      title: "Erdbestattung",
      subtitle: "Traditionelle Beisetzung im Sarg",
      description: "Die klassische Form der Bestattung auf dem Friedhof in einem Sarg.",
      duration: "Ruhezeit: 20-30 Jahre",
      price: "ab 2.500€",
      features: [
        "Dauerhafte Gedenkstätte fuer Angehörige",
        "Individuelle Grabgestaltung",
        "Traditionelle Trauerfeier",
        "Langfristige Grabpflege möglich"
      ],
      process: [
        "Aufbahrung und Abschiednahme (optional)",
        "Trauerfeier in Kapelle oder Kirche", 
        "Beisetzung am Grab",
        "Grabpflege durch Angehörige oder Friedhofsgärtner"
      ]
    },
    {
      id: "feuerbestattung",
      icon: Heart,
      title: "Feuerbestattung",
      subtitle: "Einäscherung mit vielfältigen Optionen",
      description: "Nach der Einäscherung verschiedene Beisetzungsmöglichkeiten für die Urne.",
      duration: "Ruhezeit: 15-25 Jahre",
      price: "ab 1.800€",
      features: [
        "Urnengrab auf dem Friedhof",
        "Kolumbarium (Urnenwand)",
        "Anonyme Beisetzung möglich",
        "Platzsparend und pflegeleicht"
      ],
      process: [
        "Aufbahrung vor der Einäscherung",
        "Trauerfeier vor oder nach Einäscherung",
        "Einäscherung im Krematorium",
        "Beisetzung der Urne nach Wunsch"
      ]
    },
    {
      id: "seebestattung",
      icon: Waves,
      title: "Seebestattung",
      subtitle: "Beisetzung in Nord- oder Ostsee",
      description: "Die Urne wird in speziellen Seegebieten der Nord- oder Ostsee beigesetzt.",
      duration: "Ewige Ruhe im Meer",
      price: "ab 3.200€",
      features: [
        "Stille oder begleitete Seebestattung",
        "GPS-Koordinaten der Beisetzungsstelle",
        "Urkunde über die Seebestattung",
        "Keine Grabpflege erforderlich"
      ],
      process: [
        "Einäscherung in Deutschland",
        "Transport zu einer staatlich zugelassenen Reederei",
        "Fahrt zum einem zugelassenen Beisetzungsgebiet (Seefriedhof)",
        "Feierliche Übergabe an das Meer (bis zu 20 Angehörige)"
      ]
    },
    {
      id: "naturbestattung",
      icon: TreePine,
      title: "Naturbestattung",
      subtitle: "Ruhe in der freien Natur",
      description: "Die Urne wird in einem Friedwald oder Ruheforst beigesetzt.",
      duration: "Ruhezeit: 99 Jahre",
      price: "ab 2.800€",
      features: [
        "Beisetzung an einem Baum",
        "Natürliche Grabstätte im Wald",
        "Familien- oder Einzelgräber",
        "Naturschutz durch Bestattung"
      ],
      process: [
        "Auswahl des Friedwaldes",
        "Baumauswahl vor Ort",
        "Trauerfeier im Wald möglich",
        "Beisetzung an den Wurzeln"
      ]
    }
  ];

  const cemeteries = [
    {
      name: "Hauptfriedhof Musterstadt",
      type: "Städtischer Friedhof",
      features: ["Parkähnliche Anlage", "Kapelle vorhanden", "Gute Verkehrsanbindung"],
      distance: "2 km"
    },
    {
      name: "Waldfriedhof Grünberg", 
      type: "Naturnaher Friedhof",
      features: ["Ruhige Waldlage", "Naturbestattungen", "Moderne Kolumbarien"],
      distance: "8 km"
    },
    {
      name: "St. Marien Kirchhof",
      type: "Konfessioneller Friedhof", 
      features: ["Historische Kapelle", "Traditionelle Gräber", "Zentrale Lage"],
      distance: "1.5 km"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Bestattungsarten & Friedhöfe
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Jeder Abschied ist einzigartig. Entdecken Sie die verschiedenen Möglichkeiten 
            und finden Sie die Form, die den Wünschen und der Persönlichkeit des Verstorbenen entspricht.
          </p>
        </div>

        <Tabs defaultValue="arten" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="arten">Bestattungsarten</TabsTrigger>
            <TabsTrigger value="friedhoefe">Friedhöfe</TabsTrigger>
          </TabsList>

          <TabsContent value="arten" className="space-y-8">
            <div className="grid gap-8">
              {burialTypes.map((type) => (
                <Card key={type.id} className="shadow-soft hover:shadow-elegant transition-elegant">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <type.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="font-serif text-2xl mb-1">{type.title}</CardTitle>
                          <CardDescription className="text-lg">{type.subtitle}</CardDescription>
                          <p className="text-muted-foreground mt-2">{type.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">
                          <Euro className="h-3 w-3 mr-1" />
                          {type.price}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 inline mr-1" />
                          {type.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Merkmale & Vorteile</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Ablauf</h4>
                        <ol className="space-y-2">
                          {type.process.map((step, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">
                                {index + 1}
                              </span>
                              <span className="text-muted-foreground text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button asChild>
                        <Link to="/kostenrechner">
                          Kosten berechnen
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="friedhoefe" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cemeteries.map((cemetery, index) => (
                <Card key={index} className="shadow-soft hover:shadow-elegant transition-elegant">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-lg">{cemetery.name}</CardTitle>
                        <CardDescription>{cemetery.type}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {cemetery.distance}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {cemetery.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <Heart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full">
                      Details ansehen
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Friedhofsgebühren</CardTitle>
                <CardDescription>
                  Die Friedhofsgebühren variieren je nach Friedhof, Grabart und Liegezeit. 
                  Wir beraten Sie gerne über alle anfallenden Kosten.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Reihengrab</h4>
                    <p className="text-2xl font-bold text-primary">450-800€</p>
                    <p className="text-sm text-muted-foreground">20 Jahre Nutzung</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Wahlgrab</h4>
                    <p className="text-2xl font-bold text-primary">1200-2500€</p>
                    <p className="text-sm text-muted-foreground">30 Jahre Nutzung</p>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg">
                    <h4 className="font-semibold mb-2">Urnengrab</h4>
                    <p className="text-2xl font-bold text-primary">350-600€</p>
                    <p className="text-sm text-muted-foreground">15 Jahre Nutzung</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="shadow-elegant">
            <CardContent className="py-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Persönliche Beratung gewünscht?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Gerne besprechen wir mit Ihnen alle Möglichkeiten in einem persönlichen Gespräch 
                und finden gemeinsam die passende Lösung für Ihre individuellen Wünsche.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">
                    Beratungstermin vereinbaren
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/kostenrechner">
                    Kostenrechner nutzen
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
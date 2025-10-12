import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Calculator, Euro, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { EMERGENCY_PHONE } from "@/config/constants";

export const Kostenrechner = () => {
  const [calculation, setCalculation] = useState({
    burialType: "",
    cemetery: "",
    coffin: "",
    ceremony: "",
    flowers: false,
    obituary: false,
    catering: false,
    music: false
  });

  const prices = {
    burial: {
      erdbestattung: 2500,
      feuerbestattung: 1800,
      seebestattung: 3200,
      naturbestattung: 2800
    },
    cemetery: {
      hauptfriedhof: 600,
      waldfriedhof: 800,
      kirchhof: 700
    },
    coffin: {
      einfach: 400,
      mittel: 800,
      hochwertig: 1500,
      urne_einfach: 150,
      urne_mittel: 300,
      urne_hochwertig: 600
    },
    ceremony: {
      klein: 200,
      mittel: 500,
      gross: 1000
    },
    extras: {
      flowers: 150,
      obituary: 250,
      catering: 400,
      music: 200
    }
  };

  const calculateTotal = () => {
    let total = 0;
    
    if (calculation.burialType) {
      total += prices.burial[calculation.burialType as keyof typeof prices.burial] || 0;
    }
    if (calculation.cemetery) {
      total += prices.cemetery[calculation.cemetery as keyof typeof prices.cemetery] || 0;
    }
    if (calculation.coffin) {
      total += prices.coffin[calculation.coffin as keyof typeof prices.coffin] || 0;
    }
    if (calculation.ceremony) {
      total += prices.ceremony[calculation.ceremony as keyof typeof prices.ceremony] || 0;
    }
    
    if (calculation.flowers) total += prices.extras.flowers;
    if (calculation.obituary) total += prices.extras.obituary;
    if (calculation.catering) total += prices.extras.catering;
    if (calculation.music) total += prices.extras.music;
    
    return total;
  };

  const getCoffinOptions = () => {
    if (calculation.burialType === "erdbestattung") {
      return [
        { value: "einfach", label: "Einfacher Sarg (400€)" },
        { value: "mittel", label: "Mittlerer Sarg (800€)" },
        { value: "hochwertig", label: "Hochwertiger Sarg (1.500€)" }
      ];
    } else if (["feuerbestattung", "seebestattung", "naturbestattung"].includes(calculation.burialType)) {
      return [
        { value: "urne_einfach", label: "Einfache Urne (150€)" },
        { value: "urne_mittel", label: "Mittlere Urne (300€)" },
        { value: "urne_hochwertig", label: "Hochwertige Urne (600€)" }
      ];
    }
    return [];
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Kostenrechner
          </h1>
          <div className="space-y-4">
            <p className="text-xl font-medium text-primary max-w-2xl mx-auto">
              Alle unsere Leistungen unterliegen einer <b>Festpreisgarantie</b>
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Das bedeutet für Sie: keine versteckten Kosten, keine unübersichtlichen Gebühren, sondern faire und nachvollziehbare Angebote, auf die Sie sich verlassen können. Jeder Schritt, den wir gemeinsam gehen, wird Ihnen offen dargelegt – damit Sie jederzeit wissen, woran Sie sind.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Configuration */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Bestattungsart</CardTitle>
                <CardDescription>Wählen Sie die gewünschte Art der Bestattung</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={calculation.burialType} onValueChange={(value) => 
                  setCalculation({...calculation, burialType: value, coffin: ""})
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Bestattungsart auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="erdbestattung">Erdbestattung (ab 2.500€)</SelectItem>
                    <SelectItem value="feuerbestattung">Feuerbestattung (ab 1.800€)</SelectItem>
                    <SelectItem value="seebestattung">Seebestattung (ab 3.200€)</SelectItem>
                    <SelectItem value="naturbestattung">Naturbestattung (ab 2.800€)</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>


            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Sarg / Urne</CardTitle>
                <CardDescription>Auswahl abhängig von der Bestattungsart</CardDescription>
              </CardHeader>
              <CardContent>
                <Select 
                  value={calculation.coffin} 
                  onValueChange={(value) => setCalculation({...calculation, coffin: value})}
                  disabled={!calculation.burialType}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sarg/Urne auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {getCoffinOptions().map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Trauerfeier</CardTitle>
                <CardDescription>Umfang der Trauerfeier</CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={calculation.ceremony} onValueChange={(value) => 
                  setCalculation({...calculation, ceremony: value})
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Trauerfeier auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="klein">Kleine Feier (bis 20 Personen) - 200€</SelectItem>
                    <SelectItem value="mittel">Mittlere Feier (bis 50 Personen) - 500€</SelectItem>
                    <SelectItem value="gross">Große Feier (über 50 Personen) - 1.000€</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Zusätzliche Leistungen</CardTitle>
                <CardDescription>Optionale Extras für die Bestattung</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="flowers"
                    checked={calculation.flowers}
                    onCheckedChange={(checked) => 
                      setCalculation({...calculation, flowers: checked as boolean})
                    }
                  />
                  <Label htmlFor="flowers">Blumenschmuck und Kränze (+150€)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="obituary"
                    checked={calculation.obituary}
                    onCheckedChange={(checked) => 
                      setCalculation({...calculation, obituary: checked as boolean})
                    }
                  />
                  <Label htmlFor="obituary">Traueranzeige in Zeitung (+250€)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="catering"
                    checked={calculation.catering}
                    onCheckedChange={(checked) => 
                      setCalculation({...calculation, catering: checked as boolean})
                    }
                  />
                  <Label htmlFor="catering">Catering nach der Feier (+400€)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="music"
                    checked={calculation.music}
                    onCheckedChange={(checked) => 
                      setCalculation({...calculation, music: checked as boolean})
                    }
                  />
                  <Label htmlFor="music">Musikalische Begleitung (+200€)</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <Card className="shadow-elegant sticky top-20">
              <CardHeader>
                <CardTitle className="font-serif text-xl flex items-center">
                  <Euro className="h-5 w-5 mr-2" />
                  Kostenschätzung
                </CardTitle>
                <CardDescription>Unverbindliche Richtwerte</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Kostenschätzung */}
                <div className="space-y-4">
                  {calculation.burialType && (
                    <div className="flex justify-between">
                      <span>Bestattungsart</span>
                      <span className="font-semibold">
                        {prices.burial[calculation.burialType as keyof typeof prices.burial]}€
                      </span>
                    </div>
                  )}
                  
                  {calculation.cemetery && (
                    <div className="flex justify-between">
                      <span>Friedhofsgebühren</span>
                      <span className="font-semibold">
                        {prices.cemetery[calculation.cemetery as keyof typeof prices.cemetery]}€
                      </span>
                    </div>
                  )}
                  
                  {calculation.coffin && (
                    <div className="flex justify-between">
                      <span>Sarg/Urne</span>
                      <span className="font-semibold">
                        {prices.coffin[calculation.coffin as keyof typeof prices.coffin]}€
                      </span>
                    </div>
                  )}
                  
                  {calculation.ceremony && (
                    <div className="flex justify-between">
                      <span>Trauerfeier</span>
                      <span className="font-semibold">
                        {prices.ceremony[calculation.ceremony as keyof typeof prices.ceremony]}€
                      </span>
                    </div>
                  )}
                  
                  {(calculation.flowers || calculation.obituary || calculation.catering || calculation.music) && (
                    <>
                      <Separator />
                      <div className="text-sm text-muted-foreground">Zusatzleistungen:</div>
                      {calculation.flowers && (
                        <div className="flex justify-between text-sm">
                          <span>Blumenschmuck</span>
                          <span>{prices.extras.flowers}€</span>
                        </div>
                      )}
                      {calculation.obituary && (
                        <div className="flex justify-between text-sm">
                          <span>Traueranzeige</span>
                          <span>{prices.extras.obituary}€</span>
                        </div>
                      )}
                      {calculation.catering && (
                        <div className="flex justify-between text-sm">
                          <span>Catering</span>
                          <span>{prices.extras.catering}€</span>
                        </div>
                      )}
                      {calculation.music && (
                        <div className="flex justify-between text-sm">
                          <span>Musik</span>
                          <span>{prices.extras.music}€</span>
                        </div>
                      )}
                    </>
                  )}
                  
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Gesamtkosten</span>
                    <span className="text-primary">{calculateTotal()}€</span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    * Alle Preise sind Richtwerte und können je nach individuellen 
                    Anforderungen variieren. Gerne erstellen wir Ihnen ein persönliches Angebot.
                  </div>
                </div>

                {/* Unverbindliches Angebot */}
                <div className="space-y-4">
                  <Separator />
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">Unverbindliches Angebot</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Lassen Sie sich ein detailliertes, kostenloses Angebot erstellen.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full" asChild>
                        <Link to="/kontakt">
                          <FileText className="mr-2 h-4 w-4" />
                          Angebot anfordern
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`tel:${EMERGENCY_PHONE}`} className="flex items-center justify-center">
                          <Phone className="mr-2 h-4 w-4" />
                          Sofortberatung
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
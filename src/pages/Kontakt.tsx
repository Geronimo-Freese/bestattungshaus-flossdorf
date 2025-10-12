import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Heart, Send, House } from "lucide-react";
import { EMERGENCY_PHONE, ADDRESS_STREET, ADDRESS_CITY, ADDRESS_COUNTRY, EMAIL, WEEKDAYS, SATURDAY, SUNDAY } from "@/config/constants";

export const Kontakt = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSendEmail = () => {
    const { firstName, lastName, email, phone, subject, message } = formData;
    
    // E-Mail Betreff
    const emailSubject = `Kontaktanfrage: ${subject || 'Allgemeine Anfrage'}`;
    
    // E-Mail Body mit allen Informationen
    const emailBody = `Sehr geehrte Damen und Herren,

${message}

---
Kontaktdaten:
Name: ${firstName} ${lastName}
E-Mail: ${email}
Telefon: ${phone}

Mit freundlichen Grüßen
${firstName} ${lastName}`;

    // E-Mail-Link erstellen
    const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // E-Mail-App öffnen
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir sind für Sie da – rund um die Uhr. Kontaktieren Sie uns für eine 
            persönliche Beratung oder im akuten Trauerfall.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-soft order-2 lg:order-1">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Nachricht senden</CardTitle>
              <CardDescription>
                Wir melden uns schnellstmöglich bei Ihnen zurück
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Ihr Vorname" 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Ihr Nachname" 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail-Adresse</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="ihre.email@beispiel.de" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="0123 456789" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Betreff</Label>
                <Select onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Thema auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Allgemeine Beratung">Allgemeine Beratung</SelectItem>
                    <SelectItem value="Akuter Trauerfall">Akuter Trauerfall</SelectItem>
                    <SelectItem value="Bestattungsvorsorge">Bestattungsvorsorge</SelectItem>
                    <SelectItem value="Kostenanfrage">Kostenanfrage</SelectItem>
                    <SelectItem value="Terminvereinbarung">Terminvereinbarung</SelectItem>
                    <SelectItem value="Sonstiges">Sonstiges</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Ihre Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Beschreiben Sie uns Ihr Anliegen..." 
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>
              
              <Button className="w-full" size="lg" onClick={handleSendEmail}>
                <Send className="mr-2 h-5 w-5" />
                Nachricht senden
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Ihre Daten werden vertraulich behandelt und nur für die Bearbeitung 
                Ihrer Anfrage verwendet.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Emergency Contact */}
            <Card className="border-destructive bg-destructive/5 shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-destructive" />
                  <CardTitle className="text-destructive">24h Notfallnummer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-destructive mb-2">{EMERGENCY_PHONE}</p>
                  <p className="text-muted-foreground mb-4">Kostenlos aus allen Netzen</p>
                  <Button variant="destructive" size="lg" className="w-full">
                    <a href={`tel:${EMERGENCY_PHONE}`} className="flex items-center justify-center">
                      <Phone className="mr-2 h-5 w-5" />
                      Jetzt anrufen
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Regular Contact */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Geschäftszeiten & Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p className="text-muted-foreground">{EMERGENCY_PHONE}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">E-Mail</p>
                      <p className="text-muted-foreground">
                        <a href={`mailto:${EMAIL}`} className="hover:underline">
                          {EMAIL}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="text-muted-foreground">
                        {ADDRESS_STREET}<br />
                        {ADDRESS_CITY}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Öffnungszeiten</p>
                      <div className="text-muted-foreground space-y-1">
                        <p className="text-destructive font-medium">Erreichbarkeit: 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
                  
                  <div className="flex items-start space-x-3">
                    <House className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Bürozeiten</p>
                      <div className="text-muted-foreground space-y-1">
                        <p>{WEEKDAYS}</p>
                        <p>{SATURDAY}</p>
                      </div>
                    </div>
                  </div>

                
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Unser Einzugsgebiet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Wir sind in folgenden Städten und Gemeinden für Sie da:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• Musterstadt</div>
                  <div>• Beispielort</div>
                  <div>• Dorfhausen</div>
                  <div>• Testheim</div>
                  <div>• Musterdorf</div>
                  <div>• Beispielberg</div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Auch außerhalb unseres Haupteinzugsgebietes stehen wir Ihnen gerne zur Verfügung.
                </p>
              </CardContent>
            </Card>

            {/* Additional Services */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Zusätzliche Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Hausbesuche möglich</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Beratung in mehreren Sprachen (Deutsch, Englisch, Spanisch)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Abholung deutschlandweit</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Überführungen ins Ausland</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
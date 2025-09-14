# Bestattungshaus Website

Eine moderne, responsive Website für ein Bestattungshaus, entwickelt mit React, TypeScript und Tailwind CSS.

## 🚀 Technologien

- **Vite** - Build Tool und Development Server
- **React 18** - Frontend Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling Framework
- **shadcn/ui** - UI Component Library
- **React Router** - Client-side Routing

## 📋 Entwicklung

### Voraussetzungen
- Node.js (empfohlen: Version 18 oder höher)
- npm oder yarn

### Lokale Entwicklung starten

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist dann unter `http://localhost:8080` erreichbar.

### Verfügbare Scripts

```bash
npm run dev          # Development Server
npm run build        # Production Build
npm run build:dev    # Development Build
npm run preview      # Preview des Production Builds
npm run lint         # ESLint ausführen
```

## 🌐 Hosting auf All-inkl.com

### Automatisches Deployment

Für einfache Updates verwenden Sie das bereitgestellte Deployment-Script:

```bash
./deploy.sh
```

Dieses Script:
- Erstellt einen optimierten Production Build
- Generiert die notwendige `.htaccess`-Datei für React Router
- Zeigt Ihnen die nächsten Schritte an

### Manueller Upload

#### Schritt 1: Build erstellen
```bash
npm run build
```

#### Schritt 2: Dateien hochladen
1. **Loggen Sie sich in Ihr All-inkl.com Kundencenter ein**
2. **Gehen Sie zu "Webspace" → "Dateimanager"**
3. **Navigieren Sie zum `htdocs` Verzeichnis**
4. **Laden Sie ALLE Dateien aus dem `dist`-Ordner hoch:**
   - `index.html`
   - `assets/` Ordner (mit CSS und JS Dateien)
   - Alle Bilder (`background.jpg`, `logo.svg`, etc.)
   - `robots.txt`
   - `.htaccess`

#### Schritt 3: Website testen
Besuchen Sie Ihre Domain und testen Sie alle Seiten und Funktionen.

### Wichtige Dateien

- **`.htaccess`** - Ermöglicht korrektes Routing für React Router
- **`robots.txt`** - SEO-Konfiguration
- **`favicon.ico`** - Website-Icon

### 🔧 Zusätzliche Konfiguration

#### SSL-Zertifikat aktivieren
- Gehen Sie zu Ihrem All-inkl.com Kundencenter
- Aktivieren Sie HTTPS für Ihre Domain

#### Performance-Optimierung
Die Website ist bereits optimiert mit:
- Code-Splitting durch Vite
- Gzip-Kompression
- Optimierte Asset-Dateien

### 🚨 Wichtige Hinweise

- **Alle Dateien** müssen im `htdocs` Verzeichnis landen
- Die **`.htaccess`-Datei** ist essentiell für das korrekte Routing
- **Testen Sie alle Seiten** nach dem Upload
- **Erstellen Sie regelmäßig Backups** Ihrer Website-Dateien

### 🔄 Updates durchführen

1. Führen Sie Änderungen am Code durch
2. Führen Sie `./deploy.sh` aus
3. Laden Sie die neuen Dateien aus dem `dist`-Ordner hoch
4. Testen Sie die Website

## 📁 Projektstruktur

```
src/
├── components/          # Wiederverwendbare Komponenten
│   ├── ui/             # shadcn/ui Komponenten
│   ├── Layout.tsx      # Hauptlayout
│   ├── Navigation.tsx  # Navigation
│   └── Footer.tsx      # Footer
├── pages/              # Seiten-Komponenten
│   ├── Homepage.tsx    # Startseite
│   ├── Kontakt.tsx     # Kontaktseite
│   ├── Bestattungsarten.tsx
│   ├── Kostenrechner.tsx
│   └── ...
├── config/             # Konfigurationsdateien
├── hooks/              # Custom React Hooks
└── lib/                # Utility-Funktionen
```

## 🆘 Support

Bei Problemen mit dem Hosting oder der Website:
1. Überprüfen Sie die Browser-Konsole auf Fehler
2. Stellen Sie sicher, dass alle Dateien korrekt hochgeladen wurden
3. Prüfen Sie die `.htaccess`-Datei im `htdocs` Verzeichnis

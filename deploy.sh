#!/bin/bash

# Deployment Script für All-inkl.com
# Verwendung: ./deploy.sh

echo "🚀 Starte Deployment für All-inkl.com..."

# Build der Website
echo "📦 Erstelle Production Build..."
npm run build

# Prüfe ob Build erfolgreich war
if [ ! -d "dist" ]; then
    echo "❌ Build fehlgeschlagen!"
    exit 1
fi

echo "✅ Build erfolgreich erstellt!"

# Erstelle .htaccess falls nicht vorhanden
if [ ! -f "dist/.htaccess" ]; then
    echo "📝 Erstelle .htaccess für React Router..."
    cat > dist/.htaccess << 'EOF'
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
EOF
fi

echo "📁 Dateien bereit für Upload:"
echo "   - Alle Dateien im 'dist' Ordner hochladen"
echo "   - Zielverzeichnis: htdocs/"
echo ""
echo "🔧 Nächste Schritte:"
echo "   1. Loggen Sie sich in Ihr All-inkl.com Kundencenter ein"
echo "   2. Gehen Sie zu 'Webspace' → 'Dateimanager'"
echo "   3. Laden Sie den Inhalt des 'dist' Ordners in 'htdocs' hoch"
echo "   4. Testen Sie Ihre Website"
echo ""
echo "✨ Deployment vorbereitet!"

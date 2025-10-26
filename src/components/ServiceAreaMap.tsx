import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix für Leaflet Marker Icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface ServiceAreaMapProps {
  className?: string;
}

// Komponente zum Anpassen der Kartenansicht
const MapBounds = ({ geoJsonData }: { geoJsonData: any }) => {
  const map = useMap();
  
  useEffect(() => {
    if (geoJsonData) {
      const geoJsonLayer = L.geoJSON(geoJsonData);
      const bounds = geoJsonLayer.getBounds();
      map.fitBounds(bounds, { padding: [20, 20] });
    }
  }, [map, geoJsonData]);
  
  return null;
};

export const ServiceAreaMap = ({ className = "" }: ServiceAreaMapProps) => {
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGeoJsonData = async () => {
      try {
        const response = await fetch('/landkreise_simplify200.geojson');
        if (!response.ok) {
          throw new Error('Failed to load GeoJSON data');
        }
        const data = await response.json();
        setGeoJsonData(data);
      } catch (err) {
        console.error('Error loading GeoJSON:', err);
        setError('Fehler beim Laden der Kartendaten');
      } finally {
        setLoading(false);
      }
    };

    loadGeoJsonData();
  }, []);

  // Styling für die GeoJSON Features
  const getFeatureStyle = (feature: any) => {
    const isWetteraukreis = feature.properties.SN_K === '40';
    const isLandkreisGiessen = feature.properties.SN_K === '31';
    
    return {
      fillColor: isWetteraukreis ? '#3b82f6' : isLandkreisGiessen ? '#10b981' : '#e5e7eb',
      weight: 1.5,
      opacity: 1,
      color: isWetteraukreis ? '#1d4ed8' : isLandkreisGiessen ? '#059669' : '#9ca3af',
      dashArray: '',
      fillOpacity: 0.25,
    };
  };

  // Event Handler für Hover-Effekte
  const onEachFeature = (feature: any, layer: L.Layer) => {
    const municipalityName = feature.properties.GEN;
    const district = feature.properties.SN_K === '40' ? 'Wetteraukreis' : 'Landkreis Gießen';
    
    // Popup mit Informationen
    layer.bindPopup(`
      <div class="p-2">
        <h3 class="font-semibold text-sm">${municipalityName}</h3>
        <p class="text-xs text-gray-600">${district}</p>
      </div>
    `);

    // Hover-Effekte
    layer.on('mouseover', function (e) {
      const layer = e.target;
      layer.setStyle({
        fillOpacity: 0.5,
        weight: 2.5,
      });
    });

    layer.on('mouseout', function (e) {
      const layer = e.target;
      layer.setStyle({
        fillOpacity: 0.25,
        weight: 1.5,
      });
    });
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center h-64 bg-gray-50 rounded-lg ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-sm text-muted-foreground">Karte wird geladen...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center h-64 bg-red-50 rounded-lg ${className}`}>
        <div className="text-center">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={[50.4, 8.8]}
        zoom={9}
        style={{ height: '300px', width: '100%' }}
        className="rounded-lg shadow-sm"
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {geoJsonData && (
          <>
            <GeoJSON
              data={geoJsonData}
              style={getFeatureStyle}
              onEachFeature={onEachFeature}
            />
            <MapBounds geoJsonData={geoJsonData} />
          </>
        )}
      </MapContainer>
      
      {/* Legende */}
      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-blue-300 border border-blue-500 rounded"></div>
          <span className="text-gray-700">Wetteraukreis</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-emerald-300 border border-emerald-500 rounded"></div>
          <span className="text-gray-700">Landkreis Gießen</span>
        </div>
      </div>
    </div>
  );
};

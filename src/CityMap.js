import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Marker belgisi (icon) uchun standart sozlama
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Namuna sifatida Toshkent koordinatalari
const position = [41.311081, 69.240562];

const CityMap = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%', borderRadius: '8px' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <b>Markaziy boshqaruv nuqtasi</b> <br /> Barcha tizimlar barqaror.
        </Popup>
      </Marker>
      
      {/* Namuna uchun qo'shimcha sensor nuqtasi */}
      <Marker position={[41.32, 69.25]}>
        <Popup>
          <b>Transport Sensori #041</b> <br /> Tirbandlik: Kam.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default CityMap;
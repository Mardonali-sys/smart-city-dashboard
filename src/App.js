import CityMap from './CityMap';
import TrafficChart from './TrafficChart';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Activity, Map as MapIcon, Shield, Zap, Wind } from 'lucide-react';

function App() {
  // === MANA SHU YERGA QO'SHASIZ (Mantiqiy qism) ===
  const [aqi, setAqi] = useState(35); 

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAqi = Math.floor(Math.random() * (45 - 30 + 1)) + 30;
      setAqi(randomAqi);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="dashboard-container">
      {/* 1. Header */}
      <header className="header">
        <h2 style={{ color: 'var(--accent-color)' }}>Aqilli Shahar </h2>
        <div className="status">Tizim holati: <span style={{ color: '#22c55e' }}>● Online</span></div>
      </header>

      {/* 2. Sidebar */}
      <aside className="sidebar">
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapIcon size={20} /> Monitoring Xaritasi
            </li>
            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Zap size={20} /> Energy Istemoli
            </li>
            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Wind size={20} /> Havo Sifati (AQI)
            </li>
            <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Shield size={20} /> Xavfsizlik Kameralari
            </li>
          </ul>
        </nav>
      </aside>

      {/* 3. Main Content */}
      <main className="main-content">
        {/* Chap taraf: Xarita uchun joy */}
        <div className="card" style={{ gridRow: 'span 2' }}>  
          <h3>Shahar Xaritasi</h3>
          <div className="map-placeholder" style={{ border: 'none' }}>
           <CityMap />
          </div>
        </div>

        {/* O'ng taraf: Kichik grafiklar */}
        <div className="card">
           <h3 className="card-title">
          <Activity size={18} /> Transport oqimi (Oxirgi 12 soat)
           </h3>
          <div style={{ height: '150px' }}>
           <TrafficChart />
          </div>
         <p className="card-note" style={{ marginTop: '10px' }}>
          Eng yuqori tirbandlik: 18:00 da kuzatildi.
         </p>
       </div>

        <div className="card">
          <h3><Wind size={18} /> Havo Sifati</h3>
          <p style={{ color: '#22c55e' }}>Yaxshi (35 AQI)</p>
        </div>
      </main>
    </div>
  );
}

export default App;
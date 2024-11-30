// src/components/Tabs.jsx
import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  // Datos de las pestañas (tab title y content)
  const tabs = [
    { title: 'Tab 1', content: 'Este es el contenido del Tab 1' },
    { title: 'Tab 2', content: 'Este es el contenido del Tab 2' },
    { title: 'Tab 3', content: 'Este es el contenido del Tab 3' },
  ];

  return (
    <div className="tabs">
      {/* Pestañas de título */}
      <div className="tab-titles">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}  // Cambia la pestaña activa
            className={`tab-button ${index === activeTab ? 'active' : ''}`}  // Aplica la clase 'active' a la pestaña activa
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

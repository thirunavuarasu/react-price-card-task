// src/App.jsx
import React from 'react';
import PriceCard from './PriceCard';
import { priceCardsData } from './Data'; // Ensure this matches the filename and path
import './App.css'; // Optional: Add your CSS file for styling

const App = () => {
  return (
    <div className="price-card-container">
      {priceCardsData.map((card, index) => (
        <PriceCard
          key={index}
          title={card.title}
          price={card.price}
          features={card.features}
        />
      ))}
    </div>
  );
};

export default App;

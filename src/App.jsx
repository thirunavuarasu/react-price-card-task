
import React from 'react';
import PriceCard from './PriceCard';
import { priceCardsData } from './data'; // Ensure the file name matches
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

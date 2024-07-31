
import React from 'react';
import './PriceCard.css'; // Optional: Add your CSS file for styling

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="price-card-title">{title}</h2>
      <p className="price-card-price">{price}</p>
      <ul className="price-card-features">
        {features.map((feature, index) => (
          <li key={index} className={feature.isIncluded ? 'included' : 'not-included'}>
            {feature.text}
          </li>
        ))}
      </ul>
      <button className="price-card-button"> Button</button>
    </div>
  );
};

export default PriceCard;

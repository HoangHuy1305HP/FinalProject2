import React, { useState } from 'react';
import './SearchResult.css';
import Data3 from '../../Data3'
import Review from '../Review/Review'
const SearchResult = () => {
  const [cars, setCars] = useState(Data3);

  return (
    <div className="search-result">
      {cars.map(car => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} className="car-image" />
          <div className="car-info">
            <h3>{car.name}</h3>
            <p className="car-price">{car.price} {car.oldPrice && <span className="old-price">{car.oldPrice}</span>}</p>
            <p>{car.place}</p>
            <p>{car.year} • {car.style}</p>
            <p>{car.energy} • {car.seat} seats</p>
            <Review></Review>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
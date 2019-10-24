import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Car from '../Car';
import carData from '../../Data/datas.json';
import './App.css';

function App() {
  return (
    <div className="App">
      {carData.map(car => (
        car.isActive ? (
          <Car
            key={car._id}
            brand={car.brand}
            energy={car.energy}
            extColor={car.extColor}
            milleage={car.milleage}
            model={car.model}
            picture={car.picture}
            price={car.price}
            vehicleTransmission={car.vehicleTransmission}
          />
        ) : null)
      )
    }
    </div>
  );
}

export default App;

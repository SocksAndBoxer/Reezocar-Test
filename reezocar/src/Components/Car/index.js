import React from 'react';
import './Car.css'

const Car = (props) => {
  const {
      id,
      age,
      brand,
      energy,
      extColor,
      isActive,
      milleage,
      model,
      picture,
      price,
      vehicleTransmission
    } = props;

  return (
    <div className="car">
      <img src={picture} alt="a car" className="picture"/>
      <div className="description">
        <h4>{model}</h4>
        <div className="informations">
            <p>{vehicleTransmission ? vehicleTransmission : "N/A"}</p>
            <p>{energy}</p>
            <p>{milleage} KM</p>
        </div>
      </div>
      <p className="price">{price} €</p>
    </div>
  );
}


export default Car;

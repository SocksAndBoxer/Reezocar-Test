import React from 'react';
import './Car.css'

const Car = (props) => {
  const {

      brand,
      energy,
      extColor,
      milleage,
      model,
      picture,
      price,
      vehicleTransmission
    } = props;

    const cleanBrand = brand.replace('_', ' ');

  return (
    <div className="car">
      <img src={picture} alt="a car" className="picture"/>
      <div className="description">
      <p className="price">{price} €</p>
        <h4 className="title">{cleanBrand} - {model} {extColor} </h4>
        <div className="informations">
            <p>{vehicleTransmission ? vehicleTransmission : "N/A"}</p>
            <p>{energy}</p>
            <p>{milleage} KM</p>
        </div>
      </div>
    </div>
  );
}


export default Car;

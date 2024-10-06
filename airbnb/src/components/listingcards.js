import React from 'react';
import './ListingCard.css';

const ListingCard = ({ property }) => {
  return (
    <div className="listing-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.type} - {property.guests} guests</p>
      <p>{property.bedrooms} bedrooms, {property.bathrooms} bathrooms</p>
      <p>${property.price} / night</p>
      <p>Rating: {property.rating}</p>
    </div>
  );
};

export default ListingCard;

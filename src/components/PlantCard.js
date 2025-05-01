import React, { useState } from "react";

function PlantCard({ plant, onDelete }) {
  const [soldOut, setSoldOut] = useState(false);

  function handleSoldOutClick() {
    setSoldOut((prev) => !prev);
  }

  function handleDeleteClick() {
    onDelete(plant.id);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button onClick={handleSoldOutClick} className={soldOut ? "sold-out" : ""}>
        {soldOut ? "Sold Out" : "In Stock"}
      </button>
      <button onClick={handleDeleteClick} className="delete-btn">❌</button>
    </li>
  );
}

export default PlantCard;

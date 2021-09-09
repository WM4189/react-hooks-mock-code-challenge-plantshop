import React from "react";
import PlantCard from "./PlantCard";

function PlantList({onPlantPrice, onPlantDelete, plantData}) {
  const plantCard = plantData.map(plant => (<PlantCard onPlantPrice={onPlantPrice} onPlantDelete={onPlantDelete} key={plant.id} plant={plant} />))
  return (
    <ul className="cards">
      {plantCard}
      </ul>
  );
}

export default PlantList;

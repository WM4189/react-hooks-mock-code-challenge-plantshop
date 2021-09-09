import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData}) {
  const plantCard = plantData.map(plant => (<PlantCard key={plant.id} plant={plant} />))
  return (
    <ul className="cards">
      {plantCard}
      </ul>
  );
}

export default PlantList;

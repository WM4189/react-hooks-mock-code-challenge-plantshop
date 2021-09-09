import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({onPlantPrice, onPlantDelete, search, setSearch, plantData,onPlantFormSubmit}) {
  return (
    <main>
      <NewPlantForm onPlantFormSubmit={onPlantFormSubmit} />
      <Search search={search} setSearch={setSearch}  />
      <PlantList onPlantPrice={onPlantPrice} onPlantDelete={onPlantDelete} plantData={plantData} />
    </main>
  );
}

export default PlantPage;

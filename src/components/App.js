import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantData, setPlantData] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setPlantData(data))
  }, [])
  // console.log(plantData)

  const filteredList = 
  plantData.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  //.sort((item1, item2) => item1.location.localeCompare(item2.location))

  function handlePlantFormSubmit(newPlant){
    setPlantData([...plantData,newPlant])
  }

  function increasePlantPrice(id, price){
    console.log(id, price)
    const updatePrice = plantData.map(plant => {
      if(plant.id === id) {
        return {...plant, price}
      } else {
        return plant
      }
    })
    setPlantData(updatePrice)
  }

function deletePlant(id){
  const updatedPlants = plantData.filter(plant => plant.id !== id)
  setPlantData(updatedPlants)
}


 
  return (
    <div className="app">
      <Header />
      <PlantPage onPlantPrice={increasePlantPrice} onPlantDelete={deletePlant} search={search} setSearch={setSearch} onPlantFormSubmit={handlePlantFormSubmit} plantData={filteredList} />
    </div>
  );
}

export default App;

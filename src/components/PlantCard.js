import React, {useState} from "react";

function PlantCard({onPlantPrice, onPlantDelete, plant}) {
const [inStock, setInStock] = useState(true)
const [plantPrice, setPlantPrice] = useState(plant.price)

function handleDelete(){
  fetch(`http://localhost:6001/plants/${plant.id}`,{
    method:'DELETE'
  })
  onPlantDelete(plant.id)
}

function handlePrice(){
  setPlantPrice(parseInt(plantPrice+1))

  fetch(`http://localhost:6001/plants/${plant.id}`,{
    method:"PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({"price" : plantPrice})
  })
  .then(r => r.json())
  .then(data => onPlantPrice(data.id, data.price))
}

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price:{plantPrice}<button onClick={handlePrice}>Increase Price $1</button></p> 
      {inStock ? (
        <button onClick={() => setInStock(inStock => !inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(inStock => !inStock)}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}

export default PlantCard;

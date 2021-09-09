import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({onPlantFormSubmit}) {
  const [name, setPlantName] = useState("")
  const [image, setPlantImage] = useState("")
  const [price, setPlantPrice] = useState("")
  function handleSubmit(e){
    e.preventDefault()
    const newPlant = {
      id: uuid(),
      name,
      image,
      price
    }
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(data => onPlantFormSubmit(data) )
    // onPlantFormSubmit(newPlant)
    setPlantName("")
    setPlantImage("")
    setPlantPrice("")
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=> setPlantName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input value={image} onChange={(e) => setPlantImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input value={price} onChange={(e => setPlantPrice(e.target.value) )} type="number" name="price" step="0.01" placeholder="Price" />
        <button onClick={handleSubmit} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

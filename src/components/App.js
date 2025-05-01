import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from backend
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  // Add new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Delete plant
  function handleDeletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    }).then(() => {
      setPlants((prev) => prev.filter((plant) => plant.id !== id));
    });
  }

  // Filtered list based on search term
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🌿 Plantsy Admin Dashboard</h1>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <PlantList plants={displayedPlants} onDelete={handleDeletePlant} />
    </div>
  );
}

export default App;

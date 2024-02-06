import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType = "fish";

  const fishSpecificFields = {
    isBioluminiscent: '',
    canDischargeElectricity: ''
  };

  useEffect(() => {
    getAllItems(animalType, setFishes)
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAnimals = fishes.filter((fish) =>
  fish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Fishes</h1>
      </div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-bar"
      />
      <button onClick={() => setShowForm(true)}>Add Fish</button>
                {showForm && (
                  <AddAnimalForm
                    animalType={animalType}
                    specificFields={fishSpecificFields}
                    animals={fishes}
                    setAnimals={setFishes}
                  />
                )}
      <div className="animal-row">
        {filteredAnimals.map(fish => (
          <Listbox key={fish.id} animal={fish} animals={fishes} setAnimals={setFishes} animalType={animalType}/>
        ))}
      </div>
    </div>
  );
}

export default Fishes;

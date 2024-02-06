import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";

const Mammals = () => {
  const [mammals, setMammals] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType="mammals";

  const mammalSpecificFields = {
    hasFur: '',
    hasFins: '',
    hasHooves: ''
  };

  useEffect(() => {
    getAllItems(animalType, setMammals)
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAnimals = mammals.filter((mammal) =>
  mammal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Mammals</h1>
      </div>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-bar"
      />

      <button onClick={() => setShowForm(true)}>Add Mammal</button>
                {showForm && (
                  <AddAnimalForm
                    animalType={animalType}
                    specificFields={mammalSpecificFields}
                    animals={mammals}
                    setAnimals={setMammals}
                  />
                )}

      <div className="animal-row">
        {filteredAnimals.map(mammal => (
          <Listbox key={mammal.id} animal={mammal} animals={mammals} setAnimals={setMammals} animalType={animalType}/>
        ))}
      </div>
    </div>
  );
}

export default Mammals;

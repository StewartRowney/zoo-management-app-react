import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";

const Insects = () => {
  const [insects, setInsects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType = 'insects';

  const insectSpecificFields = {
    hasWings: '',
    numberOfLegs: 0
  };

  useEffect(() => {
    getAllItems(animalType)
    .then(fetchedItems => {
      if (fetchedItems)
        setInsects(fetchedItems);
      else
        console.error("Unexpected result returned from getInsects: ", fetchedItems);
  })
  .catch(e => {console.error("Error calling getInsects: ", e)}); 
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAnimals = insects.filter((insect) =>
  insect.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Insects</h1>
      </div>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-bar"
      />
      <button onClick={() => setShowForm(true)}>Add Insects</button>
          {showForm && (
            <AddAnimalForm
              animalType={animalType}
              specificFields={insectSpecificFields}
              setAnimals={setInsects}
              animals={insects}
            />
          )}
      <div className="animal-row">
        {filteredAnimals.map(insect => (
          <Listbox key={insect.id} animal={insect} animals={insects} setAnimals={setInsects} animalType={animalType}/>
        ))}
      </div>
    </div>
  );
}

export default Insects;

import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";

const Insects = () => {
  const [insects, setInsects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const animalType = 'insects';

  const insectSpecificFields = {
    hasWings: '',
    numberOfLegs: 0
  };

  useEffect(() => {
    getAllItems(animalType, setInsects)
  }, []);

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Insects</h1>
      </div>
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
        {insects.map(insect => (
          <Listbox key={insect.id} animal={insect} animals={insects} setAnimals={setInsects} animalType={animalType}/>
        ))}
      </div>
    </div>
  );
}

export default Insects;

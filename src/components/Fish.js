import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const animalType = "fish";

  const fishSpecificFields = {
    isBioluminiscent: '',
    canDischargeElectricity: ''
  };


  useEffect(() => {
    getAllItems(animalType)
    .then(fetchedItems => {
      if (fetchedItems)
        setFishes(fetchedItems);
      else
        console.error("Unexpected result returned from getFish: ", fetchedItems);
  })
  .catch(e => {console.error("Error calling getFish: ", e)}); 
  }, []);

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Fishes</h1>
      </div>
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
        {fishes.map(fish => (
          <Listbox key={fish.id} animal={fish} animals={fishes} setAnimals={setFishes} animalType={animalType}/>
        ))}
      </div>
    </div>
  );
}

export default Fishes;

import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import ActionBar from "./ActionBar";
import getAllItems from "../apis/getApis";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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



  const filteredAnimals = fishes.filter((fish) =>
  fish.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Fishes</h1>
      </div>
      <ActionBar
        animalType={animalType}
        specificFields={fishSpecificFields}
        animals={fishes}
        setAnimals={setFishes}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
      <div className="animal-row">
        {filteredAnimals.map(fish => (
          <Listbox key={fish.id} animal={fish} animals={fishes} setAnimals={setFishes} animalType={animalType} specificFields={fishSpecificFields}/>
        ))}
      </div>
    </div>
  );
}

export default Fishes;

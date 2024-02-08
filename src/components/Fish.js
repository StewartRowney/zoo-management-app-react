import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import ActionBar from "./ActionBar";
import getAllItems from "../apis/getApis";

export const fishSpecificFields = {
  isBioluminiscent: '',
  canDischargeElectricity: ''
};

const Fishes = () => {
  const [fishes, setFishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType = "fish";
  const [isBioluminiscentF, setIsBioluminiscentF] = useState(false);
  const [canDischargeElectricityF, setCanDischargeElectricityF] = useState(false);

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
      .catch(e => { console.error("Error calling getFish: ", e) });
  }, []);



  const filteredAnimals = fishes.filter((fish) =>
    fish.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
    .filter((fish) => !isBioluminiscentF || fish.isBioluminiscent)
    .filter((fish) => !canDischargeElectricityF || fish.canDischargeElectricity);

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

      <div className="filter-container">
        <p>
          <strong>Filter Search: </strong>
        </p>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isBioluminiscentF}
            onChange={() => setIsBioluminiscentF(!isBioluminiscentF)}
          />
          Is Bioluminiscent
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={canDischargeElectricityF}
            onChange={() => setCanDischargeElectricityF(!canDischargeElectricityF)}
          />
          Can Discharge Electricity
        </label>
      </div>

      <div className="animal-row">
        {filteredAnimals.map(fish => (
          <Listbox key={fish.id} animal={fish} animals={fishes} setAnimals={setFishes} animalType={animalType} specificFields={fishSpecificFields} />
        ))}
      </div>
    </div>
  );
}

export default Fishes;

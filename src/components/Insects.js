import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import ActionBar from "./ActionBar";
import getAllItems from "../apis/getApis";

export const insectSpecificFields = {
  hasWings: '',
  numberOfLegs: 0
};

const Insects = () => {
  const [insects, setInsects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType = 'insects';
  const [hasWingsF, setHasWingsF] = useState(false);

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
      .catch(e => { console.error("Error calling getInsects: ", e) });
  }, []);


  const filteredAnimals = insects.filter((insect) =>
    insect.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
    .filter((insect) => !hasWingsF || insect.hasWings);;


  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Insects</h1>
      </div>

      <ActionBar
        animalType={animalType}
        specificFields={insectSpecificFields}
        animals={insects}
        setAnimals={setInsects}
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
            checked={hasWingsF}
            onChange={() => setHasWingsF(!hasWingsF)}
          />
          Has Wings
        </label>
      </div>
      <div className="animal-row">
        {filteredAnimals.map(insect => (
          <Listbox key={insect.id} animal={insect} animals={insects} setAnimals={setInsects} animalType={animalType} specificFields={insectSpecificFields} />
        ))}
      </div>
    </div>
  );
}

export default Insects;

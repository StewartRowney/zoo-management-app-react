import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import getAllItems from "../apis/getApis";
import ActionBar from "./ActionBar";

export const birdSpecificFields = {
  canMimicSound: '',
  isNocturnal: '',
  canFly: ''
};


const Birds = () => {
  const [birds, setBirds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType = 'birds'
  const [canMimicSoundF, setcanMimicSoundF] = useState(false);
  const [isNocturnalF, setisNocturnalF] = useState(false);
  const [canFlyF, setcanFlyF] = useState(false);


  useEffect(() => {
    getAllItems(animalType)
      .then(fetchedItems => {
        if (fetchedItems)
          setBirds(fetchedItems);
        else
          console.error("Unexpected result returned from getBirds: ", fetchedItems);
      })
      .catch(e => { console.error("Error calling getBirds: ", e) });
  }, []);

  const filteredAnimals = birds.filter((bird) =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
    .filter((bird) => !canMimicSoundF || bird.canMimicSound)
    .filter((bird) => !isNocturnalF || bird.isNocturnal)
    .filter((bird) => !canFlyF || bird.canFly);

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Birds</h1>
      </div>
      <ActionBar
        animalType={animalType}
        specificFields={birdSpecificFields}
        animals={birds}
        setAnimals={setBirds}
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
            checked={canMimicSoundF}
            onChange={() => setcanMimicSoundF(!canMimicSoundF)}
          />
          Can Mimic Sound
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isNocturnalF}
            onChange={() => setisNocturnalF(!isNocturnalF)}
          />
          Is Nocturnal
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={canFlyF}
            onChange={() => setcanFlyF(!canFlyF)}
          />
          Can Fly
        </label>
      </div>

      <div className="animal-row">
        {filteredAnimals.map(bird => (
          <Listbox key={bird.id} animal={bird} animals={birds} setAnimals={setBirds} animalType={animalType} specificFields={birdSpecificFields} />
        ))}
      </div>

    </div>
  );

};

export default Birds; 
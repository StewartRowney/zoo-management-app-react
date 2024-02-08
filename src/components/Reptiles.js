import "./Animals.css"
import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import ActionBar from "./ActionBar";
import getAllItems from "../apis/getApis";
import ZooDropdown from "./ZooDropdown";

export const reptileSpecificFields = {
  hasShell: '',
  hasLegs: '',
  isColdBlooded: ''
};

const Reptiles = () => {

  const [reptiles, setReptiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType = 'reptiles';
  const [hasShellFilter, setHasShellFilter] = useState(false);
  const [hasLegsFilter, setHasLegsFilter] = useState(false);
  const [isColdBloodedFilter, setIsColdBloodedFilter] = useState(false);


  useEffect(() => {
    getAllItems(animalType)
      .then(fetchedItems => {
        if (fetchedItems)
          setReptiles(fetchedItems);
        else
          console.error("Unexpected result returned from getReptiles: ", fetchedItems);
      })
      .catch(e => { console.error("Error calling getReptiles: ", e) });
  }, []);


  const filteredAnimals = reptiles.filter((reptile) =>
    reptile.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
    // .filter((reptile) => selectedZoo === 'All' || reptile.zoo.name === selectedZoo)
    .filter((reptile) => !hasShellFilter || reptile.hasShell)
    .filter((reptile) => !hasLegsFilter || reptile.hasLegs)
    .filter((reptile) => !isColdBloodedFilter || reptile.isColdBlooded);


  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Reptiles</h1>
      </div>
      <ActionBar
        animalType={animalType}
        specificFields={reptileSpecificFields}
        animals={reptiles}
        setAnimals={setReptiles}
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
            checked={hasShellFilter}
            onChange={() => setHasShellFilter(!hasShellFilter)}
          />
          Has Shell
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={hasLegsFilter}
            onChange={() => setHasLegsFilter(!hasLegsFilter)}
          />
          Has Legs
        </label>

        <label className="filter-label">
          <input
            type="checkbox"
            checked={isColdBloodedFilter}
            onChange={() => setIsColdBloodedFilter(!isColdBloodedFilter)}
          />
          Is Cold Blooded
        </label>
      </div>



      <div className="animal-row">
        {filteredAnimals.map(reptile => (
          <Listbox key={reptile.id} animal={reptile} animals={reptiles} setAnimals={setReptiles} animalType={animalType} specificFields={reptileSpecificFields} />))}
      </div>
    </div>
  );


}

export default Reptiles;
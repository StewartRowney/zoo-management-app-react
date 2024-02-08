import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import getAllItems from "../apis/getApis";
import ActionBar from "./ActionBar";

export const mammalSpecificFields = {
  hasFur: '',
  hasFins: '',
  hasHooves: ''
};

const Mammals = () => {
  const [mammals, setMammals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType="mammals";
  const [hasFurF, sethasFurF] = useState(false); 
  const [hasFinsF, sethasFinsF] = useState(false);
  const [hasHoovesF, sethasHoovesF] = useState(false); 



  const mammalSpecificFields = {
    hasFur: '',
    hasFins: '',
    hasHooves: ''
  };

  useEffect(() => {
    getAllItems(animalType)
    .then(fetchedItems => {
      if (fetchedItems)
        setMammals(fetchedItems);
      else
        console.error("Unexpected result returned from getMammals: ", fetchedItems);
  })
  .catch(e => {console.error("Error calling getMammals: ", e)}); 
  }, []);

  const filteredAnimals = mammals.filter((mammal) =>
  mammal.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((mammal) => !hasFurF || mammal.hasFur)
 .filter((mammal) => !hasFinsF || mammal.hasFins)
 .filter((mammal) => !hasHoovesF || mammal.hasHooves);

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Mammals</h1>
      </div>
      <ActionBar
        animalType={animalType}
        specificFields={mammalSpecificFields}
        animals={mammals}
        setAnimals={setMammals}
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
      checked={hasFurF}
      onChange={() => sethasFurF(!hasFurF)}
    />
    Has Fur
  </label>

  <label className="filter-label">
    <input
      type="checkbox"
      checked={hasFinsF}
      onChange={() => sethasFinsF(!hasFinsF)}
    />
    Has Fins
  </label>

  <label className="filter-label">
    <input
      type="checkbox"
      checked={hasHoovesF}
      onChange={() => sethasHoovesF(!hasHoovesF)}
    />
    Has Hooves
  </label>
</div>

      <div className="animal-row">
        {filteredAnimals.map(mammal => (
          <Listbox key={mammal.id} animal={mammal} animals={mammals} setAnimals={setMammals} animalType={animalType} specificFields={mammalSpecificFields}/>
        ))}
      </div>
    </div>
  );
}

export default Mammals;

import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";
import "./Animals.css";
import getAllItems from "../apis/getApis";
import ActionBar from "./ActionBar";

export const amphibiansSpecificFields = {
  isPoisonous:'',
  makesNoise: '' 
};

const Amphibians = () => {
  const [amphibians, setAmphibians] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const animalType='amphibians';
  const [isPoisonousF, setisPoisonousF] = useState(false); 
  const [makesNoiseF, setmakesNoiseF] = useState(false);


  const amphibiansSpecificFields = {
    isPoisonous:'',
    makesNoise: '' 
  };


  useEffect(() => {
    getAllItems(animalType)
    .then(fetchedItems => {
      if (fetchedItems)
        setAmphibians(fetchedItems);
      else
        console.error("Unexpected result returned from getAmphibians: ", fetchedItems);
  })
  .catch(e => {console.error("Error calling getAmphibians: ", e)}); 
  }, []);



  const filteredAnimals = amphibians.filter((amphibian) =>
    amphibian.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((amphibian) => !isPoisonousF || amphibian.isPoisonous)
 .filter((amphibian) => !makesNoiseF || amphibian.makesNoise);

  return(
    <div className="animal-background">
        <div className="animal-header">
            <h1 className="animal-h1">Amphibians</h1>
        </div>
        
        
        <ActionBar
        animalType={animalType}
        specificFields={amphibiansSpecificFields}
        animals={amphibians}
        setAnimals={setAmphibians}
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
      checked={isPoisonousF}
      onChange={() => setisPoisonousF(!isPoisonousF)}
    />
    Is Poisonous
  </label>

  <label className="filter-label">
    <input
      type="checkbox"
      checked={makesNoiseF}
      onChange={() => setmakesNoiseF(!makesNoiseF)}
    />
    Makes Noise
  </label>
</div>
        <div className="animal-row">
            {filteredAnimals.map(amphibian => (<Listbox key={amphibian.id} animal={amphibian} animals={amphibians} setAnimals={setAmphibians} animalType={animalType} specificFields={amphibiansSpecificFields}/>))}
        </div>
    </div>
  );
}

export default Amphibians;
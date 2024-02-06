import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";
import "./Animals.css";
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";
import ActionBar from "./ActionBar";


const Amphibians = () => {
  const [amphibians, setAmphibians] = useState([]);
  const animalType='amphibians'

  const amphibiansSpecificFields = {
    isPoisonous:'',
    makesNoise: '' 
  };


  useEffect(() => {
    getAllItems(animalType, setAmphibians)
  }, []);

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
        />
        <div className="animal-row">
            {amphibians.map(amphibian => (<Listbox key={amphibian.id} animal={amphibian} animals={amphibians} setAnimals={setAmphibians} animalType={animalType}/>))}
        </div>
    </div>
  );
}

export default Amphibians;
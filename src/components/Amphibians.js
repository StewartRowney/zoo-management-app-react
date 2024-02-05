import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";
import "./Animals.css";
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";


const Amphibians = () => {
  const [amphibians, setAmphibians] = useState([]);
  const [showForm, setShowForm] = useState(false);
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

        <button onClick={() => setShowForm(true)}>Add Amphibian</button>
                {showForm && (
                  <AddAnimalForm
                    animalType={animalType}
                    specificFields={amphibiansSpecificFields}
                    animals={amphibians}
                    setAnimals={setAmphibians}
                  />
                )}

        <div className="animal-row">
            {amphibians.map(amphibian => (<Listbox key={amphibian.id} animal={amphibian} animals={amphibians} setAnimals={setAmphibians} animalType={animalType}/>))}
        </div>
    </div>
  );
}

export default Amphibians;
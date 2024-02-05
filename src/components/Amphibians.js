import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";
import "./Animals.css";
import AddAnimalForm from "./AddAnimalForm";


const Amphibians = () => {
  const [amphibians, setAmphibians] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const amphibiansSpecificFields = {
    isPoisonous: '',
    makesNoise: ''
  };

  useEffect(() => {
      fetch('http://localhost:8080/amphibians')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setAmphibians(data)})
        .catch(error => console.error('Error fetching amphibians:', error));
    }, []);


  return(
    <div className="animal-background">
        <div className="animal-header">
            <h1 className="animal-h1">Amphibians</h1>
        </div>

        <button onClick={() => setShowForm(true)}>Add Amphibian</button>
                {showForm && (
                  <AddAnimalForm
                    animalType="amphibians"
                    specificFields={amphibiansSpecificFields}
                    animals={amphibians}
                    setAnimals={setAmphibians}
                  />
                )}

        <div className="animal-row">
            {amphibians.map(amphibian => (<Listbox key={amphibian.id} animal={amphibian} animals={amphibians} setAnimals={setAmphibians} animalType='amphibian'/>))}
        </div>
    </div>
  );
}

export default Amphibians;
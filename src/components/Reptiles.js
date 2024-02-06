import "./Animals.css"
import { useEffect, useState} from "react";
import Listbox from "../components/Listbox";
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";


const Reptiles = () =>{

    const [reptiles, setReptiles] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const animalType = 'reptiles';

    const reptileSpecificFields = {
      hasShell: '',
      hasLegs: '',
      isColdBlooded: ''
    };

    useEffect(() => {
      getAllItems(animalType)
      .then(fetchedItems => {
        if (fetchedItems)
          setReptiles(fetchedItems);
        else
          console.error("Unexpected result returned from getReptiles: ", fetchedItems);
    })
    .catch(e => {console.error("Error calling getReptiles: ", e)}); 
    }, []);

      return(
        <div className="animal-background">
            <div className="animal-header">
                <h1 className="animal-h1">Reptiles</h1>
            </div>

            <button onClick={() => setShowForm(true)}>Add Reptile</button>
                {showForm && (
                  <AddAnimalForm
                    animalType={animalType}
                    specificFields={reptileSpecificFields}
                    animals={reptiles}
                    setAnimals={setReptiles}
                  />
                )}
                
            <div className="animal-row">
                {reptiles.map(reptile => (
                  <Listbox key={reptile.id}  animal={reptile} animals={reptiles} setAnimals={setReptiles} animalType={animalType}/>))}
            </div>
        </div>
      );
    

}

export default Reptiles;
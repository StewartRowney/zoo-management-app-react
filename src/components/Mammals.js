import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";

const Mammals = () => {
  const [mammals, setMammals] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const animalType="mammals";

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


  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Mammals</h1>
      </div>

      <button onClick={() => setShowForm(true)}>Add Mammal</button>
                {showForm && (
                  <AddAnimalForm
                    animalType={animalType}
                    specificFields={mammalSpecificFields}
                    animals={mammals}
                    setAnimals={setMammals}
                  />
                )}

      <div className="animal-row">
        {mammals.map(mammal => (
          <Listbox key={mammal.id} animal={mammal} animals={mammals} setAnimals={setMammals} animalType={animalType}/>
        ))}
      </div>
    </div>
  );
}

export default Mammals;

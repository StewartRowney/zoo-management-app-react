import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";

const Birds = () => {
    const [birds, setBirds] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const animalType = 'birds'

    const birdSpecificFields = {
      canMimicSound: '',
      isNocturnal: '',
      canFly: ''
    };

    useEffect(() => {
      getAllItems(animalType, setBirds)
    }, []);

    const handleSearchTermChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredBirds = birds.filter((bird) =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (      
            <div className="animal-background">
                <div className="animal-header">
                    <h1 className="animal-h1">Birds</h1>
                </div>
                <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
                <button onClick={() => setShowForm(true)}>Add Bird</button>
                {showForm && (
                  <AddAnimalForm
                    animalType={animalType}
                    specificFields={birdSpecificFields}
                    animals={birds}
                    setAnimals={setBirds}
                  />
                )}
                <div className="animal-row">
                    {filteredBirds.map(bird => (
                        <Listbox key={bird.id} animal={bird} animals={birds} setAnimals={setBirds} animalType={animalType}/>
                    ))}
                </div>

            </div>
    );

};       

export default Birds; 
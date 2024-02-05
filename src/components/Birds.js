import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";

const Birds = () => {
    const [birds, setBirds] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const birdSpecificFields = {
      canMimicSound: '',
      nocturnal: ''
    };

      useEffect(() => {
        fetch('http://localhost:8080/birds')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBirds(data);
            })
            .catch(error => console.error('Error fetching birds:', error));
    }, []); //check this
    
    return (      
            <div className="animal-background">
                <div className="animal-header">
                    <h1 className="animal-h1">Birds</h1>
                </div>
                <button onClick={() => setShowForm(true)}>Add Bird</button>
                {showForm && (
                  <AddAnimalForm
                    animalType="birds"
                    specificFields={birdSpecificFields}
                    animals={birds}
                    setAnimals={setBirds}
                  />
                )}
                <div className="animal-row">
                    {birds.map(bird => (
                        <Listbox key={bird.id} animal={bird} animals={birds} setAnimals={setBirds} animalType={'birds'}/>
                    ))}
                </div>

            </div>
    );

};       

export default Birds; 
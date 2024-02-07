import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import getAllItems from "../apis/getApis";
import ActionBar from "./ActionBar";

const Birds = () => {
    const [birds, setBirds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const animalType = 'birds'

    const birdSpecificFields = {
      canMimicSound: '',
      isNocturnal: '',
      canFly: ''
    };

    useEffect(() => {
      getAllItems(animalType)
      .then(fetchedItems => {
        if (fetchedItems)
          setBirds(fetchedItems);
        else
          console.error("Unexpected result returned from getBirds: ", fetchedItems);
    })
    .catch(e => {console.error("Error calling getBirds: ", e)}); 
    }, []);

    const filteredAnimals = birds.filter((bird) =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (      
            <div className="animal-background">
                <div className="animal-header">
                    <h1 className="animal-h1">Birds</h1>
                </div>
                <ActionBar
        animalType={animalType}
        specificFields={birdSpecificFields}
        animals={birds}
        setAnimals={setBirds}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
                <div className="animal-row">
                    {filteredAnimals.map(bird => (
                        <Listbox key={bird.id} animal={bird} animals={birds} setAnimals={setBirds} animalType={animalType} specificFields={birdSpecificFields}/>
                    ))}
                </div>

            </div>
    );

};       

export default Birds; 
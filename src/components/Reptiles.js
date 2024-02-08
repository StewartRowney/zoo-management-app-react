import "./Animals.css"
import { useEffect, useState} from "react";
import Listbox from "../components/Listbox";
import ActionBar from "./ActionBar";
import getAllItems from "../apis/getApis";


const Reptiles = () =>{

    const [reptiles, setReptiles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
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

    
      const filteredAnimals = reptiles.filter((reptile) =>
      reptile.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return(
        <div className="animal-background">
            <div className="animal-header">
                <h1 className="animal-h1">Reptiles</h1>
            </div>
              <ActionBar
        animalType={animalType}
        specificFields={reptileSpecificFields}
        animals={reptiles}
        setAnimals={setReptiles}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
                
            <div className="animal-row">
                {filteredAnimals.map(reptile => (
                  <Listbox key={reptile.id}  animal={reptile} animals={reptiles} setAnimals={setReptiles} animalType={animalType} specificFields={reptileSpecificFields}/>))}
            </div>
        </div>
      );
    

}

export default Reptiles;
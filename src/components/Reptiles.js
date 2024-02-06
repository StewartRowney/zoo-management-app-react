import "./Animals.css"
import { useEffect, useState} from "react";
import Listbox from "../components/Listbox";
import AddAnimalForm from "./AddAnimalForm";
import getAllItems from "../apis/getApis";


const Reptiles = () =>{

    const [reptiles, setReptiles] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const animalType = 'reptiles';

    const reptileSpecificFields = {
      hasShell: '',
      hasLegs: '',
      isColdBlooded: ''
    };

    useEffect(() => {
        getAllItems(animalType, setReptiles)
      }, []);

      const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      const filteredAnimals = reptiles.filter((reptile) =>
      reptile.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return(
        <div className="animal-background">
            <div className="animal-header">
                <h1 className="animal-h1">Reptiles</h1>
            </div>
            <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-bar"
      />
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
                {filteredAnimals.map(reptile => (
                  <Listbox key={reptile.id}  animal={reptile} animals={reptiles} setAnimals={setReptiles} animalType={animalType}/>))}
            </div>
        </div>
      );
    

}

export default Reptiles;
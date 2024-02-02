import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";
import "./Animals.css"

const Amphibians = () => {
  const [amphibians, setAmphibians] = useState([]);

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
        <div className="animal-row">
            {amphibians.map(amphibian => (<Listbox key={amphibian.id} animal={amphibian} animals={amphibians} setAnimals={setAmphibians} animalType='amphibians'/>))}
        </div>
    </div>
  );
}

export default Amphibians;
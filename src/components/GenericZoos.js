import './Home.css';
import "./Animals.css";
import Listbox from "./Listbox";
import { useEffect, useState } from "react"
import getAllItems from "../apis/getApis";


const GenericZoos = (animal) =>{

    const animalType = 'zoo';
    const [zoos, setZoos] = useState([]);
  
    useEffect(() => {
      getAllItems(
        animalType, setZoos
        )}, []);

    return(

    <div className="animal-background">
          <div className="animal-header">
              <h1 className="animal-h1">{animal.name} Information</h1>
              <div>
             
              <Listbox key={animal.name} animal={animal} animals={zoos} setAnimals={setZoos} animalType={animalType} />
        
              </div>
          </div>
    </div>
    )
}

export default GenericZoos;
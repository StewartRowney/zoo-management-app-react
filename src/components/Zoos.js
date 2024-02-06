import { useEffect, useState } from "react"
import './Zoo.css';
import './Animals.css';
import Listbox from "./Listbox";
import PopupFormButton from "./PopupFormButton";
import getAllItems from "../apis/getApis";

const Zoos = () => {
  const animalType = 'zoos';
  const [zoos, setZoos] = useState([]);

  useEffect(() => {
    getAllItems(animalType)
    .then(fetchedItems => {
      if (fetchedItems)
        setZoos(fetchedItems);
      else
        console.error("Unexpected result returned from getZoos: ", fetchedItems);
  })
  .catch(e => {console.error("Error calling getZoos: ", e)}); 
  }, []);


  return (

    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Zoos</h1>
      </div>
      <div className="zoo-row">
        {zoos.length !== 0 ? (zoos.map(zoo => <Listbox key={zoo.id} animal={zoo} animals={zoos} setAnimals={setZoos} animalType={animalType} />)) : <> </>}
      </div>
      <br></br>
      <PopupFormButton
        popupBtnMessage={"Add Zoo"}
        animalType={animalType}
        collection={zoos}
        setCollection={setZoos}
      >
      </PopupFormButton>
    </div>
  );
}

export default Zoos;
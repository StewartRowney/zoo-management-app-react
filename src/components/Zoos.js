import { useEffect, useState } from "react"
import './Zoo.css';
import './Animals.css';
import Listbox from "./Listbox";
import getAllItems from "../apis/getApis";
import ActionBar from "./ActionBar";

const Zoos = () => {
  const animalType = 'zoos';
  const [zoos, setZoos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredAnimals = zoos.filter((zoo) =>
  zoo.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Zoos</h1>
      </div>
      <ActionBar
        animalType={animalType}
        animals={zoos}
        setAnimals={setZoos}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
      <div className="zoo-row">
        {zoos.length !== 0 ? (filteredAnimals.map(zoo => <Listbox key={zoo.id} animal={zoo} animals={zoos} setAnimals={setZoos} animalType={animalType} />)) : <p>No zoos available.</p>}
      </div>
 
    </div>
  );
}

export default Zoos;
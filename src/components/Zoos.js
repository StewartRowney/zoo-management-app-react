import { useEffect, useState } from "react"
import './Zoo.css';
import './Animals.css';
import Listbox from "./Listbox";

const Zoos = () => {
  const [zoos, setZoos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/zoos')
      .then(response => response.json())
      .then(data => setZoos(data))
      .catch(error => console.error('Error fetching zoos:', error));
  }, []);

  return (

    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Zoos</h1>
      </div>
      <div className="zoo-row">
        ̥{zoos.map(zoo => (
          <Listbox key={zoo.id} animal={zoo} animals={zoos} setAnimals={setZoos} animalType={'zoos'} />
        ))}
      </div>
    </div>
    

  );
}

export default Zoos;
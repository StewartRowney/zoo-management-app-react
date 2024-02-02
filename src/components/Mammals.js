import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";

const Mammals = () => {
  const [mammals, setMammals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/mammals')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMammals(data);
      })
      .catch(error => console.error('Error fetching mammals:', error));
  }, []);

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Mammals</h1>
      </div>
      <div className="animal-row">
        {mammals.map(mammal => (
          <Listbox key={mammal.id} animal={mammal} animals={mammals} setAnimals={setMammals} animalType={'mammals'}/>
        ))}
      </div>
    </div>
  );
}

export default Mammals;

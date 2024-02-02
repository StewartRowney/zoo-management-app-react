import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/fish')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFishes(data);
      })
      .catch(error => console.error('Error fetching fishes:', error));
  }, []);

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Fishes</h1>
      </div>
      <div className="animal-row">
        {fishes.map(fish => (
          <Listbox key={fish.id} title={fish.name} animal={fish} />
        ))}
      </div>
    </div>
  );
}

export default Fishes;

import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";

const Fish = () => {
  const [fish, setFish] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/fish')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFish(data);
      })
      .catch(error => console.error('Error fetching fish:', error));
  }, []);

  return (
    <div>
      <h1>Fish</h1>
      <br/><button>Add Fish</button>
      {fish.map(fish => (
        <Listbox key={fish.id} title={fish.name} animal={fish} />
      ))}
    </div>
  );
}

export default Fish;

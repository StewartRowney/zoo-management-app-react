import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";

const Birds = () => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/birds')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBirds(data);
      })
      .catch(error => console.error('Error fetching birds:', error));
  }, []);

  return (
    <div>
      <h1>Birds</h1>
      <br/><button>Add Bird</button>
      {birds.map(bird => (
        <Listbox key={bird.id} title={bird.name} animal={bird} />
      ))}
    </div>
  );
}

export default Birds;

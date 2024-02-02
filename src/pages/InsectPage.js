import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";

const Insects = () => {
  const [insects, setInsects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/insects')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInsects(data);
      })
      .catch(error => console.error('Error fetching insects:', error));
  }, []);

  return (
    <div>
      <h1>Insects</h1>
      <br/><button>Add Insect</button>
      {insects.map(insect => (
        <Listbox key={insect.id} title={insect.name} animal={insect} />
      ))}
    </div>
  );
}

export default Insects;

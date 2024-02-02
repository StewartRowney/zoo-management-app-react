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
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Insects</h1>
      </div>
      <div className="animal-row">
        {insects.map(insect => (
          <Listbox key={insect.id} title={insect.name} animal={insect} />
        ))}
      </div>
    </div>
  );
}

export default Insects;

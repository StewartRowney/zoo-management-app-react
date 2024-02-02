import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";

const Amphibians = () => {

    const [amphibians, setAmphibians] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/amphibians')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setAmphibians(data)})
          .catch(error => console.error('Error fetching amphibians:', error));
      }, []);

      //const boxFields = [];

return(
<div>
        <h1>Amphibians</h1>
        <br/><button>Add Amphibian</button>
         {amphibians.map(amphibian => (
  <Listbox key={amphibian.id} title={amphibian.name} animal={amphibian} />

))}
        
      </div>
    );
}

export default Amphibians;
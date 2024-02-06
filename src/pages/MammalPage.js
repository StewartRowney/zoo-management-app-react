import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";

const Mammals = () => {

    const [mammals, setMammals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/mammals')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setMammals(data)})
          .catch(error => console.error('Error fetching mammals:', error));
      }, []);


return(
<div>
        <h1>Mammals</h1>
        <br/><button>Add Mammal</button>
         {mammals.map(mammal => (
  <Listbox key={mammal.id} title={mammal.name} animal={mammal} />

))}
        
      </div>
    );
}

export default Mammals;
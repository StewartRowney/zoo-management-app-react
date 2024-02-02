import "./Animals.css"
import { useEffect, useState} from "react";
import Listbox from "../components/Listbox";

const ReptilePage = () =>{

    const [reptiles, setReptiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/reptile')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setReptiles(data)})
          .catch(error => console.error('Error fetching amphibians:', error));
      }, []);

      return(
        <div className="animal-background">
            <div className="animal-header">
                <h1 className="animal-h1">Reptiles</h1>
            </div>
            <div className="animal-row">
                {reptiles.map(reptile => (<Listbox key={reptile.id} title={reptile.name} animal={reptile} />))}
            </div>
        </div>
      );
    

}

export default ReptilePage;
import SidebarComponent from "../components/Sidebar";
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

    return (
        <div className="page">
          <h1 className='home-h1'>Reptile</h1>
          {reptiles.map(reptile => (
  <Listbox key={reptile.id} title={reptile.name} animal={reptile} />

))}
          <SidebarComponent/>
        </div>
        
      );
    };
    
export default ReptilePage;
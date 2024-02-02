import { useEffect, useState} from "react"
import './Zoo.css';
import './Animals.css';

const Zoos = () => {
    const [zoos, setZoos] = useState([]);

    useEffect(() => {
      fetch('http://localhost:8080/zoos')
        .then(response => response.json())
        .then(data => setZoos(data))
        .catch(error => console.error('Error fetching zoos:', error));
    }, []);
  
    return (
      
        <div className="animal-background">
          <h2>Zoos</h2>
          <ul>
            {zoos.map(zoo => (
              <li key={zoo.id}>{zoo.name}</li>
            ))}
          </ul>
        </div>
      
    );
  }
  
  export default Zoos;
import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"

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
            <div className="animal-background">
                <div className="animal-header">
                    <h1 className="animal-h1">Birds</h1>
                </div>
                <div className="animal-row">
                    ̥{birds.map(bird => (
                        <Listbox key={bird.id} title={bird.name} animal={bird} />
                    ))}
                </div>

            </div>
    );
}

export default Birds; 
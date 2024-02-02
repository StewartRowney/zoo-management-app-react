import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";

const Birds = () => {
    const [birds, setBirds] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const birdSpecificFields = {
        canMimicSound: '',
        nocturnal: ''
      };

    const handleFormSubmit = (formData) => {
        fetch('http://localhost:8080/birds', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
              setShowForm(false); 
            })
            .catch((error) => {
              console.error('Error:', error);
            });
            console.log('Submitting form for Birds:', formData);
        };        
   

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
                <button onClick={() => setShowForm(true)}>Add Bird</button>

      {showForm && (
        <AddAnimalForm
          animalType="Birds"
          specificFields={birdSpecificFields}
          onSubmit={handleFormSubmit}
        />
      )}
                <div className="animal-row">
                    ̥{birds.map(bird => (
                        <Listbox key={bird.id} title={bird.name} animal={bird} />
                    ))}
                </div>

            </div>
    );

};                 
export default Birds; 
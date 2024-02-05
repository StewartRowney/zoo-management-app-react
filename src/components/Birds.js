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

    useEffect(() => {
      fetch('http://localhost:8080/birds')
          .then(response => response.json())
          .then(data => {
              console.log(data);
              setBirds(data);
          })
          .catch(error => console.error('Error fetching birds:', error));
    }, []);

const handleFormSubmit = async (formData) => {
  try {
    const response = await fetch('http://localhost:8080/birds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
    }

    const updatedDataResponse = await fetch('http://localhost:8080/birds');
    if (!updatedDataResponse.ok) {
      throw new Error(`Failed to fetch updated data: ${updatedDataResponse.status} ${updatedDataResponse.statusText}`);
    }

    const updatedData = await updatedDataResponse.json();
    setBirds(updatedData); 

    console.log('Form submitted successfully');
    setShowForm(false); 
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};  

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
                    {birds.map(bird => (
                        <Listbox key={bird.id} animal={bird} animals={birds} setAnimals={setBirds} animalType={'birds'}/>
                    ))}
                </div>

            </div>
    );

};       

export default Birds; 
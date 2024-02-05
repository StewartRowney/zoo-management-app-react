import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";

const Insects = () => {
  const [insects, setInsects] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const insectSpecificFields = {
    hasWings: '',
    numberOfLegs: 0
  };

  useEffect(() => {
    fetch('http://localhost:8080/insects')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInsects(data);
      })
      .catch(error => console.error('Error fetching insects:', error));
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/insects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }
  
      const updatedDataResponse = await fetch('http://localhost:8080/insects');
      if (!updatedDataResponse.ok) {
        throw new Error(`Failed to fetch updated data: ${updatedDataResponse.status} ${updatedDataResponse.statusText}`);
      }
  
      const updatedData = await updatedDataResponse.json();
      setInsects(updatedData); 
  
      console.log('Form submitted successfully');
      setShowForm(false); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };  

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Insects</h1>
      </div>
      <button onClick={() => setShowForm(true)}>Add Bird</button>
          {showForm && (
            <AddAnimalForm
              animalType="Insects"
              specificFields={insectSpecificFields}
              onSubmit={handleFormSubmit}
            />
          )}
      <div className="animal-row">
        {insects.map(insect => (
          <Listbox key={insect.id} animal={insect} animals={insects} setAnimals={setInsects} animalType={'insects'}/>
        ))}
      </div>
    </div>
  );
}

export default Insects;

import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";

const Fishes = () => {
  const [fishes, setFishes] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fishSpecificFields = {
    isBioluminiscent: '',
    canDischargeElectricity: ''
  };


  useEffect(() => {
    fetch('http://localhost:8080/fish')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFishes(data);
      })
      .catch(error => console.error('Error fetching fishes:', error));
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/fish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }
  
      const updatedDataResponse = await fetch('http://localhost:8080/fish');
      if (!updatedDataResponse.ok) {
        throw new Error(`Failed to fetch updated data: ${updatedDataResponse.status} ${updatedDataResponse.statusText}`);
      }
  
      const updatedData = await updatedDataResponse.json();
      setFishes(updatedData); 
  
      console.log('Form submitted successfully');
      setShowForm(false); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };  

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Fishes</h1>
      </div>
      <button onClick={() => setShowForm(true)}>Add Fish</button>
                {showForm && (
                  <AddAnimalForm
                    animalType="Fishes"
                    specificFields={fishSpecificFields}
                    onSubmit={handleFormSubmit}
                  />
                )}
      <div className="animal-row">
        {fishes.map(fish => (
          <Listbox key={fish.id} animal={fish} animals={fishes} setAnimals={setFishes} animalType={'fish'}/>
        ))}
      </div>
    </div>
  );
}

export default Fishes;

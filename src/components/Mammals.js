import { useEffect, useState } from "react";
import Listbox from "../components/Listbox";
import "./Animals.css"
import AddAnimalForm from "./AddAnimalForm";

const Mammals = () => {
  const [mammals, setMammals] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const mammalSpecificFields = {
    hasFurs: '',
    hasFins: '',
    hasHooves: ''
  };

  

  useEffect(() => {
    fetch('http://localhost:8080/mammals')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMammals(data);
      })
      .catch(error => console.error('Error fetching mammals:', error));
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/mammals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }
  
      const updatedDataResponse = await fetch('http://localhost:8080/mammals');
      if (!updatedDataResponse.ok) {
        throw new Error(`Failed to fetch updated data: ${updatedDataResponse.status} ${updatedDataResponse.statusText}`);
      }
  
      const updatedData = await updatedDataResponse.json();
      setMammals(updatedData); 
  
      console.log('Form submitted successfully');
      setShowForm(false); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };  

  return (
    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Mammals</h1>
      </div>

      <button onClick={() => setShowForm(true)}>Add Mammal</button>
                {showForm && (
                  <AddAnimalForm
                    animalType="Mammals"
                    specificFields={mammalSpecificFields}
                    onSubmit={handleFormSubmit}
                  />
                )}

      <div className="animal-row">
        {mammals.map(mammal => (
          <Listbox key={mammal.id} animal={mammal} animals={mammals} setAnimals={setMammals} animalType={'mammals'}/>
        ))}
      </div>
    </div>
  );
}

export default Mammals;

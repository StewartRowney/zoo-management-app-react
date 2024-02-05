import { useEffect, useState} from "react"
import Listbox from "../components/Listbox";
import "./Animals.css";
import AddAnimalForm from "./AddAnimalForm";


const Amphibians = () => {
  const [amphibians, setAmphibians] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const amphibiansSpecificFields = {
    isPoisonous: '',
    makesNoise: ''
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/amphibians', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }
  
      const updatedDataResponse = await fetch('http://localhost:8080/amphibians');
      if (!updatedDataResponse.ok) {
        throw new Error(`Failed to fetch updated data: ${updatedDataResponse.status} ${updatedDataResponse.statusText}`);
      }
  
      const updatedData = await updatedDataResponse.json();
      setAmphibians(updatedData); 
  
      console.log('Form submitted successfully');
      setShowForm(false); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };  

  useEffect(() => {
      fetch('http://localhost:8080/amphibians')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setAmphibians(data)})
        .catch(error => console.error('Error fetching amphibians:', error));
    }, []);


  return(
    <div className="animal-background">
        <div className="animal-header">
            <h1 className="animal-h1">Amphibians</h1>
        </div>

        <button onClick={() => setShowForm(true)}>Add Amphibian</button>
                {showForm && (
                  <AddAnimalForm
                    animalType="Amphibians"
                    specificFields={amphibiansSpecificFields}
                    onSubmit={handleFormSubmit}
                  />
                )}

        <div className="animal-row">
            {amphibians.map(amphibian => (<Listbox key={amphibian.id} animal={amphibian} animals={amphibians} setAnimals={setAmphibians} animalType='amphibians'/>))}
        </div>
    </div>
  );
}

export default Amphibians;
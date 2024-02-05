import "./Animals.css"
import { useEffect, useState} from "react";
import Listbox from "../components/Listbox";
import AddAnimalForm from "./AddAnimalForm";


const Reptiles = () =>{

    const [reptiles, setReptiles] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const reptileSpecificFields = {
      hasShell: '',
      hasLegs: '',
      isColdBlooded: ''
    };

    useEffect(() => {
        fetch('http://localhost:8080/reptiles')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setReptiles(data)})
          .catch(error => console.error('Error fetching reptiles:', error));
      }, []);

      const handleFormSubmit = async (formData) => {
        try {
          const response = await fetch('http://localhost:8080/reptiles', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
          }
      
          const updatedDataResponse = await fetch('http://localhost:8080/reptiles');
          if (!updatedDataResponse.ok) {
            throw new Error(`Failed to fetch updated data: ${updatedDataResponse.status} ${updatedDataResponse.statusText}`);
          }
      
          const updatedData = await updatedDataResponse.json();
          setReptiles(updatedData); 
      
          console.log('Form submitted successfully');
          setShowForm(false); 
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };

      return(
        <div className="animal-background">
            <div className="animal-header">
                <h1 className="animal-h1">Reptiles</h1>
            </div>

            <button onClick={() => setShowForm(true)}>Add Reptile</button>
                {showForm && (
                  <AddAnimalForm
                    animalType="Reptiles"
                    specificFields={reptileSpecificFields}
                    onSubmit={handleFormSubmit}
                  />
                )}
                
            <div className="animal-row">
                {reptiles.map(reptile => (
                  <Listbox key={reptile.id}  animal={reptile} animals={reptiles} setAnimals={setReptiles} animalType={'reptiles'}/>))}
            </div>
        </div>
      );
    

}

export default Reptiles;
import { useEffect, useState } from "react"
import './Zoo.css';
import './Animals.css';
import Listbox from "./Listbox";
import PopupFormButton from "./PopupFormButton";

const Zoos = () => {
  const [zoos, setZoos] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const changeFormStateAndButtonText = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  useEffect(() => {
    fetch('http://localhost:8080/zoos')
      .then(response => response.json())
      .then(data => setZoos(data))
      .catch(error => console.error('Error fetching zoos:', error));
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:8080/zoos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit zoo form: ${response.status} ${response.statusText}`);
      }

      const updatedDataResponse = await fetch('http://localhost:8080/zoos');
      if (!updatedDataResponse.ok) {
        throw new Error(`Failed to fetch updated zoo data: ${updatedDataResponse.status} ${updatedDataResponse.statusText}`);
      }

      const updatedData = await updatedDataResponse.json();
      setZoos(updatedData);

      console.log('Form submitted successfully');
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (

    <div className="animal-background">
      <div className="animal-header">
        <h1 className="animal-h1">Zoos</h1>
      </div>
      <div className="zoo-row">
        {zoos.map(zoo => (
          <Listbox key={zoo.id} animal={zoo} animals={zoos} setAnimals={setZoos} animalType={'zoos'} />
        ))}
      </div>
      <br></br>
      <PopupFormButton
        popupBtnMessage = {"Add Zoo"}
        handleFormSubmit = {handleFormSubmit}
        >
        </PopupFormButton>
    </div>
  );
}

export default Zoos;
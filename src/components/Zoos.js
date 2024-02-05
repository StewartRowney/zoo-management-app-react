import { useEffect, useState } from "react"
import './Zoo.css';
import './Animals.css';
import Listbox from "./Listbox";
import ZooFormComponentSimple from "./ZooFormComponentSimple";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

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

      <Popup trigger={<button> Click to add a zoo </button>}
        modal
        nested
        position='right center' >

        {close => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>

            <ZooFormComponentSimple
              animalType="zoos"
              onSubmit={handleFormSubmit}
            />

            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              Cancel
            </button>

          </div>
        )}
      </Popup >

    </div>



  );
}

export default Zoos;
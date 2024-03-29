import React, { useState, useEffect } from 'react';
import ZooDropdown from './ZooDropdown';
import addItem from '../apis/addApis';
import './AddAnimalForm.css'
import updateItem from '../apis/updateApi';



const AddAnimalForm = ({ title, animalType, animals, setAnimals, specificFields, animalItem, closePopup }) => {

  const initialInputs = {
    zoo: {
      id: '',
    },
    name: '',
    speciesName: '',
    birthDate: '',
    habitat: '',
    behaviour: '',
    foodType: '',
    extraInformation: '',
    ...specificFields,
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState(initialInputs);

  useEffect(() => {
    if (animalItem) {
      const updatedFields = {};
      Object.entries(animalItem).forEach(([key, value]) => {
        if (key === 'zoo') {
          updatedFields[key] = { id: value.id };
        } else if (typeof value !== 'object') {
          updatedFields[key] = value;
        }
      });

      setFormData({
        ...updatedFields,
      });
    }
  }, [animalItem]);

  useEffect(() => {
    const isValid = formData.name !== '' && formData.zoo.id !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (animalItem) {
      updateItem(animalType, formData)
        .then(fetchedItems => {
          if (fetchedItems) {
            const newAnimals = animals.filter(animal => animal.id !== animalItem.id);

            setAnimals(newAnimals);
            setAnimals(prevCollection => [...prevCollection, fetchedItems]);
            closePopup();
          }
          else {
            console.error("Unexpected result returned from ", title, ": ", fetchedItems);
          }
        })
        .catch(e => { console.error("Error calling update ", title, ": ", e) });
    }
    else {
      addItem(animalType, formData)
        .then(fetchedItems => {
          if (fetchedItems) {
            setAnimals(prevCollection => [...prevCollection, fetchedItems]);
            closePopup();
          }
          else {
            console.error("Unexpected result returned from ", title, ": ", fetchedItems);
          }
        })
        .catch(e => { console.error("Error calling add ", title, ": ", e) });
    }
  };

  const handleZooChange = (selectedZooId) => {
    setFormData((prevData) => ({
      ...prevData,
      zoo: {
        ...prevData.zoo,
        id: selectedZooId,
      },
    }));
  };

  const capitalizeFirstLetter = (string) => {
    const spacedString = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    const titleCaseString = spacedString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return titleCaseString;
  };


  return (
    <div className="form-modal">
      <h2>{title}</h2>
      <br></br>
      <form className='form-box'>
        <div className='child_element'>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          <br></br>
        </div>
        <div className='child_element'>
          <label>Species Name:</label>
          <input type="text" name="speciesName" value={formData.speciesName} onChange={handleInputChange} />
          <br></br>
        </div>
        <div>
          <label>Birth Date:</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />
          <br></br>
        </div >
        <div>
          <label>Habitat:</label>
          <input type="text" name="habitat" value={formData.habitat} onChange={handleInputChange} />
          <br></br>
        </div>
        <div>
          <label>Behaviour:</label>
          <input type="text" name="behaviour" value={formData.behaviour} onChange={handleInputChange} />
          <br></br>
        </div>
        <div>
          <label>Food Type:</label>
          <input type="text" name="foodType" value={formData.foodType} onChange={handleInputChange} />
          <br></br>
        </div>
        <div>
          <label>Extra Infomation:</label>
          <input type="text" name="extraInformation" value={formData.extraInformation} onChange={handleInputChange} />
          <br></br>
        </div>

        {
          Object.keys(specificFields).map((fieldName) => (
            <div className='checkbox-container' key={fieldName}>
              {fieldName === 'numberOfLegs' ? (
                <>
                  <label>{capitalizeFirstLetter(fieldName)}:</label>
                  <input type="text" name={fieldName} value={formData[fieldName]} onChange={handleInputChange} />
                </>
              ) : (
                <>
                  <label>{capitalizeFirstLetter(fieldName)}:</label>
                  <input
                    type="checkbox"
                    name={fieldName}
                    checked={formData[fieldName]}
                    onChange={(e) => handleInputChange({ target: { name: fieldName, value: e.target.checked } })}

                  />

                </>

              )}

            </div>

          ))
        }
        <br></br>
        <ZooDropdown selectedZoo={formData.zoo.id} onZooChange={handleZooChange} />
        <br></br>
        <button className='button' type="submit" disabled={!isFormValid} onClick={handleSubmit}>
          Save
        </button>
      </form >
    </div >
  );
};

export default AddAnimalForm;
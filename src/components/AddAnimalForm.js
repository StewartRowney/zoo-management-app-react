import React, { useState } from 'react';
import ZooDropdown from './ZooDropdown';

const AddAnimalForm = ({ animalType, onSubmit, specificFields }) => {
  const [formData, setFormData] = useState({
    name: '',
    speciesName: '',
    birthDate: '',
    habitat: '',
    behaviour: '',
    foodType: '',
    extraInformation: '',
    ...specificFields,
    zoo: {
        id: '', 
      },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({
        name: '',
        speciesName: '',
        birthDate: '',
        habitat: '',
        behaviour: '',
        foodType: '',
        extraInformation: '',
        ...specificFields,
        zoo: {
            id: '', 
          },
    });
  };

  const handleZooChange = (selectedZooId) => {
    setFormData((prevData) => ({
      zoo: {
        id: selectedZooId,
        ...prevData.zoo,
      },
    }));
  };

  return (
    <div className="form-modal">
      <h2>{`Add ${animalType}`}</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Species Name:</label>
        <input type="text" name="speciesName" value={formData.speciesName} onChange={handleInputChange} />

        <label>Birth Date:</label>
        <input type="text" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />

        <label>Habitat:</label>
        <input type="text" name="habitat" value={formData.habitat} onChange={handleInputChange} />

        <label>Behaviour:</label>
        <input type="text" name="behaviour" value={formData.behaviour} onChange={handleInputChange} />

        <label>Food Type:</label>
        <input type="text" name="foodType" value={formData.foodType} onChange={handleInputChange} />

        <label>Extra Infomation:</label>
        <input type="text" name="extraInformation" value={formData.extraInformation} onChange={handleInputChange} />

        {Object.keys(specificFields).map((fieldName) => (
          <div key={fieldName}>
            <label>{fieldName}:</label>
            <input
              type="text"
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        
        <ZooDropdown selectedZoo={formData.zoo.id} onZooChange={handleZooChange} />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAnimalForm;

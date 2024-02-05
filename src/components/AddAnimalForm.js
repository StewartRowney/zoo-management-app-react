import React, { useState , useEffect} from 'react';
import ZooDropdown from './ZooDropdown';
import addItem from '../apis/addApis';


const AddAnimalForm = ({ animalType, animals, setAnimals, specificFields }) => {



  const [formData, setFormData] = useState({
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
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = formData.name !== '' && formData.zoo.id !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = () => {
      addItem(animalType, animals, formData, setAnimals)
    setFormData({
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
    });
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
            <label>{capitalizeFirstLetter(fieldName)}:</label>
                <select name={fieldName} value={formData[fieldName]} onChange={handleInputChange}>
                <option value="">Select...</option>
                <option value="true">True</option>
                <option value="false">False</option>
                </select>
          </div>
        ))}
        
        <ZooDropdown selectedZoo={formData.zoo.id} onZooChange={handleZooChange} />

        <button type="submit" disabled={!isFormValid} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAnimalForm;

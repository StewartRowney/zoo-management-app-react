import React, { useState , useEffect} from 'react';
import ZooDropdown from './ZooDropdown';
import addItem from '../apis/addApis';


const AddAnimalForm = ({title, animalType, animals, setAnimals, specificFields, animalItem }) => {


  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    zoo: {
        id:'', 
      },
    name:'',
    speciesName:'',
    birthDate:'',
    habitat:'',
    behaviour:'',
    foodType:'',
    extraInformation:'',
    ...specificFields,
  });


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


  // useEffect(() => {
  //   if(animalItem){
  //   setFormData({
  //     zoo: {
  //       id:animalItem.zoo.id, 
  //     },
  //   name:animalItem.name,
  //   speciesName:animalItem.speciesName,
  //   birthDate:animalItem.birthDate,
  //   habitat:animalItem.habitat,
  //   behaviour:animalItem.behaviour,
  //   foodType:animalItem.foodType,
  //   extraInformation:animalItem.extraInformation,
  //   updatedSpecificfields
  //   })
  //     } 
  //   },[animalItem, specificFields]);
  
  useEffect(() => {
    const isValid = formData.name !== '' && formData.zoo.id !== '';
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  };

  const handleSubmit = () => {
    addItem(animalType, animals, formData, setAnimals)
    setFormData({
        zoo: {
            id:'', 
          },
        name:'',
        speciesName:'',
        birthDate:'',
        habitat:'',
        behaviour:'',
        foodType:'',
        extraInformation:'',
        ...specificFields,
    });
  };

  const handleZooChange = (selectedZooId) => {
    setFormData((prevData) => ({
        ...prevData,
      zoo: {
        ...prevData.zoo,
        id:selectedZooId,
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
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Species Name:</label>
        <input type="text" name="speciesName" value={formData.speciesName} onChange={handleInputChange} />

        <label>Birth Date:</label>
        <input type="date" name="birthDate" value={formData.birthDate} onChange={handleInputChange} />

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

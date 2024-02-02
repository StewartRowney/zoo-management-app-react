import React, { useState } from "react";
import "./Listbox.css";

const Listbox = ({ animal, animals, setAnimals, animalType }) => {
  const [isExtended, setIsExtended] = useState(false);

  const toggleBox = () => {
    setIsExtended((prev) => !prev);
  };

  const capitalizeFirstLetter = (string) => {
    const spacedString = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    const titleCaseString = spacedString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return titleCaseString;
  };

  const deleteItem = () => {
    fetch('http://localhost:8080/' + animalType + 's/' + animal.id, {method: 'DELETE'})
        .then(() => {
          console.log(animal.name + " deleted");
          setAnimals(animals.filter(item => item !== animal));})
        .catch(error => console.error('Error deleting ' + animalType + ':', error));
  };

  const updateItem = () => {
    console.log("updated");
  };

  return (
    <div className={`box ${isExtended ? 'extended' : ''}`} onClick={toggleBox}>
      <h5 className="listbox-title">{animal.name}</h5>
      {isExtended && (
        <div className="extended-content"> 
          {Object.entries(animal)
          .filter(([key]) => key !== 'id')
          .filter(([key]) => key !== 'zoo')
          .map(([key, value]) => (
            <p key={key}>{capitalizeFirstLetter(key)}: {value === true ? 'True' : value === false ? 'False' : value}</p>
          ))}
          <button onClick={updateItem}>Update</button>
          <button onClick={deleteItem}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Listbox;
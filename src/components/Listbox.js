import React, { useState } from "react";
import "./Listbox.css";
import ZooFormComponentSimpleUpdate from "./ZooFormComponentSimpleUpdate";
import Popup from "reactjs-popup";
import { handleFormSubmit } from './Zoos';
import PopupFormButton from "./PopupFormButton";

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
    fetch('http://localhost:8080/' + animalType + '/' + animal.id, { method: 'DELETE' })
      .then(() => {
        console.log(animal.name + " deleted");
        setAnimals(animals.filter(item => item !== animal));
      })
      .catch(error => console.error('Error deleting ' + animal.name + ':', error));
  };

  const updateItem = () => {


    //show popup
    //pre-populate the fields with appropiate data
    //save button becomes update button 




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

          <PopupFormButton
            popupBtnMessage = {"Update Zoo"} 
            >
          </PopupFormButton>
          <button onClick={deleteItem}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Listbox;
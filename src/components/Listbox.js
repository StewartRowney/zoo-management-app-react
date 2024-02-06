import React, { useState } from "react";
import "./Listbox.css";
import deleteItem from "../apis/deleteApi";
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

  const deleteAnimal = () => {
    deleteItem(animalType, animals, animal, setAnimals)
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
          <div className="buttons">
            <PopupFormButton
              popupBtnMessage={"Update Zoo"}
            > 
            </PopupFormButton>
            <button className="button" onClick={deleteAnimal}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listbox;
import React, { useState } from "react";
import "./Listbox.css";
import deleteItem from "../apis/deleteApi";
import PopupFormButton from "./PopupFormButton";

const Listbox = ({ animal, animals, setAnimals, animalType, specificFields }) => {
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
    deleteItem(animalType, animal)
    .then(fetchedItems => {
      if (fetchedItems) {
        setAnimals(animals.filter(i => i !== animal));
      }
  })
  };

  const updateItem = () => {
    
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
                animalType = {animalType}
                collection = {animals}
                setCollection = {setAnimals}
                specificFields={specificFields}
                animalItem={animal}
                />
            <button className="button" onClick={deleteAnimal}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Listbox;
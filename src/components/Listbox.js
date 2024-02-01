import React, { useState } from "react";
import "./Listbox.css";

const Listbox = ({ title, animal }) => {
  const [isExtended, setIsExtended] = useState(false);

  const toggleBox = () => {
    setIsExtended((prev) => !prev);
  };

  const capitalizeFirstLetter = (string) => {
    const spacedString = string.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    const titleCaseString = spacedString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    return titleCaseString;
  };

  return (
    <div className={`box ${isExtended ? 'extended' : ''}`} onClick={toggleBox}>
      <h2>{title}</h2>
      {isExtended && (
        <div className="extended-content"> 
        {Object.entries(animal)
        .filter(([key]) => key !== 'id')
        .filter(([key]) => key !== 'zoo')
        .map(([key, value]) => (
         
          <p key={key}>{capitalizeFirstLetter(key)}: {value === true ? 'True' : value === false ? 'False' : value}</p>
       
))}


        </div>
      )}
    </div>
  );
};

export default Listbox;

// {amphibians.map(amphibian => (
//   <li key={amphibian.id}>{amphibian.name} <br/>
//   {amphibian.zoo.name} <br/>
//   {amphibian.behaviour}
//   </li>
// ))}

// {Object.entries(animal).map(([key, value]) => (
//   <p key={key}>{key}: {value}</p>
// ))}

// <p>Zoo: {animal.zoo.name}</p>
// <p>Behaviour: {animal.behaviour}</p>
// <p>Species: {animal.speciesName}</p>
// <p>birthday : {animal.birthDate}</p>
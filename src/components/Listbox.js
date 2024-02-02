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
      <h5>{title}</h5>
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
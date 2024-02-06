import { useState } from "react";
import AddAnimalForm from "./AddAnimalForm";
import PopupFormButton from "./PopupFormButton";

const ActionBar = ({animalType, specificFields, animals, setAnimals}) => {

    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            <button onClick={() => setShowForm(true)}>Add Amphibian</button>
                {showForm && (
                  <AddAnimalForm
                    animalType={animalType}
                    specificFields={specificFields}
                    animals={animals}
                    setAnimals={setAnimals}
                  />
                )}
                <PopupFormButton
                popupBtnMessage={"Add " + animalType}
                animalType = {animalType}
                collection = {animals}
                setCollection = {setAnimals}
                specificFields={specificFields}
                />
        </div>
    );
}

export default ActionBar;
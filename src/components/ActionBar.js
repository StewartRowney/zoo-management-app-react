import PopupFormButton from "./PopupFormButton";

const ActionBar = ({animalType, specificFields, animals, setAnimals, update}) => {

    return (
        <div>
                <PopupFormButton
                animalType = {animalType}
                collection = {animals}
                setCollection = {setAnimals}
                specificFields={specificFields}
                />
        </div>
    );
}

export default ActionBar;
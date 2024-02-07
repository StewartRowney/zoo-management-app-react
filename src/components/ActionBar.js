import PopupFormButton from "./PopupFormButton";
import "./Animals.css";


const ActionBar = ({animalType, specificFields, animals, setAnimals, update, searchTerm, setSearchTerm}) => {

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
      };

    return (
        <div>
                <PopupFormButton
                animalType = {animalType}
                collection = {animals}
                setCollection = {setAnimals}
                specificFields={specificFields}
                />
                <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="search-bar"
      />
        </div>
    );
}

export default ActionBar;
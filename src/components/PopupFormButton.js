import Popup from "reactjs-popup";
import ZooFormComponentSimple from "./ZooFormComponentSimple";
import 'reactjs-popup/dist/index.css';
import './PopupFormButton.css'
import AddAnimalForm from "./AddAnimalForm";

const PopupFormButton = ({ animalType, collection, setCollection, specificFields }) => {

    const formatTitle = (string) => {
        const spacedString = string.replace(/([a-z])([A-Z])/g, '$1 $2');
        const titleCaseString = spacedString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        if (titleCaseString.slice(-1) === 's') {
            return titleCaseString.substring(0, titleCaseString.length - 1);
        }
        return titleCaseString;
    };

    const title = 'Add ' + formatTitle(animalType);

    return (
        <Popup trigger={<button className="button"> {title} </button>}
            modal
            nested
            position='right center' >

            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div>
                        {animalType === 'zoos' ? 
                        <ZooFormComponentSimple
                            animalType = {animalType}
                            collection = {collection}
                            setCollection = {setCollection}
                            title={title}
                        /> : 
                        <AddAnimalForm
                            animalType={animalType}
                            specificFields={specificFields}
                            animals={collection}
                            setAnimals={setCollection}
                            title={title}
                        />}
                    </div>
                </div>
            )}
        </Popup >
    )
};
export default PopupFormButton;
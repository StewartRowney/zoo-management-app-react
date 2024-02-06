import Popup from "reactjs-popup";
import ZooFormComponentSimple from "./ZooFormComponentSimple";
import 'reactjs-popup/dist/index.css';
import './PopupFormButton.css'
import AddAnimalForm from "./AddAnimalForm";

const PopupFormButton = ({ popupBtnMessage, animalType, collection, setCollection, specificFields }) => {

    return (
        <Popup trigger={<button className="button"> {popupBtnMessage} </button>}
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
                        /> : 
                        <AddAnimalForm
                            animalType={animalType}
                            specificFields={specificFields}
                            animals={collection}
                            setAnimals={setCollection}
                        />}
                    </div>
                    <button
                        className="button"
                        onClick={() => {
                            console.log('modal closed ');
                            close();
                        }}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </Popup >
    )
};
export default PopupFormButton;
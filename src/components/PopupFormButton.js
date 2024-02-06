import Popup from "reactjs-popup";
import ZooFormComponentSimple from "./ZooFormComponentSimple";
import 'reactjs-popup/dist/index.css';
import './PopupFormButton.css'

const PopupFormButton = ({ popupBtnMessage, animalType, collection, setCollection }) => {

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
                    <ZooFormComponentSimple
                    animalType = {animalType}
                    collection = {collection}
                    setCollection = {setCollection}
                    />
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
import Popup from "reactjs-popup";
import ZooFormComponentSimple from "./ZooFormComponentSimple";
import 'reactjs-popup/dist/index.css';
import './PopupFormButton.css'

const PopupFormButton = ({popupBtnMessage, handleFormSubmit}) => {

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
                        onSubmit={handleFormSubmit}
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
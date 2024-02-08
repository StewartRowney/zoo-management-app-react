import Popup from "reactjs-popup";
import warning from '../media/warning_497789.png'

const PopUpConfirmationButton = ({buttonName, methodOnConfirm, message}) => {
    
    return (
        <div>
            <Popup trigger={<button className="button"> {buttonName} </button>}
                modal
                nested
                position='right center' 
                className="myPopUpFormConfirmation">

                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        
                        <h1>Warning!</h1>
                        <img className="warning-icon" src={warning} alt='logo'/>
                        <p>{message}</p>
                        <button className="confirmationButton" onClick={() => {methodOnConfirm(); close();}}>Confirm</button>
                        <button className="cancellationButton" onClick={close}>Cancel</button>
                    </div>
                )}

            </Popup >
        </div>
    );
}

export default PopUpConfirmationButton;
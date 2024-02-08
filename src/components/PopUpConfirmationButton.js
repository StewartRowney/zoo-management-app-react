import Popup from "reactjs-popup";

const PopUpConfirmationButton = ({buttonName, methodOnConfirm, message}) => {
    
    return (
        <div>
            <Popup trigger={<button className="button"> {buttonName} </button>}
                modal
                nested
                position='right center' >

                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>

                        <p>{message}</p>
                        <button onClick={() => {methodOnConfirm(); close();}}>Confirm</button>
                        <button onClick={close}>Cancel</button>
                    </div>
                )}

            </Popup >
        </div>
    );
}

export default PopUpConfirmationButton;
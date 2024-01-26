import './SafeThemeButton.css';

const AnimalButton = (props) => {
    return (
        <button className='safe-button' onClick={props.onClick}> {props.label} </button>
    )
}
export default AnimalButton;
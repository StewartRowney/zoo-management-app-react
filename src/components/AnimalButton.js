import './SafeThemeButton.css';
import { Link } from 'react-router-dom';


const AnimalButton = (props) => {
    return (
        <Link className='safe-button' to={props.link} onClick={props.onClick} > {props.label} </Link>
    )
}
export default AnimalButton;
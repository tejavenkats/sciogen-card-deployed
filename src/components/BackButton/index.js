import Styles from './backButton.module.css';
import {ReactComponent as BackIcon} from '../../assets/backIcon.svg';

const BackButton = () => {
    return ( 
    <div className={Styles["back-container"]}>
        <BackIcon className={Styles['back-icon']} />
        <p className={Styles['text']}>Back</p>
    </div> );
}
 
export default BackButton;
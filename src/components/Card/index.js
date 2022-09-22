import Actions from '../Actions';
import BackButton from '../BackButton';
import Footer from '../Footer';
import PasswordField from '../PasswordField';
import UserAvatar from '../UserAvatar';
import Styles from './card.module.css'

const Card = () => {
    return ( 
    <div className={Styles["container"]}>
        <div className={Styles['component-wrapper']}>
            <BackButton />
            <UserAvatar />
            <PasswordField />
            <Actions />
        </div>
        <Footer />
    </div> );
}
 
export default Card;    
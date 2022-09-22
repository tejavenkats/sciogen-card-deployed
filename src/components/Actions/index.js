import Styles from './actions.module.css';
import SignIn from './SignIn';
import StaySignedIn from './StaySignedIn';

const Actions = () => {
    return ( <div className={Styles['actions-container']}>
        <StaySignedIn />
        <SignIn />
    </div> );
}
 
export default Actions;
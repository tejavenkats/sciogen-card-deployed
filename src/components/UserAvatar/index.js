import Styles from './userAvatar.module.css';

const UserAvatar = () => {
    return ( <div className={Styles['container']}>
        <img className={Styles['avatar']} src='https://picsum.photos/400' alt='user-avatar'/>
        <p className={Styles['heading']}>Personal Account</p>
        <p className={Styles['name']}>Derek Shepard</p>
    </div> );
}
 
export default UserAvatar;
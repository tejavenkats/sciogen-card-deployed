import { useCallback, useState } from 'react';
import Styles from '../actions.module.css';

const StaySignedIn = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = useCallback((e) => {
        if(e) setIsChecked(e.target.checked);
    },[setIsChecked])
    
    return ( 
    <div className={Styles['signed-in-container']}>
        <input className={Styles['checkbox']} checked={isChecked} type='checkbox' onChange={handleOnChange} />
        <p className={Styles['signed-in-text']}>Stay Signed in</p>
    </div> 
    );   
}
 
export default StaySignedIn;
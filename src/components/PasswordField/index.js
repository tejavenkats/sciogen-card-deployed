import { useCallback, useState } from 'react';
import Styles from './password.module.css';
import {ReactComponent as EyeIcon} from '../../assets/eyeIcon.svg';

const PasswordField = () => {

    const [inputType, setInputType] = useState('password');
    const [password, setPassword] = useState('');
    const handleOnChange = useCallback((e) => {
        if(e) setPassword(e.target.value);
    }, [])

    const handleHideOrShowPassword = () => {
        if(inputType === 'password') setInputType('text');
        else setInputType('password');
    }

    return ( 
        <div className={Styles['password-container']}>
            <label className={Styles['label']}>Password</label>
            <div className={Styles['input-container']}>
            <input placeholder={`Don't look please....`} className={Styles['input-field']} type={inputType} value={password} onChange={handleOnChange} />
                <EyeIcon onClick={handleHideOrShowPassword} className={Styles['eye-icon']} />
            </div>
            <div className={Styles['forgot-password']}>
                Forgot password? <span><a href='https://picsum.photos/400'>Reset</a></span>
            </div>
        </div>
     );
}
 
export default PasswordField;
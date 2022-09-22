import Styles from './footer.module.css';

const Footer = () => {
    return ( 
        <div className={Styles['wrapper']}>
        <p className={Styles['policy-text']}>
            This site is protected by reCAPTCHA and the <a className={Styles['privacy-links']} target={'_blank'} rel="noreferrer" href='https://open.spotify.com/' >Google Privacy Policy</a> and <a className={Styles['privacy-links']} target={'_blank'} rel="noreferrer" href='https://www.youtube.com/'>Terms of Service</a> apply.
        </p>
    </div> );
}
 
export default Footer;
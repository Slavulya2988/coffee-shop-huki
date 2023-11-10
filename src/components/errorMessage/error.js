import './error.css';
import img from './error.gif';

const ErrorMessage = () => {
    return(
        // <img className='error' src={process.env.PUBLIC_URL + 'error/error.gif'} alt="error" />
        <img className='error' src={img} alt="error" />
    )
}

export default ErrorMessage;

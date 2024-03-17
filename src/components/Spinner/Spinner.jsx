import SpinnerImage from './spinner.svg';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={SpinnerImage} alt="loading" />
        </div>
    );
};

export default Spinner;

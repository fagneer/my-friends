import '../../../../App.css';
import earth from '../../../../assets/img/simbolos/img-earth.png';
import { Link } from 'react-router-dom';

function EarthButton() {

    const handleClick = (event) => {
        event.preventDefault();
        const { href } = event.currentTarget;
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    };
    return (
        <Link to="/earth" onClick={handleClick} >
            <div className='App-MenuButton App-MenuButton-earth'>
                <img src={earth} alt='Earth' />
            </div>
        </Link>
    );
}

export default EarthButton;

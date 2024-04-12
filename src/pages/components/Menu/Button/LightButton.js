import '../../../../App.css';
import light from '../../../../assets/img/simbolos/img-light.png';
import { Link } from 'react-router-dom';

function LightButton() {

    const handleClick = (event) => {
        event.preventDefault();
        const { href } = event.currentTarget;
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    };
    return (
        <Link to="/light" onClick={handleClick} >
            <div className='App-MenuButton App-MenuButton-light'>
                <img src={light} alt='Light' />
            </div>
        </Link>
    );
}

export default LightButton;

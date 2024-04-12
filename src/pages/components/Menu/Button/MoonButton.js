import '../../../../App.css';
import moon from '../../../../assets/img/simbolos/img-moon.png';
import { Link } from 'react-router-dom';

function MoonButton() {
    const handleClick = (event) => {
        event.preventDefault();
        const { href } = event.currentTarget;
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    };
    return (
        <Link to="/moon" onClick={handleClick} >
            <div className='App-MenuButton App-MenuButton-moon'>
                <img src={moon} alt='Moon' />
            </div>
        </Link>
    );
}

export default MoonButton;

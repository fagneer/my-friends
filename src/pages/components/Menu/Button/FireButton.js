import '../../../../App.css';
import fire from '../../../../assets/img/simbolos/img-fire.png';
import { Link } from 'react-router-dom';

function FireButton() {

    const handleClick = (event) => {
        event.preventDefault();
        const { href } = event.currentTarget;
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    };
    return (
        <Link to="/fire" onClick={handleClick} >
            <div className='App-MenuButton App-MenuButton-fire'>
                <img src={fire} alt='Fire' />
            </div>
        </Link>
    );
}

export default FireButton;

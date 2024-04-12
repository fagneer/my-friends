import '../../../../App.css';
import sun from '../../../../assets/img/simbolos/img-sun.png';
import { Link } from 'react-router-dom';

function SunButton() {

    const handleClick = (event) => {
        event.preventDefault();
        const { href } = event.currentTarget;
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    };
    return (
        <Link to="/sun" onClick={handleClick} >
            <div className='App-MenuButton App-MenuButton-sun'>
                <img src={sun} alt='Sun' />
            </div>
        </Link>
    );
}

export default SunButton;

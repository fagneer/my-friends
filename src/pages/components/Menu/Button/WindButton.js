import '../../../../App.css';
import wind from '../../../../assets/img/simbolos/img-wind.png';
import { Link } from 'react-router-dom';

function WindButton() {

    const handleClick = (event) => {
        event.preventDefault();
        const { href } = event.currentTarget;
        setTimeout(() => {
            window.location.href = href;
        }, 1000);
    };
    return (
        <Link to="/wind" onClick={handleClick} >
            <div className='App-MenuButton App-MenuButton-wind'>
                <img src={wind} alt='Wind' />
            </div>
        </Link>
    );
}

export default WindButton;

import '../../../assets/css/Page.css';
import wind from '../../../assets/img/simbolos/img-wind.png';

function addBodyClass() {
  document.body.classList.add('define-body-wind');
}

function Header() {
  addBodyClass();
  return (
    
    <header id='wind' className="Page-header">
            <img className='Page-logo' src={wind} alt="Vento" />
    </header>

  );
}

export default Header;

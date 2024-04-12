import '../../../assets/css/Page.css';
import light from '../../../assets/img/simbolos/img-light.png';

function addBodyClass() {
  document.body.classList.add('define-body-light');
}

function Header() {
  addBodyClass();
  return (
    
    <header id='light' className="Page-header">
            <img className='Page-logo' src={light} alt="Luz" />
    </header>

  );
}

export default Header;

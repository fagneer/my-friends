import '../../../assets/css/Page.css';
import earth from '../../../assets/img/simbolos/img-earth.png';

function addBodyClass() {
  document.body.classList.add('define-body-earth');
}

function Header() {
  addBodyClass();
  return (
    
    <header id='earth' className="Page-header">
            <img className='Page-logo' src={earth} alt="Terra" />
    </header>

  );
}

export default Header;

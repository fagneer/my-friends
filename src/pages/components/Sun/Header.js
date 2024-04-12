import '../../../assets/css/Page.css';
import sun from '../../../assets/img/simbolos/img-sun.png';

function addBodyClass() {
  document.body.classList.add('define-body-sun');
}

function Header() {
  addBodyClass();
  return (
    
    <header id='sun' className="Page-header">
            <img className='Page-logo' src={sun} alt="Sol" />
    </header>

  );
}

export default Header;

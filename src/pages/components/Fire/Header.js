import '../../../assets/css/Page.css';
import fire from '../../../assets/img/simbolos/img-fire.png';

function addBodyClass() {
  document.body.classList.add('define-body-fire');
}

function Header() {
  addBodyClass();
  return (
    
    <header id='fire' className="Page-header">
            <img className='Page-logo' src={fire} alt="Fogo" />
    </header>

  );
}

export default Header;

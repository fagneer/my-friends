import '../../../assets/css/Page.css';
import moon from '../../../assets/img/simbolos/img-moon.png';

function addBodyClass() {
  document.body.classList.add('define-body-moon');
}

function Header() {
  addBodyClass();

  return (
    <header id='moon' className="Page-header">
      <img className='Page-logo' src={moon} alt="Lua" />
    </header>
  );

  }
export default Header;

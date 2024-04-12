// import logo from '../assets/img/logo.png';
import '../App.css';
import AuroraButton from './components/Menu/Button/AuroraButton';
import SnowButton from './components/Menu/Button/SnowButton';
import EarthButton from './components/Menu/Button/EarthButton';
import FireButton from './components/Menu/Button/FireButton';
import LightButton from './components/Menu/Button/LightButton';
import MoonButton from './components/Menu/Button/MoonButton';
import SunButton from './components/Menu/Button/SunButton';
import WindButton from './components/Menu/Button/WindButton';
import MenuHeader from './components/Menu/MenuHeader';
import Footer from './components/Footer';

function Menu() {
  return (
    <div className="Menu">
      <MenuHeader />
      <div className="Menu-body">
        <MoonButton />
        <SunButton />
        <EarthButton />
        <WindButton />
        <FireButton />
        <LightButton />
        <AuroraButton />  
        <SnowButton /> 
      </div>
      <div className="Menu-footer">
        <Footer />
      </div>
    </div>

  );
}

export default Menu;

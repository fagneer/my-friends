import logo from '../assets/img/logo.png';
import '../App.css';
import BotaoComecar from './components/Home/BotaoComecar';
import TextoBoasVindas from './components/Home/TextoBoasVindas';  

function Home() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <TextoBoasVindas />

      <BotaoComecar />

    </header>
  </div>
  );
}

export default Home;

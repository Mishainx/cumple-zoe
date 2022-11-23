import './Home.scss';
import InfoButton from './components/infoButton/infoButton';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='rainbowContainer'>
      <img className="rainbow" src='/img/rainbow-2.png'/>

      </div>
      <Link to="/invitacion"><InfoButton/></Link>
      <div className='panecilloContainer'>
        <img className="panecillo" src='/img/panecillo-2.png'/>
      </div>
    </div>

  );
}

export default App;

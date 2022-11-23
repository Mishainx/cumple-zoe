import './Home.scss';
import InfoButton from './components/infoButton/infoButton';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/invitacion"><InfoButton/></Link>
      <div className='panecilloContainer'>
        <img className="panecillo" src='/img/panecillo.png'/>
      </div>
    </div>

  );
}

export default App;

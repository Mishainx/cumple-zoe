import './Home.scss';
import Panecillo from './components/panecillo/panecillo';
import Rainbow from './components/rainbow/rainbow';
import InfoButton from './components/infoButton/infoButton';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Rainbow/>
      <Link to="/invitacion"><InfoButton/></Link>
      <Panecillo/>
    </div>
  );
}

export default App;

import './App.scss';
import Panecillo from './components/panecillo/panecillo';
import Rainbow from './components/rainbow/rainbow';
import InfoButton from './components/infoButton/infoButton';

function App() {
  return (
    <div className="App">
      <Rainbow/>
      <InfoButton/>
      <Panecillo/>
    </div>
  );
}

export default App;

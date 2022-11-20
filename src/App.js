import './App.scss';
import Panecillo from './components/panecillo/panecillo';
import Title from './components/Title/title';

function App() {
  return (
    <div className="App">
      <div className="CardContainer">
      <Title/>
      <Panecillo/>
      </div>

    </div>
  );
}

export default App;

import './App.scss';
import Panecillo from './components/panecillo/panecillo';
import Title from './components/Title/title';
import Recuadro from './components/recuadro/recuadro';

function App() {
  return (
    <div className="App">
      <Title/>
      <Recuadro/>
      <Panecillo/>

    </div>
  );
}

export default App;

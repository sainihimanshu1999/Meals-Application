import logo from './logo.svg';
import './App.css';
import Meals from './Components/Meals';
import Favorites from './Components/Favorites';
import Modal from './Components/Modal';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Meals app
        <Meals/>
      </header>
    </div>
  );
}

export default App;

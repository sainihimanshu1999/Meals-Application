import logo from './logo.svg';
import './App.css';
import Meals from './Components/Meals';
import Favorites from './Components/Favorites';
import Modal from './Components/Modal';
import Search from './Components/Search';

import { useGlobalContext } from './Context';

function App() {

  const {showModal,favorites} = useGlobalContext()

  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        {favorites.length >0 && <Favorites/>}
        <Meals/>
        {showModal && <Modal/>}
      </header>
    </div>
  );
}

export default App;

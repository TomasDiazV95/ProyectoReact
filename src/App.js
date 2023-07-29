import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;

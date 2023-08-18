import NavBar from './Components/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartWidget from './Components/CartWidget';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer value='Bienvenido'/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer value='Bienvenido'/>} />
      <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<CartWidget/>} />
    </Routes>
    {/* <ItemListContainer value='Mensaje de prueba' />
    <ItemDetailContainer/> */}
    </BrowserRouter>
  )
}

export default App;
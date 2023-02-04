import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Availableproducts from './Components/Availableproducts';
import Contanctus from './Components/Contanctus';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Ourservices from './Components/Ourservices';

function App() {
  return (
    <div className="App">
        <Header/>
        
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='about' element={<Aboutus/>}/>
          <Route path='products' element={<Availableproducts/>}/>
          <Route path='services' element={<Ourservices/>}/>
          <Route path='contact' element={<Contanctus/>}/>
        </Routes>
    </div>
  );
}

export default App;

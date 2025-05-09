
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactUs' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

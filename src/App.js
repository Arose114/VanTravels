import './App.css';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Van from './Components/Van';
import VanDetails from './Components/VanDetails';

import './server'


function App() {
  return (
    <div className="container col-md-8 col-lg-8 mt-3 bg-light">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/vans' element={<Van />}></Route>
        <Route path="/vans/:id" element={<VanDetails />} />

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <div className="container col-md-8 col-lg-8 mt-3 bg-light">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

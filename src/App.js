import './App.css';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Van from './Components/Van';
import VanDetails from './Components/VanDetails';

import './server'
import Layout from './Components/Layout';
import Dashboard from './Components/Hosts/Dashboard';
import Income from './Components/Hosts/Income';
import Reviews from './Components/Hosts/Reviews';
import HostLayout from './Components/HostLayout';
import Vans from './Components/Hosts/Vans';
import HostVanDetails from './Components/Hosts/HostVanDetails';
import HostVanDetailsPricing from './Components/Hosts/HostVanDetailsPricing';
import HostVanDetailsDescription from './Components/Hosts/HostVanDetailsDescription';
import HostVanDetailsPhotos from './Components/Hosts/HostVanDetailsPhotos';


function App() {
  return (
    <div className="container col-md-8 col-lg-8 mt-3 bg-light">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='vans' element={<Van />}></Route>
        <Route path="vans/:id" element={<VanDetails />} />
        <Route path='/host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<Vans />} />
        { /*making the van:id page relative to the navigation for pricing, photos and description }
        {*/}
        <Route path="vans/:id" element={<HostVanDetails />} >
        <Route index element={<HostVanDetailsDescription/>} />
        <Route path="pricing" element={<HostVanDetailsPricing />} />
        <Route path="photos" element={<HostVanDetailsPhotos/>} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

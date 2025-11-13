import './App.css';
import Home from './components/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Facility from './pages/Facility/Facility';
import Gallery from './pages/Gallery/Gallery';
import News from './pages/News/News';
import Price from './pages/Price/Price';
import Schedulle from './pages/Schedulle/Schedulle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/schedulle' element={<Schedulle />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/news' element={<News />} />
        <Route path='/price' element={<Price />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/facility' element={<Facility />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

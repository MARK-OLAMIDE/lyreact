import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Founder from './pages/Founder';
import Mentorship from './pages/Mentorship';
import Devotional from './pages/Devotional';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/founder' element={<Founder />} />
        <Route path='/mentorship' element={<Mentorship />} />
        <Route path='/devotional' element={<Devotional />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

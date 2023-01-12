import './App.css';
import './style.bundle.css';
import Navbar from './components/Navbar';
import Enrolled from './components/Enrolled';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div className='mx-15 mt-2'>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/enrolled" element={<Enrolled />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

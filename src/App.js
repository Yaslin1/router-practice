import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Err404 from "./pages/Err404";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* /path is always lowercase */}
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/about" element={ <About/>} /> /
        <Route path="/" element={ <Home/>} />
        <Route path="*" element={ <Err404 />} /> 
        {/* * means everything besides those on the list. Would typically be a catch all. Always put catch all at end since it will stop running */}
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;

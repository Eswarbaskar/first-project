import './App.css';
 
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navhead from './component/Navhead';
import {
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";






function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navhead/>
      <Container>
        
      
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
          
          

        </Routes>
        </Container>
      </BrowserRouter>

    </div>
  );
}

export default App;

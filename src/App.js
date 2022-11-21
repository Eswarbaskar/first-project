import './App.css';

import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navhead from './component/Navhead';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Colourgame from './pages/Colourgame';
// import Login from './pages/Login';
// import Signup from './pages/Signup';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navhead />
         <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Colourgame/>} />
          {/* <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Signup/>} /> */}
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

import './index.css'
import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;
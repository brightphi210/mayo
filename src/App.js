import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

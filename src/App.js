import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Animal from "./Components/Animal";
import NewAnimal from "./Components/NewAnimal";
// Home, New, AnimalView

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/animal/:id' element={<Animal />} />
          <Route path='/animal/new' element={<NewAnimal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

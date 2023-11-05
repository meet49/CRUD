import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create'; 
import Update from './components/Update'; 
import Read from './components/Read'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path='/read/:id' element={<Read />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

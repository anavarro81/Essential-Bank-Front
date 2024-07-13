
import './App.css'
import Login from './pages/Login/Login.jsx'
import Register from "./pages/register/Register.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register2 from './pages/register/Register2.jsx';
import Register3 from './pages/register/Register3.jsx';

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/RegisterPaso2' element={<Register2 />} />
          <Route path='/RegisterPaso3' element={<Register3 />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

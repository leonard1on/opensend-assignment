import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from './Views/Admin/Admin';
import Dashboard from './Views/Dashboard/Dashboard';
import Landing from './Views/Landing/Landing';
import Onboarding from './Views/Onboarding/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="/Onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

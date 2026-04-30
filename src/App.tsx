import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import APropos from './pages/APropos';
import Solutions from './pages/Solutions';
import ManufacturingPage from './pages/ManufacturingPage';
import Distribution from './pages/Distribution';
import Actualites from './pages/Actualites';
import Ressources from './pages/Ressources';
import Carriere from './pages/Carriere';
import Contact from './pages/Contact';
import Support from './pages/Support';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/carriere" element={<Carriere />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

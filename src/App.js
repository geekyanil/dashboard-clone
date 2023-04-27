import './App.css';
import Sidenavbar from './components/Sidenavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidenavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<Products />} />
          <Route path="/dashboard/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

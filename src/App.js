import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItems from './pages/AddItems';
import { DetailsPage } from './pages/DetailsPage';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailsPage />} />
        <Route path="/add" element={<AddItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

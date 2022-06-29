import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailsPage } from './pages/DetailsPage';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

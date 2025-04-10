import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        
        {/* Add other routes here when needed */}
        <Route path="*" element={<div className="min-h-[60vh] flex items-center justify-center">Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
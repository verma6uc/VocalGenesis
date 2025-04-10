import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              VoiceBox
            </h1>
            <p className="text-xl md:text-2xl text-neutral-medium mb-8 max-w-3xl mx-auto">
              The AI-Powered Voice Revolution - Project Setup Complete
            </p>
          </div>
        </div>} />
        
        {/* Add other routes here when needed */}
        <Route path="*" element={<div className="min-h-[60vh] flex items-center justify-center">Page not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<div className="pt-16">About Page (Coming Soon)</div>} />
          <Route path="/resources" element={<div className="pt-16">Resources (Coming Soon)</div>} />
          <Route path="/news" element={<div className="pt-16">News (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import DashboardLayout from './components/layouts/DashboardLayout';
import CarbonPools from './pages/carbon_pools';
import Explorer from './pages/explorer';
import CrossChain from './pages/cross_chain';
import Retirements from './pages/retirements';

const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen">
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<div className="pt-16">About Page (Coming Soon)</div>} />
        <Route path="/resources" element={<div className="pt-16">Resources (Coming Soon)</div>} />
        <Route path="/news" element={<div className="pt-16">News (Coming Soon)</div>} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/dashboard/carbon-pools" element={<DashboardLayout><CarbonPools /></DashboardLayout>} />
        <Route path="/dashboard/explorer" element={<DashboardLayout><Explorer /></DashboardLayout>} />
        <Route path="/dashboard/cross-chain" element={<DashboardLayout><CrossChain /></DashboardLayout>} />
        <Route path="/dashboard/retirements" element={<DashboardLayout><Retirements /></DashboardLayout>} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

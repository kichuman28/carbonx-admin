import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('overview');

  const stats = [
    {
      title: "Total Carbon Bridged",
      value: "21,890,661",
      unit: "TCO2"
    },
    {
      title: "Total Carbon Locked",
      value: "19,905,783",
      unit: "TCO2"
    },
    {
      title: "Total Liquidity",
      value: "1,810,027",
      unit: "USD"
    },
    {
      title: "Total Carbon Retired",
      value: "210,338",
      unit: "TCO2"
    }
  ];

  const sidebarLinks = [
    { name: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Carbon Pools', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'Explorer', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
    { name: 'Cross-Chain', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { name: 'Retirements', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  ];

  return (
    <div className="flex h-screen bg-[#0F172A] overflow-hidden">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ width: isSidebarOpen ? 240 : 80 }}
          animate={{ width: isSidebarOpen ? 240 : 80 }}
          exit={{ width: 80 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-full bg-[#1E293B]/50 backdrop-blur-xl border-r border-[#76EAD7]/10 flex flex-col relative"
        >
          {/* Logo */}
          <div className={`p-6 flex items-center ${isSidebarOpen ? 'justify-between' : 'justify-center'}`}>
            <motion.div
              initial={{ opacity: isSidebarOpen ? 1 : 0 }}
              animate={{ opacity: isSidebarOpen ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-bold gradient-text"
            >
              carbonX
            </motion.div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute -right-3 top-9 p-1.5 rounded-full bg-[#1E293B] border border-[#76EAD7]/20 text-[#76EAD7] hover:bg-[#76EAD7]/10 transition-colors duration-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {sidebarLinks.map((link) => (
              <motion.div
                key={link.name}
                className="w-full"
                initial={false}
              >
                <motion.button
                  onClick={() => setSelectedTab(link.name.toLowerCase())}
                  className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300
                    ${selectedTab === link.name.toLowerCase()
                      ? 'bg-gradient-to-r from-[#76EAD7]/20 to-[#C4FB6D]/20 text-white'
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                  </div>
                  <motion.div
                    initial={{ opacity: 1, width: 'auto' }}
                    animate={{ 
                      opacity: isSidebarOpen ? 1 : 0,
                      width: isSidebarOpen ? 'auto' : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 font-medium overflow-hidden whitespace-nowrap"
                  >
                    {link.name}
                  </motion.div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                className="bg-[#1E293B]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#76EAD7]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-[#94A3B8] text-sm mb-2">{stat.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="ml-2 text-sm text-[#76EAD7]">{stat.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pool Information */}
          <div className="bg-[#1E293B]/50 backdrop-blur-xl rounded-2xl p-6 border border-[#76EAD7]/10 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Toucan Biochar Carbon Pool (CHAR)</h2>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-white">$147.19</span>
                <button className="btn-primary">Buy CHAR</button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#94A3B8]">Pool Composition</span>
                <span className="text-white">Credits deposited into pool: 1,357 TCO2</span>
              </div>
              <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1E293B]/50 backdrop-blur-xl rounded-2xl border border-[#76EAD7]/10 overflow-hidden">
            <div className="p-6 border-b border-[#76EAD7]/10">
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#76EAD7]/10">
                    <th className="px-6 py-4 text-left text-sm font-medium text-[#94A3B8]">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[#94A3B8]">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[#94A3B8]">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-[#94A3B8]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#76EAD7]/10">
                  {activities.map((activity, index) => (
                    <tr key={index} className="hover:bg-white/5">
                      <td className="px-6 py-4 text-sm text-white">{activity.type}</td>
                      <td className="px-6 py-4 text-sm text-white">{activity.amount}</td>
                      <td className="px-6 py-4 text-sm text-[#94A3B8]">{activity.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${activity.status === 'Completed' ? 'bg-[#C4FB6D]/10 text-[#C4FB6D]' : 
                            activity.status === 'Pending' ? 'bg-yellow-400/10 text-yellow-400' :
                            'bg-red-400/10 text-red-400'
                          }`}>
                          {activity.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const activities = [
  {
    type: 'Purchase',
    amount: '50 Credits',
    date: 'Mar 5, 2024',
    status: 'Completed'
  },
  {
    type: 'Sale',
    amount: '20 Credits',
    date: 'Mar 4, 2024',
    status: 'Pending'
  },
  {
    type: 'Transfer',
    amount: '30 Credits',
    date: 'Mar 3, 2024',
    status: 'Completed'
  },
  {
    type: 'Purchase',
    amount: '100 Credits',
    date: 'Mar 2, 2024',
    status: 'Failed'
  }
];

export default Dashboard; 
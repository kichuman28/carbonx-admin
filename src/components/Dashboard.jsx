import { motion } from 'framer-motion';
import { useState } from 'react';

const Dashboard = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Monitor your carbon credits and impact on the environment
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2">
          {['overview', 'transactions', 'portfolio', 'impact'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base capitalize whitespace-nowrap
                ${selectedTab === tab
                  ? 'bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] text-[#0F172A] font-semibold'
                  : 'text-[#94A3B8] hover:text-white bg-white/5 hover:bg-white/10'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Credits Card */}
          <motion.div
            className="bg-[#1E293B]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#76EAD7]/10"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">Total Credits</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">1,234</h3>
              </div>
              <div className="p-2 bg-[#76EAD7]/10 rounded-lg">
                <svg className="w-6 h-6 text-[#76EAD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-[#C4FB6D] text-sm font-medium">+12.5%</span>
              <span className="text-[#94A3B8] text-sm ml-2">from last month</span>
            </div>
          </motion.div>

          {/* Impact Card */}
          <motion.div
            className="bg-[#1E293B]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#76EAD7]/10"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">CO₂ Offset</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">45.2t</h3>
              </div>
              <div className="p-2 bg-[#C4FB6D]/10 rounded-lg">
                <svg className="w-6 h-6 text-[#C4FB6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-[#C4FB6D] text-sm font-medium">+3.2t</span>
              <span className="text-[#94A3B8] text-sm ml-2">this week</span>
            </div>
          </motion.div>

          {/* Value Card */}
          <motion.div
            className="bg-[#1E293B]/50 backdrop-blur-lg rounded-2xl p-6 border border-[#76EAD7]/10"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-[#94A3B8] mb-1">Portfolio Value</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">$24,500</h3>
              </div>
              <div className="p-2 bg-[#76EAD7]/10 rounded-lg">
                <svg className="w-6 h-6 text-[#76EAD7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-[#C4FB6D] text-sm font-medium">+$1,200</span>
              <span className="text-[#94A3B8] text-sm ml-2">past 24h</span>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="bg-[#1E293B]/50 backdrop-blur-lg rounded-2xl border border-[#76EAD7]/10 overflow-hidden">
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
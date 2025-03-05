import { motion } from 'framer-motion';

const Dashboard = () => {
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
    <div className="min-h-screen pt-16 bg-gradient-to-b from-[#EEEEEE] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="p-6 rounded-2xl bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <div className="mt-2 flex items-baseline">
                <p className="text-3xl font-semibold gradient-text">{stat.value}</p>
                <p className="ml-2 text-sm font-medium text-gray-500">{stat.unit}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Carbon Pools */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Carbon Pools</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((pool) => (
                  <div
                    key={pool}
                    className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Pool #{pool}</h3>
                        <p className="text-sm text-gray-500">1,357 TCO2</p>
                      </div>
                      <button className="btn-secondary text-sm">Trade</button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Activity Feed */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((activity) => (
                <div
                  key={activity}
                  className="flex items-center space-x-3 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-[#76EAD7]" />
                  <p className="text-gray-600">
                    Carbon credit retired: {activity}00 TCO2
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    // Trigger the transition after 2.5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Background Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] blur-[100px] opacity-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1 }}
        />

        {/* Logo Container */}
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo Text */}
          <motion.h1
            className="text-6xl font-bold"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] text-transparent bg-clip-text">
              carbonX
            </span>
          </motion.h1>

          {/* Animated Line */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] mt-4"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Tagline */}
          <motion.p
            className="mt-4 text-[#94A3B8] text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Bridging Carbon Credits
          </motion.p>

          {/* Loading Dots */}
          <motion.div
            className="flex space-x-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-[#76EAD7]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen; 
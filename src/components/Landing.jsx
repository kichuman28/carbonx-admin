import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CarbonXModel } from './CarbonXModel';
import { Suspense, useState, useEffect } from 'react';

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen pt-12 sm:pt-16 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="animated-bg">
        {/* Primary blob */}
        <motion.div
          className="animated-blob"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
            x: [0, 50, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '20%',
            left: '10%',
            width: 'min(800px, 100vw)',
            height: 'min(800px, 100vh)',
            background: 'radial-gradient(circle at center, rgba(118, 234, 215, 0.2), rgba(196, 251, 109, 0.1))',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        {/* Secondary blob */}
        <motion.div
          className="animated-blob"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -35, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '60%',
            right: '15%',
            width: 'min(700px, 90vw)',
            height: 'min(700px, 90vh)',
            background: 'radial-gradient(circle at center, rgba(118, 234, 215, 0.15), rgba(196, 251, 109, 0.05))',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />
        {/* Additional accent blobs */}
        <motion.div
          className="animated-blob hidden sm:block"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            top: '30%',
            right: '30%',
            width: 'min(400px, 50vw)',
            height: 'min(400px, 50vh)',
            background: 'radial-gradient(circle at center, rgba(196, 251, 109, 0.15), rgba(118, 234, 215, 0.05))',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          className="animated-blob hidden sm:block"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            bottom: '20%',
            left: '30%',
            width: 'min(300px, 40vw)',
            height: 'min(300px, 40vh)',
            background: 'radial-gradient(circle at center, rgba(118, 234, 215, 0.2), rgba(196, 251, 109, 0.05))',
            borderRadius: '50%',
            filter: 'blur(40px)',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-8 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Left side - Enhanced Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-left pt-4 sm:pt-8 lg:pt-0 relative order-2 lg:order-1"
              style={{ 
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-[#76EAD7] via-[#C4FB6D] to-transparent mb-4 sm:mb-8 
                          rounded-full"
              />
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="relative inline-block">
                  The Future of
                </span>
                <motion.span 
                  className="gradient-text block mt-1 sm:mt-2 relative"
                  whileHover={{ 
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Carbon Credits
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-[#94A3B8] mb-6 sm:mb-12 max-w-xl leading-relaxed
                          hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Join the revolution in sustainable finance. Trade, track, and make 
                a real impact on climate change with blockchain technology.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/dashboard" className="btn-primary">
                    Get Started
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#learn-more" className="btn-secondary w-full sm:w-auto text-center relative z-10
                    px-8 py-3 rounded-lg border-2 border-[#76EAD7] text-white font-semibold
                    transition-all duration-300 bg-[#0F172A]/80 backdrop-blur-sm
                    hover:bg-gradient-to-r hover:from-[#76EAD7]/20 hover:to-[#C4FB6D]/20
                    hover:border-[#C4FB6D] hover:text-white
                    hover:shadow-[0_0_20px_rgba(118,234,215,0.3)] overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[300px] sm:h-[400px] md:h-[560px] relative model-container order-1 lg:order-2"
              style={{ 
                transform: `translateY(${scrollY * -0.05}px)`,
                transition: 'transform 0.2s ease-out'
              }}
            >
              <div className="absolute inset-0">
                <Suspense fallback={
                  <motion.div 
                    className="text-center text-[#94A3B8] flex items-center justify-center h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-transparent border-t-[#76EAD7] border-r-[#76EAD7] rounded-full animate-spin mb-3"></div>
                      <p>Loading 3D Model...</p>
                    </div>
                  </motion.div>
                }>
                  <CarbonXModel 
                    modelPath="/x.glb"
                    posterPath="/poster.webp"
                  />
                </Suspense>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section id="learn-more" className="py-12 sm:py-20 relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">Revolutionizing</span> Carbon Markets
            </h2>
            <p className="text-[#94A3B8] max-w-xl mx-auto">
              Our platform offers unique features that make carbon trading more accessible, transparent, and impactful.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="feature-icon flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-[#94A3B8]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Stats Counter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-6 sm:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <p className="gradient-text text-2xl sm:text-3xl md:text-4xl font-bold">{stat.value}+</p>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make a <span className="gradient-text">Difference</span>?
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10">
            Join thousands of individuals and organizations already making an impact on our planet through carbon credit trading.
          </p>
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/dashboard" className="btn-primary">
              Start Your Journey Today
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Background Effect */}
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-64 opacity-30 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            background: 'linear-gradient(to top, rgba(118, 234, 215, 0.15), transparent)'
          }}
        />
      </section>
    </div>
  );
};

const features = [
  {
    title: "Blockchain Transparency",
    description: "Every transaction is recorded on the blockchain, ensuring complete transparency and preventing fraud.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
  },
  {
    title: "AI-Powered Verification",
    description: "Advanced AI and satellite imaging ensure the authenticity of carbon credit projects.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "Inclusive Ecosystem",
    description: "From individuals to corporations, everyone can participate in carbon credit trading.",
    icon: <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  }
];

const stats = [
  { value: "50K", label: "Active Users" },
  { value: "2.5M", label: "Carbon Credits Traded" },
  { value: "120", label: "Projects Supported" },
  { value: "28", label: "Countries Worldwide" }
];

export default Landing; 
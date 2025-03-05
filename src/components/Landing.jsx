import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { CarbonXModel } from './CarbonXModel';
import { Suspense } from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen pt-12 sm:pt-16 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="animated-bg">
        {/* Primary blob - Adjusted for mobile */}
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
        {/* Secondary blob - Adjusted for mobile */}
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
        {/* Additional accent blobs - Adjusted for mobile */}
        <motion.div
          className="animated-blob hidden sm:block"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
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
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="h-1.5 bg-gradient-to-r from-[#76EAD7] via-[#C4FB6D] to-transparent mb-4 sm:mb-8 
                          rounded-full"
              />
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight
                         text-shadow-neon relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="relative inline-block">
                  The Future of
                </span>
                <motion.span 
                  className="gradient-text block mt-1 sm:mt-2 relative glow-text"
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: "0 0 15px rgba(118,234,215,0.5), 0 0 30px rgba(196,251,109,0.3)"
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
                  className="relative group"
                >
                  <Link to="/dashboard" className="btn-primary w-full sm:w-auto text-center relative z-10 
                    px-8 py-3 rounded-lg bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] text-black font-semibold
                    transition-all duration-300 hover:shadow-[0_0_20px_rgba(118,234,215,0.5)]
                    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r 
                    before:from-[#C4FB6D] before:to-[#76EAD7] before:opacity-0 before:transition-opacity
                    before:duration-300 hover:before:opacity-100 before:rounded-lg overflow-hidden">
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
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
            >
              <div className="absolute inset-0">
                <Suspense fallback={
                  <motion.div 
                    className="text-center text-[#94A3B8] flex items-center justify-center h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Loading 3D Model...
                  </motion.div>
                }>
                  <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    style={{ background: 'transparent' }}
                    gl={{
                      antialias: true,
                      powerPreference: "high-performance",
                      failIfMajorPerformanceCaveat: true,
                      preserveDrawingBuffer: true
                    }}
                    dpr={[1, 2]}
                    performance={{ min: 0.5 }}
                  >
                    <ambientLight intensity={0.4} />
                    <directionalLight 
                      position={[5, 5, 5]} 
                      intensity={0.8}
                      castShadow
                    />
                    <pointLight
                      position={[-10, -10, -10]}
                      color="#76EAD7"
                      intensity={0.3}
                    />
                    <pointLight
                      position={[10, 10, 10]}
                      color="#C4FB6D"
                      intensity={0.2}
                    />
                    <Suspense fallback={null}>
                      <CarbonXModel modelPath="/x.glb" />
                      <Environment preset="night" />
                    </Suspense>
                    <ContactShadows
                      opacity={0.3}
                      scale={12}
                      blur={3}
                      far={4.5}
                      resolution={256}
                      color="#000000"
                    />
                    <OrbitControls
                      enablePan={false}
                      enableZoom={false}
                      minPolarAngle={0}
                      maxPolarAngle={Math.PI}
                      autoRotate
                      autoRotateSpeed={2}
                    />
                  </Canvas>
                </Suspense>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section id="learn-more" className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card backdrop-blur-lg bg-white/5 p-6 rounded-xl border border-white/10
                          hover:border-[#76EAD7]/30 transition-all duration-300
                          hover:shadow-[0_0_30px_rgba(118,234,215,0.15)]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <motion.div 
                  className="feature-icon flex items-center justify-center w-12 h-12 rounded-lg
                            bg-gradient-to-br from-[#76EAD7]/20 to-[#C4FB6D]/20 mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(118,234,215,0.3)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white
                             bg-gradient-to-r from-white to-white bg-clip-text hover:text-transparent
                             transition-all duration-300">{feature.title}</h3>
                <p className="text-sm sm:text-base text-[#94A3B8] group-hover:text-white
                            transition-colors duration-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add global styles */}
      <style jsx global>{`
        .text-shadow-neon {
          text-shadow: 0 0 10px rgba(255,255,255,0.3);
        }
        
        .gradient-text {
          background: linear-gradient(to right, #76EAD7, #C4FB6D);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }
        
        .glow-text {
          filter: drop-shadow(0 0 15px rgba(118,234,215,0.3));
        }
        
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(118,234,215,0.3); }
          50% { border-color: rgba(196,251,109,0.3); }
        }
      `}</style>
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

export default Landing; 
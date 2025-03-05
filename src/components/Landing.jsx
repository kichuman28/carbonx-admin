import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import { CarbonXModel } from './CarbonXModel';
import { Suspense } from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-[#EEEEEE] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left lg:pt-0 pt-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The Future of
                <span className="gradient-text block mt-2">Carbon Credits</span>
              </h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Join the revolution in sustainable finance. Trade, track, and make 
                a real impact on climate change with blockchain technology.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/dashboard" className="btn-primary text-white">
                  Get Started
                </Link>
                <a href="#learn-more" className="btn-secondary">
                  Learn More
                </a>
              </motion.div>
            </motion.div>

            {/* Right side - 3D Model */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="h-[500px] relative"
            >
              <div className="absolute inset-0">
                <Suspense fallback={<div className="text-center">Loading 3D Model...</div>}>
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
                    <ambientLight intensity={0.5} />
                    <directionalLight 
                      position={[5, 5, 5]} 
                      intensity={0.8} 
                      castShadow
                    />
                    <Suspense fallback={null}>
                      <CarbonXModel modelPath="/x.glb" />
                      <Environment preset="city" />
                    </Suspense>
                    <ContactShadows
                      opacity={0.4}
                      scale={10}
                      blur={2}
                      far={4}
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

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#76EAD7]/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C4FB6D]/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="learn-more" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-[#76EAD7] to-[#C4FB6D] flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
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

export default Landing; 
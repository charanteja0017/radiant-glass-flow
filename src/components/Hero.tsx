
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const typingStrings = [
    "Full Stack Developer", 
    "Problem Solver", 
    "Tech Enthusiast"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Orbitron']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-primary">Charan</span>
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-xl text-white/80 mb-10 h-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypingEffect 
              strings={typingStrings} 
              typingSpeed={100} 
              backspaceSpeed={50} 
              delayBetweenStrings={2000}
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary relative overflow-hidden group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-primary/30 blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-outline group relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 2, 
          ease: "easeInOut" 
        }}
      >
        <motion.a 
          href="#about" 
          className="flex items-center justify-center w-10 h-10 rounded-full text-white/70 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-10 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </section>
  );
};

export default Hero;

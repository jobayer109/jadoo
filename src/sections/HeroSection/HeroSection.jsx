import { motion } from 'framer-motion';
import Button from '../../components/Button';

const HeroSection = () => {
  return (
    <section className="relative z-10 pt-8 lg:pt-0 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[600px] lg:min-h-[764px] relative">
        
        {/* Left Content */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-[28px] mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="brand-color font-bold text-sm lg:text-[20px] leading-6 lg:leading-[30px] uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Best Destinations around the world
          </motion.p>

          <div className="relative z-0">
            <motion.h1 
              className="font-bold text-4xl sm:text-4xl md:text-5xl lg:text-[80px] leading-tight lg:leading-[89px] mb-4 sm:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Travel, <span className="relative z-10">enjoy</span> <br />
              and live a new<br />
              and full life
            </motion.h1>

            <motion.img 
              src="/images/hero/text-decore.svg" 
              alt="Text Decoration" 
              className="hidden lg:block absolute top-18 left-65 z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>

          <motion.p 
            className="text-muted font-medium text-sm sm:text-base lg:text-[16px] leading-6 lg:leading-[30px] max-w-md lg:max-w-[477px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button 
              type="heroButton" 
              className="w-full sm:w-auto px-6 py-3 text-lg sm:px-8 sm:py-4 sm:text-xl rounded-[10px] cursor-pointer"
            >
              Find out more
            </Button>

            <div className="flex items-center gap-4 sm:ml-4">
              <Button 
                type="playButton"
                className="flex items-center justify-center hover:scale-105 transition-transform duration-200"
              >
                <img 
                  src="/images/hero/play-button.svg" 
                  alt="Play button" 
                  className="w-4 h-4 ml-1"
                />
              </Button>
              <span className="text-muted font-medium text-sm sm:text-base lg:text-[17px] leading-6 lg:leading-[26px]">
                Play Demo
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          className=" right-10 w-full lg:w-1/2  flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.img 
            src="/images/hero/traveller.png" 
            alt="Traveller" 
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[764px] object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Plane SVGs */}
          <motion.img 
            src="/images/hero/plane.svg" 
            alt="Plane" 
            className="hidden lg:block absolute top-[60px] right-[380px] w-[100px] h-[70px]" 
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.img 
            src="/images/hero/plane.svg" 
            alt="Plane" 
            className="hidden lg:block absolute top-[200px] right-[0px] w-[100px] h-[70px]" 
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

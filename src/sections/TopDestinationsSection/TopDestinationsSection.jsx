import { motion } from 'framer-motion';
import DestinationCard from '../../components/DestinationCard';
import SectionTitle from '../../components/SectionTitle';
// Images
import europeImage from '/images/top-destination/europe.png';
import londonImage from '/images/top-destination/london.png';
import romeImage from '/images/top-destination/rome.png';

const destinationsData = [
  {
    image: romeImage,
    title: 'Rome, Italy',
    subtitle: '10 Days Trip',
    price: '5,42k',
    days: 10,
  },
  {
    image: londonImage,
    title: 'London, UK',
    subtitle: '12 Days Trip',
    price: '4.2k',
    days: 12,
  },
  {
    image: europeImage,
    title: 'Paris, Europe',
    subtitle: '26 Days Trip',
    price: '5.1k',
    days: 26,
  },
];

const TopDestinationsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="max-w-7xl w-full px-4 mx-auto py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <SectionTitle category="Top Selling" title="Top Destinations" className='text-center'/>
      <motion.div
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 z-10 items-center justify-items-center lg:justify-items-start"
        variants={containerVariants}
      >
        {destinationsData.map((destination, index) => (
          <motion.div key={index} variants={itemVariants}>
            <DestinationCard
              image={destination.image}
              title={destination.title}
              subtitle={destination.subtitle}
              price={destination.price}
              days={destination.days}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Decor image */}
      <motion.div
        className="hidden lg:block relative"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
            <img 
              src="/images/top-destination/shape.svg" 
              alt="shape" 
              className="absolute -bottom-[-100px] right-[25px] w-[96px] h-[282px]  "
            />
          </motion.div>
    </motion.section>
  );
};

export default TopDestinationsSection;

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
  return (
    <section className="max-w-7xl w-full px-4 mx-auto py-16">
      <SectionTitle category="Top Selling" title="Top Destinations" className='text-center'/>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 z-10 items-center justify-items-center lg:justify-items-start">
  {destinationsData.map((destination, index) => (
    <DestinationCard
      key={index}
      image={destination.image}
      title={destination.title}
      subtitle={destination.subtitle}
      price={destination.price}
      days={destination.days}
    />
  ))}
</div>

      {/* Decor image */}
      <div className="hidden lg:block relative">
            <img 
              src="/images/top-destination/shape.svg" 
              alt="shape" 
              className="absolute -bottom-[-100px] right-[25px] w-[96px] h-[282px]  "
            />
          </div>
    </section>
  );
};

export default TopDestinationsSection;

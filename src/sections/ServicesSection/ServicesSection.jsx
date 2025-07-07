import SectionTitle from '../../components/SectionTitle';
import ServiceCard from '../../components/ServiceCard';

import bestFlightsIcon from '/images/services/best-flight.svg';
import customizationIcon from '/images/services/customization.svg';
import localEventsIcon from '/images/services/local-event.svg';
import calculatedWeatherIcon from '/images/services/weather.svg';

const servicesData = [
  {
    icon: calculatedWeatherIcon,
    title: 'Calculated Weather',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    icon: bestFlightsIcon,
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
  },
  {
    icon: localEventsIcon,
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferred to sportsmen it engrossed listening.',
  },
  {
    icon: customizationIcon,
    title: 'Customization',
    description: 'We provide customized solutions to meet your specific travel needs.',
  },
];

const ServicesSection = () => {
  return (
    <section className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <SectionTitle category="Category" title="We Offer Best Services" className="text-center" />

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
    {servicesData.map((service, index) => (
      <ServiceCard
        key={index}
        icon={service.icon}
        title={service.title}
        description={service.description}
        isSecond={index === 1}
      />
    ))}
  </div>
</section>

  );
};

export default ServicesSection;

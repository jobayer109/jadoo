import BookingStepsSection from './sections/BookingStepsSection/BookingStepsSection';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import HeroSection from './sections/HeroSection/HeroSection';
import NewsletterSection from './sections/NewsletterSection/NewsletterSection';
import PartnersLogo from './sections/PartnersLogo/PartnersLogo';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import TopDestinationsSection from './sections/TopDestinationsSection/TopDestinationsSection';

function App() {
  return (
    <main className='max-w-9xl mx-auto w-full relative z-10'>
      <img 
        src="/images/hero/hero-bg.png" 
        alt="Background" 
        className="absolute z-0 top-[-100px] right-0 w-[2400px] h-[900px] object-cover" 
      />
      <div className="w-full max-w-container-lg mx-auto lg:px-20">
        <Header />
        <HeroSection />
        <ServicesSection />
        <TopDestinationsSection />
        <BookingStepsSection />
        <TestimonialsSection />
        <PartnersLogo />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  )
}

export default App

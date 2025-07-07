const brandLogos = [
  {
    src: "/images/partners/axon.png",
    alt: "Axon Logo",
  },

  {
    src: "/images/partners/jetstar.png",
    alt: "Jetstar Logo",
  },
  {
    src: "/images/partners/expedia.png",
    alt: "Expedia Logo",
  },
  {
    src: "/images/partners/qantas.png",
    alt: "Qantas Logo",
  },
  {
    src: "/images/partners/alitalia.png",
    alt: "Alitalia Logo",
  },
];

const PartnersLogo = () => {
  return (
    <section className="px-4 sm:px-6">
      <div className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-4">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12">
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo.src}
                sizes={logo.size}
                alt={logo.alt}
                className="h-40 w-40 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersLogo;

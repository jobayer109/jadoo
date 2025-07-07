const linkGroups = [
  {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Mobile", href: "#mobile" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Help/FAQ", href: "#help" },
      { name: "Press", href: "#press" },
      { name: "Affilates", href: "#affilates" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Airlinefees", href: "#airlinefees" },
      { name: "Airline", href: "#airline" },
      { name: "Low fare Tips", href: "#lowfare" },
    ],
  },
];

const LinkGroup = ({ title, links }) => (
  <div className="flex flex-col gap-4 lg:gap-[22px] w-full sm:w-[38%] lg:w-auto">
    <h3 className="text-global-1 font-poppins font-bold text-lg sm:text-xl lg:text-[21px] leading-6 lg:leading-[32px]">
      {title}
    </h3>
    <ul role="list" className="flex flex-col gap-1 lg:gap-[4px]">
      {links.map((link, index) => (
        <li key={index} role="listitem">
          <a
            href={link.href}
            className="text-muted font-medium text-base sm:text-lg lg:text-[18px] leading-6 lg:leading-[27px] hover:text-global-3 transition-colors duration-200"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-4 relative overflow-hidden">
      {/* Background Shapes */}
       <div className="absolute bottom-0 right-0 w-[100px] h-[150px] bg-[#D5AEE4] opacity-[40%] -rotate-180 blur-3xl">
        </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto  sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4 lg:gap-[18px] w-full lg:w-[16%]">
            <img
              src="/logo.svg"
              alt="Jadoo Logo"
              className="w-24 h-8 sm:w-[100px] sm:h-[36px] lg:w-[120px] lg:h-[44px] mb-2 lg:mb-0"
              loading="lazy"
            />
            <p className="text-muted font-medium text-xs sm:text-sm lg:text-[13px] leading-4 lg:leading-[16px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between w-full lg:w-[60%] lg:mt-[14px]">
            <div className="flex flex-col sm:flex-row lg:flex-row gap-8 lg:gap-[80px] w-full lg:w-[62%]">
              {linkGroups.map((group, index) => (
                <LinkGroup
                  key={index}
                  title={group.title}
                  links={group.links}
                />
              ))}
            </div>

            <LinkGroup
              title={linkGroups[2].title}
              links={linkGroups[2].links}
            />
          </div>

          {/* Social & App Section */}
          <div className="flex flex-col gap-6 lg:gap-[24px] w-full lg:w-[28%]">
            <div className="flex gap-4 lg:gap-8 justify-start lg:justify-between lg:w-[82%]">
              <button
                className="group w-10 h-10 lg:w-[40px] lg:h-[40px] bg-global-8 rounded-[20px] flex items-center justify-center shadow-[0px_2px_10px_#00000019] hover:scale-105 transition-transform duration-200 hover:bg-social-hover hover:shadow-none"
                aria-label="Facebook"
              >
                <img
                  src="/images/footer/facebook.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </button>

              <div className="w-11 h-11 lg:w-[44px] lg:h-[44px]">
                <img
                  src="/images/footer/instagram.svg"
                  alt="Social media"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
                />
              </div>

              <button
                className="w-10 h-10 lg:w-[40px] lg:h-[40px] bg-global-8 rounded-[20px] flex items-center justify-center shadow-[0px_2px_10px_#00000019] hover:scale-105 transition-transform duration-200"
                aria-label="Instagram"
              >
                <img src="/images/footer/x.svg" alt="" className="w-4 h-3" />
              </button>
            </div>

            <div className="flex flex-col gap-2 lg:gap-[8px]">
              <p className="text-global-6 font-poppins font-medium text-lg sm:text-xl lg:text-[20px] leading-6 lg:leading-[30px]">
                Discover our app
              </p>
              <div className="flex gap-1.5 lg:gap-[6px] items-center">
                <button
                  className="hover:scale-105 transition-transform duration-200 cursor-pointer"
                  aria-label="Download on Google Play"
                >
                  <img
                    src="/images/footer/google-play.svg"
                    alt="Google Play"
                    className="w-20 h-7 lg:w-[100px] lg:h-[34px]"
                  />
                </button>
                <button
                  className="hover:scale-105 transition-transform duration-200 cursor-pointer"
                  aria-label="Download on App Store"
                >
                  <img
                    src="/images/footer/apple.svg"
                    alt="App Store"
                    className="w-20 h-7 lg:w-[100px] lg:h-[34px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 lg:mt-12 text-center">
          <p className="text-muted font-medium text-xs sm:text-sm lg:text-[14px] leading-4 lg:leading-[21px]">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

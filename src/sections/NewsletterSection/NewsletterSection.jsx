import EditText from "../../components/EditText";

const NewsletterSection = () => {
  return (
    <section className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-4 relative">
      <div className="mx-auto relative">
        {/* Background */}
        <div
          className="absolute inset-0 rounded-t-[20px] lg:rounded-t-[129px] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/newsletter/bg.svg)" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center py-16 lg:py-20 px-6 lg:px-14">
          <h2 className="text-muted font-semibold text-2xl sm:text-2xl lg:text-[33px] leading-tight lg:leading-[54px] mb-8 lg:mb-12 max-w-4xl mx-auto">
            Subscribe to get information, latest news and other
            <br />
            interesting offers about Jadoo
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 max-w-2xl mx-auto">
            <div className="flex-1">
              <EditText
                placeholder="Your email"
                leftImage={{
                  src: "/images/newsletter/email.svg",
                  width: 20,
                  height: 18,
                }}
                className="w-full"
              />
            </div>

            <div className="flex justify-center sm:justify-start">
              <button
                variant="heroButton"
                className="w-[180px] h-[68px] bg-[linear-gradient(180deg,#ff946d_0%,#ff7d68_100%)] 
               hover:opacity-90 text-[#FFFFFF] text-[17px] font-semibold 
               focus:ring-button-1 shadow-[0px_20px_35px_#f1a50126] 
               cursor-pointer rounded-[10px]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute top-15 lg:top-18 right-0 lg:right-5">
        <button className="w-16 h-16 lg:w-[70px] lg:h-[70px] bg-[linear-gradient(216deg,#747def_0%,#5e3be1_100%)] rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
          <img
            src="/images/newsletter/send-icon.png"
            alt="Send"
            className="w-8 h-8 lg:w-10 lg:h-10"
          />
        </button>
      </div>

      {/* Decorative Pattern */}
      <div className="hidden lg:block absolute bottom-0 right-0">
        <div className="grid grid-cols-4 gap-2 p-4">
          {Array.from({ length: 16 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-sm ${
                i === 6
                  ? "bg-global-12"
                  : i === 10
                  ? "bg-global-7"
                  : "bg-global-11"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

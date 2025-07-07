const ServiceCard = ({ icon, title, description, isSecond }) => {
  return (
    <article className="service-card relative z-0 ">
      <div className="card-content relative z-10 flex flex-col items-center text-center p-6 rounded-[36px] hover:shadow-lg bg-white transition-transform duration-300 hover:scale-105 overflow-hidden h-[280px] w-[267px]">
        <img
          src={icon}
          alt={title}
          className={`object-contain ${
            isSecond ? "w-32 h-32 mt-[-35px] mb-[-28px]" : "w-16 h-16"
          }`}
        />{" "}
        <h3 className="font-semibold text-lg lg:text-[20px] leading-6 lg:leading-[28px] mb-3 lg:mb-4">
          {title}
        </h3>
        <p className="font-medium text-muted text-sm lg:text-[16px] leading-5 lg:leading-[26px]">
          {description}
        </p>
      </div>
      {/* Shape-overlay */}
      <div className="shape-overlay"></div>
    </article>
  );
};

export default ServiceCard;

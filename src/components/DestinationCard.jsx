import { Send } from "lucide-react";

const DestinationCard = ({ image, title, price, days }) => {
  return (
    <article className="relative h-[455px] w-[315px] rounded-[24px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-full w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-white p-5 z-20">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-muted font-medium text-base lg:text-[18px] leading-6 lg:leading-[27px]">
            {title}
          </h3>
          <span className="text-muted font-medium text-base lg:text-[18px] leading-6 lg:leading-[27px]">
            $ {price}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Send className="w-5 h-5 text-muted" />
          <span className="text-muted font-medium text-sm lg:text-[16px] leading-5 lg:leading-[24px]">
            {days} Days Trip
          </span>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;

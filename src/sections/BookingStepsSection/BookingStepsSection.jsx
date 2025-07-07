import { motion } from 'framer-motion';
import { Heart } from "lucide-react";
import SectionTitle from "../../components/SectionTitle";
import chooseDestinationIcon from "/images/booking-steps/choose-destination.svg";
import makePaymentIcon from "/images/booking-steps/make-payment.svg";
import reachAirportIcon from "/images/booking-steps/reach-airport.svg";

const bookingSteps = [
  {
    id: 1,
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: chooseDestinationIcon,
  },
  {
    id: 2,
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: makePaymentIcon,
  },
  {
    id: 3,
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    icon: reachAirportIcon,
  },
];

const BookingStepsSection = () => {
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
      className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
            title={
              <>
                Book your next trip <br /> in 3 easy steps
              </>
            }
            category="Easy and Fast"
            className="text-center lg:text-left mb-8 lg:mb-12"
          />
          <motion.div className="space-y-8 lg:space-y-12" variants={containerVariants}>
            {bookingSteps.map((step) => (
              <motion.div key={step.id} className="flex gap-4 lg:gap-5" variants={itemVariants}>
                <div className="flex-shrink-0">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-12 h-12 lg:w-[46px] lg:h-[48px] object-contain"
                  />
                </div>

                <div className="flex-1 w-[30%] lg:w-[70%]">
                  <h3 className="text-muted font-bold text-base lg:text-[16px] leading-5 lg:leading-[24px] ">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm lg:text-[16px] leading-4 lg:leading-[19px] max-w-[60%] break-words">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2 relative z-0 mx-auto flex items-center justify-items-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative">

            {/*Trip Card */}
            <motion.div
              className="relative z-10 rounded-[26px] p-5 lg:p-6 shadow-md max-w-sm mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="/images/booking-steps/booking-cover.png"
                alt="Trip to Greece"
                className="w-full h-40 lg:h-[160px] object-cover rounded-[24px] mb-4 lg:mb-6"
              />

              <h3 className="font-medium text-lg lg:text-[18px] leading-6 lg:leading-[27px] mb-3">
                Trip To Greece
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-muted font-medium text-sm lg:text-[16px] leading-5 lg:leading-[24px]">
                  14-29 June
                </span>
                <div className="w-4 h-[1px] bg-global-9" />
                <span className="text-muted font-medium text-sm lg:text-[16px] leading-5 lg:leading-[24px]">
                  by Robbin joseph
                </span>
              </div>
              {/* icons*/}
              <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                <img
                  src="/images/booking-steps/leaf.svg"
                  alt=""
                  className="w-8 h-8 lg:w-9 lg:h-9"
                />
                <img
                  src="/images/booking-steps/map.svg"
                  alt=""
                  className="w-8 h-8 lg:w-9 lg:h-9"
                />
                <img
                  src="/images/booking-steps/send.svg"
                  alt=""
                  className="w-8 h-8 lg:w-9 lg:h-9"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/booking-steps/building.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  <span className="text-muted font-medium text-sm lg:text-[16px] leading-5 lg:leading-[24px]">
                    24 people going
                  </span>
                </div>
                <Heart className="w-5 h-[18px] text-[#4152CA]" />
              </div>
            </motion.div>

            {/* Trip progress card */}
            <motion.div
              className="absolute bottom-0 right-0 lg:bottom-[52px] lg:right-[-150px] rounded-[18px] p-3 lg:p-4 shadow-md flex items-center gap-2 lg:gap-3 w-[243px] lg:w-[300px] bg-white z-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-12 h-12 lg:w-[50px] lg:h-[50px] rounded-full overflow-hidden">
                <img
                  src="/images/booking-steps/mosque.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-muted font-medium text-xs lg:text-[14px] leading-4 lg:leading-[21px] mb-1">
                  Ongoing
                </p>
                <h4 className="font-medium text-sm lg:text-[18px] leading-5 lg:leading-[27px] mb-2">
                  Trip to rome
                </h4>
                <p className="text-global-3 font-poppins font-medium text-xs lg:text-[14px] leading-4 lg:leading-[17px] mb-2">
                  <span className="text-[#8A79DF]">40%</span>
                  <span className="text-global-1"> completed</span>
                </p>

                {/* Progress Bar */}
                <div className="w-full h-1 lg:h-[5px] bg-gray-300 rounded-full overflow-hidden">
                  <div className="w-[44%] h-full bg-[#8A79DF] rounded-full" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BookingStepsSection;

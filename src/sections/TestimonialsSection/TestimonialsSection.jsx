"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const testimonials = [
  {
    id: 1,
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    avatar: "/images/testimonials/reviewer.png?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "Amazing service and incredible attention to detail. The team went above and beyond our expectations and delivered exceptional results.",
    name: "Chris Thomas",
    location: "CEO of Red Button",
    avatar: "/images/testimonials/reviewer.png?height=80&width=80",
  },
  {
    id: 3,
    quote:
      "Professional, reliable, and innovative. Working with this team has been a game-changer for our business growth and success.",
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/images/testimonials/reviewer.png?height=80&width=80",
  },
  {
    id: 4,
    quote:
      "Outstanding quality and exceptional customer service. They truly understand what it takes to deliver excellence in every project.",
    name: "David Chen",
    location: "Singapore",
    avatar: "/images/testimonials/reviewer.png?height=80&width=80",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: next, -1: prev

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialData =
    testimonials[(currentIndex + 1) % testimonials.length];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
    }),
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -50 : 50,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <motion.div
      className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-20 items-start">
        {/* Left Side */}
        <motion.div
          className="space-y-8 sm:space-y-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionTitle
          className="text-center lg:text-start"
            category="TESTIMONIALS"
            title={
              <>
                What People Say <br /> About Us.
              </>
            }
          />

          {/* Navigation Dots */}
          <div className="flex space-x-4 justify-center sm:justify-start mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? "bg-slate-800"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Side  */}
        <motion.div
          className="relative mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative flex flex-col sm:flex-row items-start"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
            >
              <div className="relative flex-1 sm:mr-8 p-6 sm:p-10 bg-white rounded-xl shadow-lg z-10 w-full">
                <div className="">
                  <img
                    src={currentTestimonial.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover shadow-md absolute -top-10 lg:-top-0  lg:-left-10"
                  />
                </div>

                <div className="mb-6 sm:mb-8 mt-10 ">
                  <blockquote className="text-gray-600 text-[16px] leading-relaxed font-medium">
                    "{currentTestimonial.quote}"
                  </blockquote>
                </div>

                <div className="space-y-1 mb-8 sm:mb-12">
                  <h4 className="font-semibold text-slate-800 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-muted text-xs sm:text-sm">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex sm:flex-col space-x-3 sm:space-x-0 sm:space-y-3 mt-6 sm:mt-10 justify-center w-full sm:w-auto z-10">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-200 flex items-center justify-center group rounded-full cursor-pointer text-[#BCB7C2] hover:text-black"
                  aria-label="Previous testimonial"
                >
                  <ChevronUp/>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 sm:w-12 sm:h-12 transition-all duration-200 flex items-center justify-center group rounded-full cursor-pointer text-[#BCB7C2] hover:text-black"
                  aria-label="Next testimonial"
                >
                 <ChevronDown className=""/>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Next Testimonial Preview */}
          <motion.div
            className="hidden lg:block absolute top-[calc(100%-40px)] left-6 sm:left-[60px] w-[calc(100%-40px)] sm:w-[calc(100%-60px)] opacity-40 transition-opacity duration-500 bg-white p-6 sm:p-10 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0.4, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h4 className="font-semibold text-slate-800 text-base sm:text-lg">
                {nextTestimonialData.name}
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                {nextTestimonialData.location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

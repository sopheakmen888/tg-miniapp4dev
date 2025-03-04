"use client";

import {
  Dumbbell,
  Check,
  Star,
  Zap,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Menu from "../components/Menu";

export default function MembershipPlans() {
  const [activePlan, setActivePlan] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: "HULK STARTER",
      price: 20,
      description: "For Beginners Ready to Transform!",
      icon: Dumbbell,
      color: "from-emerald-600 to-emerald-400",
      features: [
        "Access to gym facilities (off peak)",
        "1 free fitness consultation",
        "Basic strength & cardio equipment",
        "Locker & shower access",
      ],
    },
    {
      name: "HULK BOOST",
      price: 45,
      description: "Boost Your Strength & Endurance!",
      icon: Zap,
      color: "from-teal-600 to-teal-400",
      features: [
        "Full access to equipment",
        "Extended gym hours",
        "Monthly fitness assessment",
        "Group fitness classes",
      ],
    },
    {
      name: "HULK PRO",
      price: 65,
      description: "For Dedicated Fitness Enthusiasts!",
      icon: Star,
      color: "from-green-600 to-green-400",
      popular: true,
      features: [
        "24/7 gym access",
        "Personal trainer sessions (2x/month)",
        "Nutrition consultation",
        "Access to premium classes",
        "Recovery zone access",
      ],
    },
    {
      name: "HULK ELITE",
      price: 85,
      description: "Achieve Your Peak Performance!",
      icon: Trophy,
      color: "from-emerald-800 to-emerald-600",
      features: [
        "VIP gym access",
        "Unlimited PT sessions",
        "Custom meal plans",
        "Performance tracking",
        "Recovery suite access",
        "Exclusive events",
      ],
    },
  ];

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
      setActivePlan(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.offsetWidth;
      const newActiveIndex = Math.round(scrollPosition / cardWidth);
      if (newActiveIndex !== activePlan) {
        setActivePlan(newActiveIndex);
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []); //Corrected useEffect dependency

  const nextPlan = () => {
    if (activePlan < plans.length - 1) {
      scrollToCard(activePlan + 1);
    }
  };

  const prevPlan = () => {
    if (activePlan > 0) {
      scrollToCard(activePlan - 1);
    }
  };

  return (
    <div className="max-w-full bg-gradient-to-br from-gray-50 to-green-50 min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-emerald-200 opacity-20 blur-3xl"></div>

      {/* Header Section */}
      <div className="relative z-10 mb-8">
        <div className="mb-4">
          <header className=" flex items-center justify-between">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-800 via-green-700 to-teal-600 bg-clip-text text-transparent ml-[15%]">
            Choose plan
            </h1>
            <div className="flex items-center mt-[-5%]">
              <Menu />
            </div>
          </header>
        </div>
        <p className="text-center mt-2 text-gray-600 text-sm">
          Select the membership that fits your fitness journey.
        </p>
      </div>

      {/* Mobile Carousel Navigation */}
      <div className="flex justify-between items-center mb-4 relative">
        <button
          onClick={prevPlan}
          className={`p-2 rounded-full bg-white shadow-md ${
            activePlan === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
          }`}
          disabled={activePlan === 0}
        >
          <ChevronLeft className="h-5 w-5 text-emerald-700" />
        </button>

        <div className="flex space-x-2">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                activePlan === index ? "bg-emerald-600 w-5" : "bg-gray-300"
              }`}
              aria-label={`Go to plan ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextPlan}
          className={`p-2 rounded-full bg-white shadow-md ${
            activePlan === plans.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100"
          }`}
          disabled={activePlan === plans.length - 1}
        >
          <ChevronRight className="h-5 w-5 text-emerald-700" />
        </button>
      </div>

      {/* Swipeable Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar relative"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <div
              key={index}
              className="min-w-full w-full flex-shrink-0 px-1 snap-center"
            >
              <div
                className={`relative rounded-2xl overflow-hidden h-full ${
                  plan.popular ? "ring-2 ring-green-500 ring-offset-2" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-green-500 text-white text-xs font-bold py-1 text-center">
                    MOST POPULAR
                  </div>
                )}
                <div className="bg-white shadow-xl h-full flex flex-col">
                  {/* Card Header */}
                  <div
                    className={`bg-gradient-to-r ${plan.color} p-5 text-white`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="h-7 w-7" />
                      <div className="text-3xl font-bold">${plan.price}</div>
                    </div>
                    <h3 className="font-extrabold text-xl">{plan.name}</h3>
                    <p className="mt-1 text-sm opacity-90">
                      {plan.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-grow flex flex-col">
                    <ul className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700"
                        >
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Get Started Button */}
                    <button
                      className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 
                      bg-gradient-to-r ${plan.color} shadow-lg active:scale-95 touch-manipulation`}
                    >
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Current Plan Indicator */}
      <div className="mt-6 text-center font-medium text-emerald-800 relative z-10">
        {activePlan + 1} of {plans.length}
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center text-gray-600 relative z-10">
        <p className="text-xs">
          All plans include access to the HULK Fitness mobile app and a 7-day
          money-back guarantee.
          <br />
          <span className="font-medium text-emerald-700 hover:underline cursor-pointer mt-2 inline-block">
            Need help choosing? Take our fitness quiz
          </span>
        </p>
      </div>
    </div>
  );
}

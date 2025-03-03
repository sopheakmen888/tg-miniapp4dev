import { FaBars, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Beginner Package",
    price: "$19.99/month",
    benefits: [
      "Basic Strength Training",
      "Cardio (Walking, Jogging & Cycling)",
      "Flexibility and Mobility Exercises",
      "Introduction to proper form and techniques"
    ]
  },
  {
    name: "Advanced Package",
    price: "$39.99/month",
    benefits: [
      "Advanced Strength Training",
      "High-Intensity Interval Training",
      "Endurance and Cardiovascular Training",
      "Power and Agility Training and more..."
    ]
  }
];

const Promotion = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-4 sm:p-6">
      <motion.div 
        className="max-w-sm sm:max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src="/profile.jpg"
              alt="User Profile"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-green-600"
            />
            <span className="font-semibold text-gray-700 text-sm sm:text-lg">Thorn Thavann</span>
          </div>
          <FaBars className="text-lg sm:text-2xl text-gray-600 cursor-pointer hover:text-green-600 transition" />
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/236x/d1/ef/db/d1efdba923702381cf8229aae885c579.jpg"
            alt="Gym Workout"
            className="w-full h-48 sm:h-60 object-cover"
          />
          {/* Discount Badge */}
          <motion.div 
            className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-green-600 text-white py-1 px-3 sm:py-1.5 sm:px-5 rounded-full text-xs sm:text-sm font-bold shadow-lg"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            30% OFF
          </motion.div>
        </div>

        {/* Packages */}
        <div className="p-4 sm:p-6 bg-black text-white rounded-b-2xl space-y-4 sm:space-y-6">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <span className="bg-green-600 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-md">{pkg.name}</span>
                <span className="text-sm sm:text-lg font-bold text-green-600">{pkg.price}</span>
              </div>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                {pkg.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-1 sm:space-x-2">
                    <FaCheckCircle className="text-green-600 text-sm sm:text-base" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-3 sm:mt-4 w-full bg-green-600 text-white py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-bold shadow-md hover:bg-green-500 transition">Claim Now</button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Promotion;

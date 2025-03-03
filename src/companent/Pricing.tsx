// const PricingCard = () => {


//     return (<div className="flex flex-col gap-4 mt-6 w-full md:w-2/3">
//         <div className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center">
//             <img
//                 src="src/pages/download.jpeg"
//                 alt="Pricing Plan"
//                 className="w-24 h-24 object-cover rounded-lg  text-gray-600"
//             />
//             <div className="flex flex-col items-center md:ml-4">
//                 <h2 className="text-xl font-semibold text-gray-600 ">Basic</h2>
//                 <p className="text-gray-600">20$/month</p>
//                 <button className="bg-green-500 text-white px-4 py-1 mt-2 rounded-md">
//                     View
//                 </button>
//             </div>
//         </div>

//     </div>
//     );
// };


// export default PricingCard;

// const PricingCard = () => {
//     return (
//       <div className="flex flex-col items-center gap-4 mt-6 w-full">
//         <div className="bg-gray-200 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
//           {/* Image */}
//           <img
//             src="src/pages/download.jpeg"
//             alt="Pricing Plan"
//             className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-lg"
//           />
  
//           {/* Pricing Info */}
//           <div className="flex flex-col items-center md:ml-6 text-center md:text-left">
//             <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
//               Basic
//             </h2>
//             <p className="text-gray-600 text-sm sm:text-base md:text-lg">
//               20$/month
//             </p>
  
//             {/* View Button */}
//             <button className="bg-green-500 text-white px-5 py-2 mt-3 rounded-md shadow-md hover:bg-green-600 transition">
//               View
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default PricingCard;
  





import React from 'react';

// Define the types for the props
interface PricingCardProps {
  title: string;
  price: string;
  imageSrc?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, imageSrc }) => {
  return (
    <div className="flex items-center gap-6 p-3 bg-gray-300 rounded-2xl w-full md:w-3/4 lg:w-1/2 mx-auto">
      <div className="flex justify-start">
        <img
          className="w-45 h-30 shadow-xl rounded-md"
          alt="Profile Pic"
          src={imageSrc || 'src/pages/download.jpeg'}
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-2xl text-black font-jomhuria font-bold">Basic {title}</span>
        <span className="text-black">20$/month {price}</span>
        <button className="mt-4 bg-green-600 text-white w-20  rounded-md ">
          View 
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
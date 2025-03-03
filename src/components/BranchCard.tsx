import React from 'react';

// Define the types for the props
interface BranchCardProps {
  branchName: string;
  phone: string;
  location: string;
  imageSrc?: string;
}

const BranchCard: React.FC<BranchCardProps> = ({ branchName, phone, location, imageSrc }) => {
  return (
    <div className="flex items-center gap-6 p-3 bg-gray-300 rounded-2xl w-full md:w-3/4 lg:w-1/2 mx-auto">
      <div className="flex justify-start">
        <img
          className="w-70 h-30 shadow-xl rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110 "
          alt="Profile Pic"
          src={imageSrc || 'https://i.pinimg.com/736x/f3/50/25/f3502537a9be2db3a49e2a3ccf4ef15f.jpg'}
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-2xl text-black font-jomhuria font-bold">Branch: {branchName}</span>
        <span className="text-black">Phone: {phone}</span>
        <span className="text-black">Location: {location}</span>
        <button className="mt-4 bg-green-600 text-white w-50 rounded-md">
          View Location
        </button>
      </div>
    </div>
  );
};

export default BranchCard;

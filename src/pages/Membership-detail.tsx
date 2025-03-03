const MembershipInfo = () => {
    return (
        <div className="max-w-full sm:max-w-md md:max-w-lg mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="relative">
                 
                    <img
                        src="gym.jpeg"
                        alt="Member Picture"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-green-500"
                    />
                </div>
                <div>
                  
                    <h2 className="text-xl sm:text-2xl font-bold text-green-600">John Doe</h2>
                    <p className="text-sm sm:text-lg text-gray-600">Phone: (123) 456-7890</p>
                </div>
            </div>

            <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-semibold text-green-600">Membership Details</h3>
                <div className="space-y-4 mt-4">

                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">Workout Plan:</span>
                        <span className="text-sm sm:text-base text-gray-600">Strength & Conditioning</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">Start Date:</span>
                        <span className="text-sm sm:text-base text-gray-600">Jan 1, 2023</span>
                    </div>

                    
                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">Usage History:</span>
                        <span className="text-sm sm:text-base text-gray-600">3 times per week</span>
                    </div>

            
                    <div className="flex justify-between">
                        <span className="text-sm sm:text-base text-gray-700 font-medium">End Date:</span>
                        <span className="text-sm sm:text-base text-gray-600">Dec 31, 2023</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipInfo;


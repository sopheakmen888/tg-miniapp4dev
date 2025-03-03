const Info = () => {
    return (

        <div className="max-w-2xl sm:max-w-md md:max-w-lg mx-auto bg-white sm:p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="relative">
                    <img
                        src="gym.jpeg"
                        alt="Member Picture"
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-green-500"
                    />
                </div>
                <div className="pl-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-green-600">Allibaba</h2>
                    <p className="text-sm sm:text-lg text-gray-600">079 479 794</p>
                </div>
            </div>
        </div>

    );
};

export default Info;

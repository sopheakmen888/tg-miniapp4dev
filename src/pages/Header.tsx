const Header = () => {
    return (
        <header className="relative bg-[#8affb7a1] h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
            <img
                src="gym.jpeg"
                alt="GYM Background"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="relative z-10 px-6 py-4 sm:px-8 md:px-12 lg:px-16 lg:py-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-left mt-6 text-black font-poppins">
                    <span className="text-[#0dca1dfd]">Green</span> GYM
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl mt-6 sm:mt-10 font-medium text-white font-poppins">
                    Get stronger, fitter, and healthier <br />
                    Crush your health and fitness goals in no time
                </p>
                <div className="inline-block py-3 px-6 mt-8 sm:mt-12 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-red-500 transition-colors">
                    Start 7 day free trial
                </div>
            </div>
        </header>
    );
};

export default Header;

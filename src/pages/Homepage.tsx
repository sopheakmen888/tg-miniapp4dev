import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/736x/7f/91/2b/7f912b092e71134f0e7db187be68f37b.jpg"
          alt="Gym background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-white text-lg">Welcome to</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-green-400">Hulk Gym</h1>
        <button onClick={() => navigate("/workoutplan")} className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
          Join for free
        </button>
      </div>
    </div>
  );
};

export default HomePage;


import { useNavigate } from "react-router-dom";
import Header from "../components/header"

const WorkoutPlanPage = () => {
  const navigate = useNavigate();

  // Sample workout plans
  const workoutPlans = [
    "Bruce Lee Inspired Workout Plan",
    "Full Body Strength Training",
    "Cardio & HIIT Burnout",
    "Muscle Gain Challenge",
    "Weight Loss Extreme",
    "Athlete Performance Plan",
    "Yoga & Flexibility Routine",
    "Boxing Endurance Training",
  ];

  return (
    <div className="min-h-screen">
     <Header/>

      {/* Header */}
      <div className=" text-center text-white p-6 ">
        <h2 className="text-4xl font-bold text-[#5C9C31]">Workouts Plan</h2>
        <p>You can do exercises with workout plans that you want</p>
      </div>

      {/* Workout List */}
      <div className="py-6 bg-white rounded-2xl">
        {workoutPlans.map((plan, index) => (
          <button
            key={index}
            onClick={() => navigate(`/workout/${index}`)}
            className="block w-full text-black bg-gray-300 text-left p-4  mb-2 hover:bg-gray-400 transition"
          >
            🏋️ {plan}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlanPage;

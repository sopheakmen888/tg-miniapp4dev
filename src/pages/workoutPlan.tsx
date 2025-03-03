import React from "react";
import img from "../test_image/test.png";

const workouts = [
  {
    name: "Bench Press",
    image: img,
    sets: 5,
    reps: "8 - 12",
    weight: "2 lbs",
    calories: "70 - 100",
  },
  {
    name: "Incline Bench Press",
    image: img,
    sets: 5,
    reps: "8 - 12",
    weight: "2 lbs",
    calories: "70 - 100",
  },
  {
    name: "Pull-Ups",
    image: img,
    sets: 4,
    reps: "8 - 12",
    weight: "0 lbs",
    calories: "60 - 80",
  },
  {
    name: "Bent-Over Barbell Rows",
    image: img,
    sets: 4,
    reps: "8 - 12",
    weight: "0 lbs",
    calories: "60 - 80",
  },
];

const WorkoutPlan: React.FC = () => {
    return (
      <div className="relative  bg-white font-sans">
        {/* Header */}
        <h2 className="text-center text-xl font-bold text-black mt-4">Workout Plan</h2>
  
        {/* Workout Grid with Scroll */}
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 max-h-96 overflow-y-auto">
          {workouts.map((workout, index) => (
            <div key={index} className="bg-black shadow-lg rounded-lg overflow-hidden">
              <img src={workout.image} alt={workout.name} className="w-full h-36 object-cover" />
              <div className="p-3 text-white text-start">
                <h3 className="font-semibold text-green-600 text-md mb-1">{workout.name}</h3>
                <p className="text-sm"><span className="font-semibold">Sets :</span> {workout.sets}</p>
                <p className="text-sm"><span className="font-semibold">Reps :</span> {workout.reps}</p>
                <p className="text-sm"><span className="font-semibold">Calories :</span> {workout.weight}</p>
                <p className="text-sm"><span className="font-semibold">Calories :</span> {workout.calories}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* More Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm shadow-md hover:bg-green-700 transition">
            More
          </button>
        </div>
      </div>
    );
  };

export default WorkoutPlan;

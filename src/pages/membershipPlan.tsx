import { CheckIcon, Menu, ChevronDown } from "lucide-react";

const planData = [
  {
    name: '"HULK STARTER"',
    subtitle: "For Beginners Ready to Transform!",
    price: 20,
    features: [
      "Access to gym facilities (off-peak hours)",
      "1 free fitness consultation",
      "Basic strength & cardio equipment",
      "Locker & shower access",
    ],
  },
  {
    name: '"HULK BOOST"',
    subtitle: "Train Harder, Get Stronger!",
    price: 40,
    features: [
      "24/7 Gym Access",
      "2 free personal training sessions per month",
      "Group workout classes (Yoga, HIIT, Strength Training)",
      "Nutrition guidance & meal planning tips",
    ],
  },
  {
    name: '"HULK PRO"',
    subtitle: "For Dedicated Warriors!",
    price: 60,
    features: [
      "Everything in HULK BOOST",
      "Unlimited group workout classes",
      "Monthly body composition analysis",
      "Sauna & recovery zone access",
    ],
  },
  {
    name: '"HULK ELITE"',
    subtitle: "The Ultimate Fitness Experience!",
    price: 99,
    features: [
      "All benefits from HULK PRO",
      "4 personal training sessions per month",
      "VIP access to premium equipment & private workout zones",
      "Free protein shakes after workouts",
      "Priority booking for special gym events",
    ],
  },
];

const planColors = [
    {
      badge: "bg-black",
      title: "text-black",
      underline: "bg-purple-900",
      priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
      featureBg: "bg-gray-900",
      check: "text-purple-200",
      shadow: "shadow-purple-300", // Add shadow class here
    },
    {
      badge: "bg-black",
      title: "text-black",
      underline: "bg-purple-900",
      priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
      featureBg: "bg-gray-900",
      check: "text-purple-200",
      shadow: "shadow-purple-300", // Add shadow class here
    },
    {
      badge: "bg-black",
      title: "text-black",
      underline: "bg-purple-900",
      priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
      featureBg: "bg-gray-900",
      check: "text-purple-200",
      shadow: "shadow-purple-300", // Add shadow class here
    },
    {
      badge: "bg-black",
      title: "text-black",
      underline: "bg-purple-900",
      priceBg: "bg-gradient-to-r from-purple-900 to-purple-900",
      featureBg: "bg-gray-900",
      check: "text-purple-200",
      shadow: "shadow-purple-300", // Add shadow class here
    },
  ];
  

export default function MembershipPlan() {
  return (
    <div className="p-6 pt-2 ">
   
        <div className="text-center mt-4 sticky">
          <h1 className="text-3xl font-bold bg-clip-text text-black">
            Membership Plans
          </h1>
          <p className="text-sm text-purple-800 mt-1">
            Choose your fitness journey
          </p>
          <div className="flex justify-center mt-2">
            <ChevronDown className="animate-bounce w-6 h-6 text-purple-800" />
          </div>
        </div>
     
      {planData.map((plan, index) => (
        <div key={plan.name} className="mb-10 ">
          <div className="text-center mb-4">
            
            <h2
              className={`text-xl font-bold uppercase  ${planColors[index].title}`}
            >
              {plan.name}
            </h2>
            <p className="text-sm text-purple-800 italic mt-1">
              {plan.subtitle}
            </p>
            
          </div>

          <div
            className={`text-center mb-6 ${planColors[index].priceBg} rounded-lg py-3 shadow-md`}
          >
            <p className="text-3xl font-bold flex items-center justify-center gap-2 text-white">
              <span className="text-purple-800">💰</span>${plan.price}
              <span className="text-lg font-normal">/month</span>
            </p>
          </div>

          <div
            className={`${planColors[index].featureBg} ${planColors[index].shadow} rounded-lg p-6 mb-8 transform hover:scale-105 transition-transform duration-300`}
            >
            <p className="text-white font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">🔥</span> Features:
            </p>
            <div className="space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start">
                  <div className="bg-purple-700 rounded-full p-1 mr-3 mt-1">
                    <CheckIcon
                      className={`h-3 w-3 ${planColors[index].check}`}
                    />
                  </div>
                  <p className="text-white">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Call to Action */}
      <div className="text-center pb-10">
        <button className="bg-gradient-to-r from-purple-900 to-purple-900 hover:from-purple-900 hover:to-purple-900 text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105">
          Start Your Fitness Journey
        </button>
        <p className="mt-4 text-sm text-purple-100">
          Choose the plan that fits your goals
        </p>
      </div>
    </div>
  );
}

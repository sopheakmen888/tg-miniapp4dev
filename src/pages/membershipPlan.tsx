import { ArrowLeft, Dumbbell } from 'lucide-react'

export default function MembershipPlans() {
  const plans = [
    {
      name: "HULK STARTER",
      price: "20",
      description: "For Beginners Ready to Transform!",
      features: [
        "Access to gym facilities (off peak)",
        "1 free fitness consultation",
        "Basic strength & cardio equipment",
        "Locker & shower access"
      ]
    },
    {
      name: "HULK BOOST",
      price: "45",
      description: "Boost Your Strength & Endurance!",
      features: [
        "Full access to equipment",
        "Extended gym hours",
        "Monthly fitness assessment"
      ]
    },
    {
      name: "HULK PRO",
      price: "65",
      description: "For Dedicated Fitness Enthusiasts!",
      features: [
        "24/7 gym access",
        "Personal trainer sessions",
        "Nutrition consultation"
      ]
    },
    {
      name: "HULK ELITE",
      price: "85",
      description: "Achieve Your Peak Performance!",
      features: [
        "VIP gym access",
        "Unlimited PT sessions",
        "Custom meal plans"
      ]
    },
  ];

  return (
    <div className="max-w-xs mx-auto bg-white min-h-screen pb-8 px-4 relative">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-green-100 opacity-50 rounded-l-xl"></div>
      
      {/* Header Section */}
      <div className="p-4 relative z-10">
        <div className="flex items-center mb-4">
          <button className="p-1">
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </button>
          <h1 className="text-xl font-medium text-center flex-1 text-emerald-800">
            CHOOSE YOUR PLAN
          </h1>
        </div>
      </div>

      {/* Plans Stacked Like Coupons */}
      <div className="space-y-4 w-full relative z-10">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="p-4 bg-white border-2 border-emerald-800 rounded-xl shadow-lg relative overflow-hidden w-full mx-auto"
            style={{ maxHeight: '300px' }}  // Limit the height of each plan box
          >
            <Dumbbell className="h-8 w-8 text-emerald-800 mr-4"/>
            <div>
              <h3 className="font-bold text-xl text-emerald-800 text-center">{plan.name}</h3>
              <p className="text-center mt-4 text-s text-gray-700">{plan.description}</p>
              <div className="text-lg font-bold text-left">${plan.price}<span className="text-sm text-gray-500">/month</span></div>
              <ul className="mt-2 space-y-1 text-xs text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-emerald-800">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Get Started Button */}
              <button className="mt-4 w-full py-2 bg-emerald-800 text-white rounded-lg text-sm font-semibold hover:bg-green-600 transition duration-200">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

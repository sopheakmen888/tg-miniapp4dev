const Membership_plan = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex gap-4 overflow-x-auto p-4 w-full max-w-md">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="bg-black text-white p-4 rounded-xl shadow-md text-center w-64 flex-shrink-0"
          >
            <div>
              <h1 className="text-xl font-bold">1 Month</h1>
              <h1 className="text-lg">Membership</h1>
            </div>

            <div className="mt-3">
              <h1 className="text-3xl font-extrabold">
                $30 <span className="text-lg font-light">/month</span>
              </h1>
            </div>

            <div className="mt-3 space-y-1 text-sm">
              <div>✅ All classes</div>
              <div>✅ All member classes</div>
              <div>✅ Full gym access</div>
            </div>

            <button className="mt-4 bg-green-600 text-black px-4 py-1.5 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
              Join Us
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership_plan;

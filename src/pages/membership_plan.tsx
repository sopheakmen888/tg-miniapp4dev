const Membership_plan = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex gap-5 overflow-x-auto p-5 w-[90%] max-w-screen-lg">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-2xl shadow-lg text-center w-80 flex-shrink-0"
          >
            <div>
              <h1 className="text-3xl font-bold">1 Month</h1>
              <h1 className="text-2xl">Membership</h1>
            </div>

            <div className="mt-4">
              <h1 className="text-5xl font-extrabold">
                $30 <span className="text-2xl font-light">/month</span>
              </h1>
            </div>

            <div className="mt-4 space-y-2 text-lg">
              <div>✅ All classes</div>
              <div>✅ All member classes</div>
              <div>✅ Full gym access</div>
            </div>

            <button className="mt-6 bg-green-600 text-black px-6 py-2 rounded-sm font-semibold hover:bg-gray-200 transition duration-300">
              Join Us
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership_plan;

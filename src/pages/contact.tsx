import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white bg-white">
      {/* Background Image */}
      <div className="  bg-center bg-black">

      {/* Overlay Content */}
      <div className="relative z-10 text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-green-600">CONTACT US</h1>
        <p className="text-lg max-w-lg mx-auto">
          The gym is not just a place to lift weights; it’s where you lift
          yourself up! Every drop of sweat is a step closer to your goals.
        </p>
      </div>

      {/* Contact Information */}
      <div className="relative z-10 grid md:grid-cols-3 gap-6 mt-2 p-6 w-full max-w-4xl">
        {/* Address */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-green-500 text-4xl mb-3" />
          <h2 className="text-2xl font-semibold">ADDRESS</h2>
          <p className="text-lg">Strong Mean Chay</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaPhone className="text-green-500 text-4xl mb-3" />
          <h2 className="text-2xl font-semibold">PHONE</h2>
          <p className="text-lg">081223207</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <FaEnvelope className="text-green-500 text-4xl mb-3" />
          <h2 className="text-2xl font-semibold">EMAIL</h2>
          <p className="text-lg">sample.com@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;

import { ArrowLeft } from "lucide-react";
import Menu from "../components/Menu";
import img from "../../public/images/img2.png";
import img3 from "../../public/images/branches.png";

export default function MobileFitnessApp() {
  return (
    <div className="bg-white min-h-screen max-w-full mx-auto ">
      
      {/* Header */}
      <header className="px-4 py-3 flex justify-between items-center pt-5">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-800 via-green-700 to-teal-600 bg-clip-text text-transparent ml-[30%]">Branch</h1>
        <Menu />
      </header>

      <div className="flex justify-center items-center  mt-5">
        <div className="relative bg-gradient-to-br from-teal-800 to-teal-600 text-white rounded-xl shadow-xl w-[350px] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.07)_0%,transparent_20%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.07)_0%,transparent_20%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_40%)] pointer-events-none"></div>

          <div className="relative p-4 text-center">
            <div className="absolute top-[-12px] right-[-12px] bg-yellow-400 text-red-700 font-bold text-sm py-2 px-3 rounded-full w-14 h-14 flex justify-center items-center transform rotate-15 shadow-lg">
              LIMITED
            </div>
            <h2 className="text-teal-200 text-xs uppercase tracking-wider font-bold">
              Special Offer
            </h2>
            <h1 className="text-2xl font-extrabold mt-2 mb-3 text-shadow-lg">
              7-Day Free Trial Pass
            </h1>
          </div>

          <div className="flex justify-between bg-white/10 py-2 px-4 text-sm border-t border-b border-white/30">
            <div>
              <span className="text-xl mr-2">🗓️</span> Valid until
            </div>
            <div>March 20, 2023</div>
          </div>

          <div className="p-4 text-sm text-white/80">
            <p>
              <strong>Terms & Conditions:</strong>
            </p>
            <p>• New members only</p>
            <p>• One-time use per person</p>
            <p>• All gym facilities and group classes included</p>
          </div>
        </div>
      </div>

      <div
        className="[&::-webkit-scrollbar]:[width:10px]
    [&::-webkit-scrollbar-thumb]:bg-white
    overflow-scroll py-8 overflow-x-auto no-scrollbar"
      >
        <div className="flex gap-4 px-3 pb-4">
          {[
            {
              id: 1,
              name: "Toul Kork Branch",
              location: "Street 289, TK, Phnom Penh",
              contact1: "096 888 1234",
              contact2: "096 888 5678",
              imageSrc: img3,
            },
            {
              id: 2,
              name: "BKK Branch",
              location: "Street 51, BKK, Phnom Penh",
              contact1: "096 777 1234",
              contact2: "096 777 5678",
              imageSrc: img3,
            },
          ].map((branch) => (
            <div
              key={branch.id}
              className="flex-none w-[300px] h-[260px] rounded-xl overflow-hidden relative shadow-lg transition-transform hover:scale-102"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 z-10"></div>
              <img
                src={branch.imageSrc}
                alt={`${branch.name} facility`}
                width={380}
                height={280}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-10 left-5 p-6 z-20 text-white">
                <h2 className="text-2xl font-bold mb-2">{branch.name}</h2>
                <div className="flex items-start mb-2">
                  <span className="mr-2 mt-1">📍</span>
                  <p className="text-sm">{branch.location}</p>
                </div>
                <div className="flex items-start mb-1">
                  <span className="mr-2">📞</span>
                  <p className="text-sm">{branch.contact1}</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">📞</span>
                  <p className="text-sm">{branch.contact2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Illustration */}
      
        <img
          src={img}
          alt="Person running with fitness tracker"
          width={400}
          height={300}
          className="w-full h-auto rounded-lg"
        />
  
    </div>
  );
}

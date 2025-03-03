import { MapPin, Clock } from "lucide-react";

const branches = [
  {
    id: 1,
    name: "HULK-GYM CAMBODIA",
    address: "St No 217, Stoeng Mean Chey Tmey Market, Khan Mean Chey, Phnom Penh City",
    hours: "9:00AM - 9:00PM",
    image: "https://www.formfactory.cz/wp-content/uploads/2024/05/vlnena_gym2.jpg",
},
  {
    id: 2,
    name: "HULK-GYM CAMBODIA",
    address: "St No.488, Toul Tompong, Khan Chamkar Mon, Phnom Penh City",
    hours: "9:00AM - 9:00PM",
    image: "https://fitnesstimelanding.blob.core.windows.net/ftmain/assets/images/gallery/218.jpg",
  },
  {
    id: 3,
    name: "HULK-GYM CAMBODIA",
    address: "St No.217, Chamkar Doeng, Khan Dangkor, Phnom Penh City",
    hours: "9:00AM - 9:00PM",
    image: "https://lh5.googleusercontent.com/p/AF1QipN51NaIB2q6zRmMeTGW05XXAXUS5Yn-dpdiZucz=w480-h300-k-n-rw",
  },
  {
    id: 4,
    name: "HULK-GYM CAMBODIA",
    address: "St No.1003, Aeon Sen Sok, Sen Sok, Phnom Penh City",
    hours: "9:00AM - 9:00PM",
    image: "https://static.hussle.com/gym_img/940x680/105498/1728894482105498.jpg",
  },
  {
    id: 5,
    name: "HULK-GYM CAMBODIA",
    address: "St No.372, Toul Kork, Khan Toul Kork, Phnom Penh City",
    hours: "9:00AM - 9:00PM",
    image: "https://assets-global.website-files.com/62e06ed3085755f1e43e995b/632cb9cac1d25a194763498f_TheFitnessFactoryGymFloor02.jpeg",
  },
];

export default function GymBranch() {
  return (
    <div className="min-h-screen w-[430px] bg-black text-white mx-auto p-4 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#7CFC00]">All the gym Branch</h1>
        <p className="text-gray-400 text-sm">You can view our Branch and also contact to us!</p>
      </div>

      {/* Branch Cards */}
      <div className="space-y-6">
        {branches.map((branch) => (
          <div key={branch.id} className="rounded-xl overflow-hidden border border-gray-800 bg-[#111] p-4">
            <img src={branch.image} alt={branch.name} className="w-full h-48 object-cover rounded-lg" />
            <div className="mt-4">
              <h2 className="text-[#7CFC00] font-bold">{branch.name}</h2>
              <div className="flex items-start space-x-2 mt-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <p className="text-sm text-gray-300">{branch.address}</p>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <p className="text-sm text-gray-300">{branch.hours}</p>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#7CFC00] text-black px-4 py-1 rounded-md text-sm font-medium"><a href="">Map</a></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

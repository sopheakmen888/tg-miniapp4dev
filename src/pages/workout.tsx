import { ChevronLeft, ArrowRight } from "react-feather"

export default function WorkoutPlanApp() {
    return (
        <div className="w-[300px] mx-auto bg-blue-50 min-h-screen p-4">
            {/* Header */}
            <header className="flex items-center mb-6">
                <ChevronLeft className="w-6 h-6 text-gray-700" />
                <h1 className="text-2xl font-bold text-green-800 ml-9">Workout Plan</h1>
            </header>

            {/* Main Illustration */}
            <div className="mb-6">
                <img
                    src="images/imageworkout.jpg"
                    width={300}
                    height={200}
                    alt="People working out in a gym"
                    className="rounded-lg"
                />
            </div>

            {/* Workout Plan Cards */}
            <div className="space-y-4">
                <WorkoutCard
                    title="Arnold Schwarzenegger's Classic Workout Plan"
                    color="bg-rose-600"
                    textColor="text-white"
                    image="images/card1.png"
                />

                <WorkoutCard
                    title="Bruce Lee Inspired Workout Plan"
                    color="bg-blue-800"
                    textColor="text-white"
                    image="images/card2.png"
                />

                <WorkoutCard
                    title="Gal Gadot Inspired Workout Plan"
                    color="bg-gray-300"
                    textColor="text-gray-700"
                    image="images/card3.png"
                />

                <WorkoutCard
                    title="Full-Body Functional Fitness Plan"
                    color="bg-green-700"
                    textColor="text-white"
                    image="images/card4.png"
                />
            </div>
        </div>
    )
}

interface WorkoutCardProps {
    title: string
    color: string
    textColor: string
    image: string
}

function WorkoutCard({ title, color, textColor, image }: WorkoutCardProps) {
    return (
        <a href="#" className={`block rounded-lg overflow-hidden ${color} w-[270px] h-[125px] p-4 flex items-center justify-between`}>
            {/* Left Section: Title and Icon */}
            <div className={`${textColor} flex flex-col`}>
                <h3 className="font-bold text-[14px] text-left">{title}</h3>
                
                {/* Arrow Icon Positioned Below Title */}
                <div className="bg-black rounded-full p-1 w-fit mt-2">
                    <ArrowRight className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Right Section: Image */}
            <div>
                <img src={image || "/placeholder.svg"} width={130} height={130} alt="Workout icon" className="object-contain" />
            </div>
        </a>
    )
}





"use client"

import type React from "react"
import img1 from "../../public/images/card1.png";
import img2 from "../../public/images/card2.png";
import img3 from "../../public/images/card3.png";
import img4 from "../../public/images/card4.png";
import img5 from "../../public/images/imageworkout.jpg";
import Menu from "../components/Menu";
import { useState } from "react"
import { ArrowRight, ChevronLeft } from "lucide-react"

// Custom Card component to avoid import error
function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`rounded-lg ${className}`} {...props}>
      {children}
    </div>
  )
}

export default function WorkoutPlanApp() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const workoutPlans = [
    {
      id: 1,
      title: "Arnold Schwarzenegger's Classic Workout Plan",
      color: "bg-rose-600",
      textColor: "text-white",
      image: img1,
    },
    {
      id: 2,
      title: "Bruce Lee Inspired Workout Plan",
      color: "bg-blue-800",
      textColor: "text-white",
      image: img2,
    },
    {
      id: 3,
      title: "Gal Gadot Inspired Workout Plan",
      color: "bg-gray-300",
      textColor: "text-gray-700",
      image: img3,
    },
    {
      id: 4,
      title: "Full-Body Functional Fitness Plan",
      color: "bg-green-700",
      textColor: "text-white",
      image: img4,
    },
  ]

  return (
    <div className="min-h-screen flex items-start justify-center bg-white">
      <div className="bg-white w-full max-w-md mx-auto shadow-sm rounded-lg overflow-hidden my-4">
        <div className="p-5 sm:p-6">
          {/* Header */}
          <header className=" flex items-center justify-between">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-800 via-green-700 to-teal-600 bg-clip-text text-transparent ml-8">
              Workout plan 
            </h1>
            <div className="flex items-center mt-[-5%]">
              <Menu />
            </div>
          </header>

          {/* Main Illustration */}
          <div className="mb-6 rounded-lg overflow-hidden mt-5">
            <img
              src={img5}
              width={300}
              height={200}
              alt="People working out in a gym"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Workout Plan Cards */}
          <div className="space-y-3">
            {workoutPlans.map((plan) => (
              <WorkoutCard
                key={plan.id}
                title={plan.title}
                color={plan.color}
                textColor={plan.textColor}
                image={plan.image}
                isHovered={hoveredCard === plan.id}
                onMouseEnter={() => setHoveredCard(plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface WorkoutCardProps {
  title: string
  color: string
  textColor: string
  image: string
  isHovered?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

function WorkoutCard({
  title,
  color,
  textColor,
  image,
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
}: WorkoutCardProps) {
  return (
    <Card
      className={`block rounded-lg overflow-hidden ${color} h-[110px] sm:h-[125px] p-3 sm:p-4 flex items-center justify-between border-0 transition-transform duration-200 ${isHovered ? "scale-[1.02]" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Left Section: Title and Icon */}
      <div className={`${textColor} flex flex-col max-w-[60%]`}>
        <h3 className="font-bold text-[13px] sm:text-[14px] text-left leading-tight">{title}</h3>

        {/* Arrow Icon Positioned Below Title */}
        <div
          className={`bg-black rounded-full p-1 w-fit mt-2 transition-transform duration-200 ${isHovered ? "translate-x-1" : ""}`}
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          width={110}
          height={110}
          alt=""
          aria-hidden="true"
          className="object-contain"
        />
      </div>
    </Card>
  )
}


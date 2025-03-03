"use client"

import { useState } from "react"
import { Menu, Phone, Dumbbell } from "lucide-react"

export default function Coupon() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#201a1a] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/236x/04/0a/40/040a40b336dd6de3037f60d3407372c2.jpg"
          alt="Gym background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-4 bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#5c9c31]">
            <img src="/placeholder.svg?height=64&width=64" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-xl font-bold">Thorn Thavann</h1>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#ffffff] p-2">
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#201a1a] bg-opacity-95 flex flex-col items-center justify-center">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-white p-2">
            <Menu size={28} />
          </button>
          <nav className="flex flex-col items-center gap-6 text-xl">
            <a href="#" className="text-[#5c9c31] font-bold">
              Home
            </a>
            <a href="#" className="hover:text-[#5c9c31]">
              About
            </a>
            <a href="#" className="hover:text-[#5c9c31]">
              Services
            </a>
            <a href="#" className="hover:text-[#5c9c31]">
              Membership
            </a>
            <a href="#" className="hover:text-[#5c9c31]">
              Contact
            </a>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 px-8 pt-16 pb-24 flex flex-col h-[calc(100vh-80px)]">
        <div className="flex items-center gap-2 mb-2">
          <Dumbbell className="text-[#5c9c31]" size={24} />
          <span className="text-[#5c9c31] font-semibold tracking-wider">SPORTS</span>
        </div>

        <h2 className="text-[#5c9c31] text-6xl font-bold leading-tight">FITNESS</h2>
        <h1 className="text-white text-8xl font-extrabold leading-none mb-6">GYM</h1>

        <div className="bg-[#5c9c31] inline-block px-6 py-3 mb-8">
          <span className="text-xl font-bold uppercase">Share your body</span>
        </div>

        <p className="text-white/80 max-w-xs mb-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nummy nibhmod tincidunt ut laoreet
          doloreagna aliquam
        </p>

        <div className="mt-8">
          <h3 className="text-white text-3xl font-bold">GET 07 DAYS</h3>
          <p className="text-[#5c9c31] text-4xl font-bold mb-6">FREE TRIAL</p>

          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#5c9c31] rounded-full p-2">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm text-white/70">CALL FOR MORE INFO:</p>
              <p className="text-xl font-bold">+123 4568 7890</p>
            </div>
          </div>

          <button className="w-full bg-[#5c9c31] text-white py-4 rounded-full text-xl font-bold">Claim Now!</button>
        </div>
      </main>
    </div>
  )
}


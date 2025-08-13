import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="hover:bg-white/1 transition-all duration-200 hover:backdrop-blur-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo or Brand */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl font-bold text-black">
                Course Examiner
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink
                to="/"
                className="border border-blue-500 rounded-xl px-7 py-2 font-medium hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow active:bg-blue-700"
              >
                Return
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md border border-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu Items */}
          {isOpen && (
            <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4">
              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="border border-blue-500 rounded-xl px-7 py-2 font-medium hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow active:bg-blue-700"
              >
                Return
              </NavLink>
            </div>
          )}
        </div>
      </header>
    </>
  );
}


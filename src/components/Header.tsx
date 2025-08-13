import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="hover:bg-white/1 transition-all duration-200 hover:backdrop-blur-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo or Brand */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-Black">
              Course Examiner
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/Form"
              className=" text-gray-900 font-medium h-16 flex items-center"
            >
              Exam Taker
            </NavLink>
            <NavLink
              to="/LoginPage"
              className="border border-blue-500 rounded-xl px-7 py-2 font-medium hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow active:bg-blue-700"
            >
              Log In
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-200"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/50 backdrop-blur-md border-t border-gray-200">
          <div className="space-y-2 px-4 py-3">
            <NavLink to="/Form" className="block text-gray-900 font-medium">
              Exam Taker
            </NavLink>
            <NavLink
              to="/LoginPage"
              className="w-full border border-blue-500 rounded-xl px-7 py-2 font-medium hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow active:bg-blue-700"
            >
              Log In
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

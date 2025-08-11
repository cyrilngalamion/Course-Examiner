import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="hover:bg-white/1 transition-all duration-200 hover:backdrop-blur-sm hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] fixed w-full top-0 left-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Left: Logo or Brand */}
      <div className="flex-shrink-0">
        <h1 className="text-xl font-bold text-blue-600">Exam App</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <a
          href="#"
          className="border-b-3 border-blue-500  text-gray-900 font-medium h-16 flex items-center"
        >
          Exam Taker
        </a>
        <button className="border border-blue-500 rounded-xl px-7 py-2 font-medium hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow active:bg-blue-700">
          Log In
        </button>
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
        <a href="#" className="block text-gray-900 font-medium">
          Exam Taker
        </a>
        <button className="w-full border border-blue-500 rounded-xl px-7 py-2 font-medium hover:bg-blue-500 hover:text-white hover:border-transparent hover:shadow active:bg-blue-700">
          Log In
        </button>
      </div>
    </div>
  )}
</header>

  );
}

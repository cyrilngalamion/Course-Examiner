export default function Body() {
  return (
    <>
      <div
        className="min-h-screen w-full flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/Background.png')",
        }}
      >
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-1">
            {/* Left Section */}
            <div className="p-6 md:p-10 lg:p-20">
              <div className="bg-transparent hover:bg-white/5 transition-all duration-300 hover:backdrop-blur-xl p-6 sm:p-8 md:p-10 hover:shadow-[4px_4px_25px_rgba(0,0,0,0.1)] rounded-3xl">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4">
                  Welcome to Course Examiner
                </h2>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-6">
                  Course Examiner is a secure and user-friendly online platform
                  that allows students to take entrance exams anytime and
                  anywhere. It streamlines the testing process, provides instant
                  submissions, and helps schools efficiently evaluate applicants.
                </p>
                <div className="w-full flex justify-end">
                  <button className="border border-blue-500 rounded-xl px-6 py-3 font-medium hover:border-transparent hover:bg-blue-500 hover:text-white hover:shadow active:bg-blue-700 transition">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center items-center p-4">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src="/examtaker.png"
                  alt="Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Footer from "../components/Footer";
import FormNav from "../components/Navbar";

export default function Form() {
  return (
    <>
      <FormNav />
      <main>
        <div
          className="min-h-screen w-full flex justify-center items-center bg-cover bg-center px-4 sm:px-6"
          style={{
            backgroundImage: "url('/Background.png')",
          }}
        >
          <div className="flex justify-center items-center p-6 sm:p-10 rounded-3xl shadow w-full max-w-md bg-white/30 hover:bg-white transition-all duration-300 hover:backdrop-blur-xl hover:shadow-[4px_4px_25px_rgba(0,0,0,0.1)]">
            <form className="w-full">
              <h2 className="text-2xl sm:text-3xl mb-7 text-center">
                Fill Out Form
              </h2>

              {/* First Name */}
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Middle Name */}
              <input
                type="text"
                name="middlename"
                placeholder="Middle Name"
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Last Name */}
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Contact Number */}
              <input
                type="tel"
                name="contact"
                placeholder="Contact Number"
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-full mt-3 transition active:bg-green-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main>
        <div
          className="min-h-screen w-full flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/Background.png')",
          }}>
          <div className="flex justify-center items-center p-10 rounded-3xl shadow w-full max-w-md bg-white/30 hover:bg-white transition-all duration-300 hover:backdrop-blur-xl hover:shadow-[4px_4px_25px_rgba(0,0,0,0.1)] rounded-3xl">
            <form className="">
              <h2 className="text-2xl font-bold mb-10 text-center">Login</h2>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-full  focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-full mt-3 transition active:bg-green-700 "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

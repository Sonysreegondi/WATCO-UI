import { Link } from "react-router-dom";

export default function Login() {
  return (
  <div
      className="min-h-screen w-full bg-cover bg-[right_center] bg-no-repeat flex items-center justify-end"
      style={{ backgroundImage: "url('/assets/images/train.jpg')" }}
    >
      {/* Floating Login Card */}
      <div className="bg-white w-full max-w-md p-8 shadow-2xl rounded-lg m-8">
        <div className="text-center mb-6">
          <img
            src="/assets/images/cattletrain.png"
            alt="Cattle Train Logo"
            className="mx-auto mb-4 w-28 sm:w-32"
            style={{ maxWidth: "25%", height: "auto", top: "20px" }}
          />

          <p
            className="text-gray-700 mt-4"
            style={{ fontFamily: "Lexend Deca" }}
          >
            Welcome!
            <br />
            Please enter your details to Login
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <img
                  src="/assets/icons/profile-circle.svg"
                  alt="email"
                  className="w-5 h-5"
                />
              </span>
              <input
                type="email"
                placeholder="Albertflores@gmail.com"
                className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <img
                  src="/assets/icons/lock-circle.svg"
                  alt="Lock Icon"
                  className="w-5 h-5"
                />
              </span>
              <input
                type="password"
                placeholder="**************"
                className="w-full pl-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <Link
              to="/change-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Your Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

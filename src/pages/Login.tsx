import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat bg-right flex items-center justify-end px-4 sm:px-8 py-8"
      style={{ backgroundImage: "url('/assets/images/train.jpg')" }}
    >
      {/* Floating Login Card */}
      <div className="bg-white w-full max-w-md lg:max-w-lg p-6 shadow-2xl rounded-lg flex flex-col mr-12">
        <div className="text-center mb-4">
          <img
            src="/assets/images/cattletrain.png"
            alt="Cattle Train Logo"
            className="mx-auto w-24 sm:w-28 mb-3"
            style={{ height: "auto" }}
          />

          <h2
            className="text-[22px] font-normal text-gray-900 leading-tight text-center"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Welcome!
          </h2>

          <p
            className="text-sm text-gray-600 mt-1"
            style={{ fontFamily: "Lexend Deca" }}
          >
            Please enter your details to Login
          </p>
        </div>

        <form className="space-y-4">
          {/* Email Input */}
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
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Password Input */}
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
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>

          {/* Remember Me + Forgot Password */}
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Redirect */}
        <div className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

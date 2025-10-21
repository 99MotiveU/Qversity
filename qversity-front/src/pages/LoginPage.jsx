import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Log in to Qversity</h1>
          <p className="mt-2 text-gray-600">Welcome back! Please enter your details.</p>
        </div>

        <div className="space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center py-2.5 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {/* Add Google Icon SVG here */}
            <span className="ml-3 font-medium text-gray-700">Continue with Google</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center py-2.5 border rounded-md bg-[#FEE500] hover:bg-[#F7D600]"
          >
            {/* Add Kakao Icon SVG here */}
            <span className="ml-3 font-medium text-gray-800">Continue with Kakao</span>
          </button>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <hr className="flex-grow border-gray-300" />
          <span className="text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

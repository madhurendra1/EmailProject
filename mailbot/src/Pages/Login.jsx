import React, { useState } from 'react';
import logoImg from "../Images/logo.png";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://onebox-mailbot.netlify.app/onebox";
    }, 2000);
  };

  return (
    <div className="font-open-sans bg-black min-h-screen flex flex-col justify-between">
      <header className="flex justify-center items-center py-4 bg-black border-b border-solid border-gray-800 fixed top-0 w-full">
        <img src={logoImg} alt="ReachInBox logo" />
      </header>

      <main className="flex flex-col items-center justify-center flex-grow">
        <div className="w-1/4 p-8 bg-gradient-to-t from-gray-900 to-gray-800 border border-solid border-gray-700 rounded-xl">
          <div className="space-y-8">
            <h2 className="text-white text-2xl font-semibold">Create a new account</h2>
            <button 
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center border border-solid border-gray-600 rounded-md p-2 gap-2 bg-gradient-to-t from-gray-900 to-gray-800 hover:bg-gray-800"
              disabled={loading}
            >
              <FcGoogle />
              <span className="text-gray-300 hover:text-gray-400">Sign Up with Google</span>
            </button>
          </div>

          <div className="space-y-8 text-center mt-8">
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-900 rounded-md p-3 text-white text-lg font-semibold hover:bg-blue-700">Create an Account</button>
            <p className="text-gray-600">Already have an account? <a className="text-white hover:text-gray-400" href="/signin">Sign In</a></p>
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center py-4 bg-black border-t border-solid border-gray-800 w-full">
        <p className="text-white text-sm">© 2025 ReachInBox. All rights reserved.</p>
      </footer>

      {/* Loader overlay */}
      {loading && (
        <div role="status" className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <svg class="w-12 h-12 text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
            </path>
          </svg>
        </div>
      )}
    </div>
  );
}

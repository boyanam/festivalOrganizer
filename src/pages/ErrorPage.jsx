import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 md:p-16 rounded shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-6xl md:text-9xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link
          to="/"
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

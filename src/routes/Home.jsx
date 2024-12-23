
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Handle redirection logic when clicking "Get Started"
  const handleGetStarted = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/mylist");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="min-h-screen bg-black-to-b from-blue-300 via-purple-300 to-blue-300">
      {/* Hero Section */}
      <header className="text-center py-20 ">
        <h1 className="text-5xl font-extrabold text-purple-900  italic">
          Welcome to <span className="text-pink-600">LiSTiNGER!</span>
        </h1>
        <p className="mt-4 text-lg text-purple-800">Your partner for organizing shopping lists and more!</p>
        
        {/* 'Get Started' button triggers the redirect */}
        <button 
          onClick={handleGetStarted} 
          className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-pink-500 hover:shadow-xl"
        >
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section id="Home" className="py-16 bg-white rounded-t-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-purple-800 mb-8">Why Choose LiSTiNGER?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-purple-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Improved Organization</h3>
              <p>Keeps all your shopping items neatly listed and categorized, ensuring you don’t forget anything.</p>
            </div>
            <div className="p-6 bg-blue-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Time-Saving</h3>
              <p>Streamlines shopping trips by reducing the time spent recalling or searching for needed items.</p>
            </div>
            <div className="p-6 bg-green-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Budget Management</h3>
              <p>Tracks costs and helps you stay within your budget, avoiding unnecessary expenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 LiSTiNGER. Making your shopping joyful!</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

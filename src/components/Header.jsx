import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  // Update logged-in state when user changes
  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/"); // Redirect to homepage
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide italic">
          <Link to="/" className="hover:text-gray-200">
            LiSTiNGER
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="hover:underline hover:text-gray-200 transition-all"
          >
            Home
          </Link>
          <Link
            to="/mylist"
            className="hover:underline hover:text-gray-200 transition-all"
          >
            MyList
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-gray-200 transition-all"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:underline hover:text-red-200 transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hover:underline hover:text-gray-200 transition-all"
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg p-4 space-y-4">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block hover:text-purple-600 transition-all"
          >
            Home
          </Link>
          <Link
            to="/mylist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block hover:text-purple-600 transition-all"
          >
            MyList
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block hover:text-purple-600 transition-all"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="block text-red-600 hover:text-purple-600 transition-all"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-purple-600 transition-all"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
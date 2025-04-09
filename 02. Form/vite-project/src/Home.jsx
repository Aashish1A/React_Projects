import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
          <nav className="space-x-4">
            <Link to="/home" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600 font-medium">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex items-center justify-center flex-col text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">MyApp</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Build fast, beautiful web applications using the power of the MERN Stack. 
          Login to explore more or sign up to get started!
        </p>
        <div className="space-x-4">
          <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </Link>
          <Link to="/login" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-100 transition">
            Login
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
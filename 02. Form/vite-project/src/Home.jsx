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
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
            <Link to="/register" className="text-gray-700 hover:text-blue-600 font-medium">Logout</Link>
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
          I am here to help you for your website development! <br />
          Any problem regarding website development whether it's part of frontend, backend or database i will help you!
        </p>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
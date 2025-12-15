import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-10 py-4 bg-white shadow-lg border-b border-gray-200">
      <div className="flex items-center gap-2"><Link to="/">
        <img src="/Logo.jpg" alt="Logo" className="w-32 h-16 rounded-md shadow-sm" /></Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-800">
        <li><Link to="/covid" className="hover:text-blue-600 transition-colors duration-200">Covid-19</Link></li>
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
            Patients <span className="text-xs">▼</span>
          </span>
          <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform group-hover:translate-y-0 translate-y-2">
            <Link to="/book-test" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-t-lg">📅 Book a Test</Link>
            <Link to="/health-packages" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">🏥 Health Packages</Link>
            <Link to="/current-offers" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-b-lg">🎉 Current Offers</Link>
          </div>
        </li>
        <li className="relative group">
          <span className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
            Doctors <span className="text-xs">▼</span>
          </span>
          <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform group-hover:translate-y-0 translate-y-2">
            <Link to="/clinical-reference-lab" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-t-lg">🔬 Clinical Reference Lab</Link>
            <Link to="/department" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-b-lg">🏢 Department</Link>
          </div>
        </li>
        <li className="relative group">
          <Link to="/about" className="cursor-pointer hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
            About us <span className="text-xs">▼</span>
          </Link>
          <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform group-hover:translate-y-0 translate-y-2">
            <Link to="/management" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-t-lg">👔 Management</Link>
            <Link to="/accreditations" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">🏆 Accreditations and Achievement</Link>
            <Link to="/visuals" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">📸 Visuals</Link>
            <Link to="/contacts" className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-b-lg">📞 Contacts</Link>
          </div>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <a href="https://lis.crldiagnostics.com/CRL/Design/Default.aspx" className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full inline-block text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          LIS Login
        </a>
        <a href="https://lis.crldiagnostics.com/CRL/Design/online_lab/" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full inline-block text-center shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          Patient Reports
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-20">
          <ul className="flex flex-col py-4">
            <li><Link to="/covid" className="block px-4 py-2 text-gray-800 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>Covid-19</Link></li>
            <li className="relative">
              <span className="block px-4 py-2 text-gray-800 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Patients</span>
              <div className="pl-4">
                <Link to="/book-test" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>📅 Book a Test</Link>
                <Link to="/health-packages" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>🏥 Health Packages</Link>
                <Link to="/current-offers" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>🎉 Current Offers</Link>
              </div>
            </li>
            <li className="relative">
              <span className="block px-4 py-2 text-gray-800 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>Doctors</span>
              <div className="pl-4">
                <Link to="/clinical-reference-lab" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>🔬 Clinical Reference Lab</Link>
                <Link to="/department" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>🏢 Department</Link>
              </div>
            </li>
            <li className="relative">
              <Link to="/about" className="block px-4 py-2 text-gray-800" onClick={() => setIsMobileMenuOpen(false)}>About us</Link>
              <div className="pl-4">
                <Link to="/management" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>👔 Management</Link>
                <Link to="/accreditations" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>🏆 Accreditations and Achievement</Link>
                <Link to="/visuals" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>📸 Visuals</Link>
                <Link to="/contacts" className="block px-4 py-2 text-gray-700 hover:bg-blue-50" onClick={() => setIsMobileMenuOpen(false)}>📞 Contacts</Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


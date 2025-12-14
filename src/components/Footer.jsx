import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-300">
      {/* Top button */}
      <div className="flex flex-col items-center py-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224025.46924180034!2d76.8262821328125!3d28.677739999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0250e5cc812b%3A0xe77265e57f37a61e!2sCRL%20DIAGNOSTICS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1765711297258!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg mb-4 max-w-full"
        ></iframe>
        <a
          href="https://www.google.com/maps/search/CRL+DIAGNOSTICS+PVT+LTD"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg inline-block text-center"
        >
          View More Locations →
        </a>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <img
            src="/Logo.jpg"
            alt="CRL Diagnostics"
            className="w-48 mb-4 rounded-lg shadow-sm"
          />

          <p className="text-gray-600 mb-4 leading-relaxed">
            In case you have any questions, write to us via the email or make a call!
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are available 7 days a week.<br />
            From: 8 AM – 8 PM
          </p>

          <div className="flex items-center gap-3 mb-2 font-semibold text-gray-800">
            <span className="text-blue-600 text-xl">📞</span>
            <span>1800-313-7878</span>
          </div>

          <div className="flex items-center gap-3 font-semibold text-gray-800">
            <span className="text-green-600 text-xl">✉️</span>
            <span>info@crldiagnostics.com</span>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110 flex items-center justify-center">
              <FaLinkedinIn className="text-lg" />
            </a>
            <a href="#" className="bg-sky-500 text-white p-3 rounded-full hover:bg-sky-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110 flex items-center justify-center">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-110 flex items-center justify-center">
              <FaFacebookF className="text-lg" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-800">SITE MAP</h3>
          <ul className="space-y-3 text-red-600 font-medium">
            <li className="hover:text-red-700 transition-colors duration-200 cursor-pointer">COVID-19</li>
            <li className="hover:text-red-700 transition-colors duration-200 cursor-pointer">PATIENTS</li>
            <li className="hover:text-red-700 transition-colors duration-200 cursor-pointer">DOCTORS</li>
            <li className="hover:text-red-700 transition-colors duration-200 cursor-pointer">ABOUT US</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-red-600">PATIENTS</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">BOOK A TEST</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">HEALTH PACKAGES</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">COVID-19</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">PATIENT REPORTS</li>
          </ul>

          <h3 className="font-bold text-lg mt-8 mb-4 text-red-600">DOCTORS</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">DOCTORS</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">DEPARTMENT</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">CLINICAL REFERENCE LAB</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-red-600">ABOUT CRL</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">ABOUT US</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">ACCREDITATIONS AND ACHIEVEMENTS</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">OUR OFFICES</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">VISUALS</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">CONTACT US</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">PRIVACY POLICY</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">CAREERS</li>
            <li className="hover:text-gray-900 transition-colors duration-200 cursor-pointer">TERMS AND CONDITIONS</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm bg-white">
        <span className="text-gray-600">CRL DIAGNOSTICS PVT. LTD. © 2024 All Rights Reserved.</span>{" "}
        <span className="font-semibold text-gray-800">
          Designed and Developed by :- DGN
        </span>
      </div>

      {/* Scroll to top */}
      <button className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
        ↑
      </button>
    </footer>
  );
}

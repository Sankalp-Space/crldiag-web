import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  const [selectedBank, setSelectedBank] = useState(null);

  const bankDetails = {
    'ICICI BANK': {
      accountNumber: '1234567890',
      ifscCode: 'ICIC0001234',
      branch: 'Delhi Branch'
    },
    'AXIS BANK': {
      accountNumber: '0987654321',
      ifscCode: 'UTIB0000567',
      branch: 'Mumbai Branch'
    },
    'HDFC BANK': {
      accountNumber: '1122334455',
      ifscCode: 'HDFC0000890',
      branch: 'Bangalore Branch'
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-300">
      {/* Banking Details Section */}
      <section className="px-4 md:px-10 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <h2 className="text-center text-3xl font-bold text-red-600 mb-10">
          BANKING DETAILS
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Bank List */}
          <div className="lg:w-1/2">
            
            <div className="grid grid-cols-1 gap-4">
              {Object.keys(bankDetails).map((bank) => (
                <button
                  key={bank}
                  onClick={() => setSelectedBank(bank)}
                  className={`w-full text-center px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedBank === bank
                      ? 'bg-red-500 text-white shadow-xl border-2 border-red-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-2 border-gray-200 hover:border-red-300'
                  }`}
                >
                  {bank}
                </button>
              ))}
            </div>
          </div>

          {/* Bank Details */}
          <div className="lg:w-1/2">
            
            {selectedBank ? (
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">{selectedBank}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-800">Account Number:</span>
                    <span className="text-gray-700 font-mono">{bankDetails[selectedBank].accountNumber}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-800">IFSC Code:</span>
                    <span className="text-gray-700 font-mono">{bankDetails[selectedBank].ifscCode}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-800">Branch:</span>
                    <span className="text-gray-700">{bankDetails[selectedBank].branch}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-gray-400">🏦</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Top button */}
      <div className="flex flex-col items-center py-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224025.46924180034!2d76.8262821328125!3d28.677739999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0250e5cc812b%3A0xe77265e57f37a61e!2sCRL%20DIAGNOSTICS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1765711297258!5m2!1sen!2sin"
          width="1200"
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

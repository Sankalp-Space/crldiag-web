import React from "react";
import { motion } from "framer-motion";

function ComingSoon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-6xl text-white">🚀</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          We're working hard to bring you something amazing. Stay tuned for updates!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button
            onClick={() => window.history.back()}
            className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Go Back
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Home
          </button>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default ComingSoon;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7fb] text-[#0c0c33]">

      {/* <Navbar /> */}

      {/* HERO SECTION */}
      <motion.section
        className="w-full flex flex-col md:flex-row items-center px-4 md:px-10 py-20 gap-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-6xl font-extrabold">COVID-19</h1>

          <p className="text-lg">
            Let’s fight this pandemic together against the CORONA virus.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-red-600 font-bold">
              <span>✔</span> GOVERNMENT APPROVED LAB
            </li>
            <li className="flex items-center gap-3 text-red-600 font-bold">
              <span>✔</span> NABL CERTIFIED LAB
            </li>
          </ul>

          <button className="bg-[#0c0c7a] text-white px-8 py-3 rounded-full">
            READ MORE
          </button>
        </div>

        {/* RIGHT SIDE IMAGE BOX */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden bg-white shadow-lg">
          <img src="/hero image.png" alt="Hero Image" className="w-full h-[350px] object-cover" />
        </div>

      </motion.section>

      {/* ADVANTAGES */}
      <motion.section
        className="px-4 md:px-10 py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm tracking-widest text-gray-600 uppercase mb-4">
            WHY PEOPLE CHOOSE OUR LABORATORY
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR ADVANTAGES
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-5xl font-bold text-blue-600 mb-3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              90+
            </motion.p>
            <p className="text-gray-600 font-semibold text-lg">DEPARTMENT EXPERTS</p>
            <p className="text-sm text-gray-500 mt-2">Highly qualified professionals</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-5xl font-bold text-green-600 mb-3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              1500+
            </motion.p>
            <p className="text-gray-600 font-semibold text-lg">COLLECTION CENTRES</p>
            <p className="text-sm text-gray-500 mt-2">Across multiple locations</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-5xl font-bold text-purple-600 mb-3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              10000+
            </motion.p>
            <p className="text-gray-600 font-semibold text-lg">SQ FEET LAB AREA</p>
            <p className="text-sm text-gray-500 mt-2">State-of-the-art facility</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-5xl font-bold text-red-600 mb-3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              6
            </motion.p>
            <p className="text-gray-600 font-semibold text-lg">FLOOR BUILDING</p>
            <p className="text-sm text-gray-500 mt-2">Modern infrastructure</p>
          </motion.div>
        </div>
      </motion.section>

      {/* AWARDS */}
      <motion.section
        className="bg-[#0c0c33] text-white px-4 md:px-10 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10">OUR AWARDS</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.img
            src="/certificate 1.jpeg"
            alt="Certificate 1"
            className="w-full h-[380px] bg-white rounded-md shadow object-contain"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/certificate 2.jpeg"
            alt="Certificate 2"
            className="w-full h-[380px] bg-white rounded-md shadow object-contain"
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src="/cerficate 3.png"
            alt="Certificate 3"
            className="w-full h-[380px] bg-white rounded-md shadow object-contain"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.section>

      

    </main>
  );
}

export default Home;

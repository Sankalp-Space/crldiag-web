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
        className="px-4 md:px-10 py-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-center text-sm tracking-wide text-gray-500">
          WHY PEOPLE CHOOSE OUR LABORATORY
        </h3>

        <h2 className="text-center text-5xl font-bold mb-10">OUR ADVANTAGES</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-3xl font-bold">
          <div>
            <p className="text-4xl">90+</p>
            <p className="text-sm text-gray-500 mt-1">DEPARTMENT EXPERTS</p>
          </div>

          <div>
            <p className="text-4xl">1500+</p>
            <p className="text-sm text-gray-500 mt-1">COLLECTION CENTRES</p>
          </div>

          <div>
            <p className="text-4xl">10000+</p>
            <p className="text-sm text-gray-500 mt-1">SQ FEET LAB AREA</p>
          </div>

          <div>
            <p className="text-4xl">6</p>
            <p className="text-sm text-gray-500 mt-1">FLOOR BUILDING</p>
          </div>
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

      {/* BANKING DETAILS */}
      <section className="px-4 md:px-10 py-20">
        <h2 className="text-center text-3xl font-bold text-red-600 mb-10">
          BANKING DETAILS
        </h2>

        <div className="space-y-4 text-xl">
          <p>ICICI BANK</p>
          <p>AXIS BANK</p>
          <p>HDFC BANK</p>
        </div>
      </section>

    </main>
  );
}

export default Home;

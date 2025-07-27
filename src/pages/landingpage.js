import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10" style={{ backgroundColor: '#f87171' }}>
      <motion.img
        src="/images/agam-logo.png"
        alt="Machani Logo"
        className="w-40 mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Machani
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-yellow-700 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Presented by Machani
      </motion.h2>

      <p className="text-yellow-800 text-base max-w-md mb-10">Connecting People</p>

      <div className="space-y-6 w-full max-w-md">
        <motion.button
          className="w-full py-3 px-6 bg-yellow-400 text-black text-lg rounded-xl shadow hover:bg-yellow-500"
          onClick={() => navigate("/about")}
          whileHover={{ scale: 1.05 }}
        >
          About Us
        </motion.button>

        <motion.button
          className="w-full py-3 px-6 bg-red-500 text-white text-lg rounded-xl shadow hover:bg-red-600"
          onClick={() => navigate("/event")}
          whileHover={{ scale: 1.05 }}
        >
          Upcoming Event
        </motion.button>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { number: 347, label: "Team Members" },
    { number: 85, label: "Winning Awards" },
    { number: 30, label: "Years Experienced" },
    { number: 2345, label: "Projects Done" },
  ];

  // States for animated numbers
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000; 
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

        if (start >= end) clearInterval(timer);
      }, stepTime);
    });
  }, []);

  return (
    <section
      className="relative py-16 bg-gray-50 bg-center bg-cover z-[-10] mt-25"
      style={{
        backgroundImage:
          "url('https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-15.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative container mx-auto px-6">
        {/* Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-12"
        >
          Donate Food & Help the Poors on{" "}
          <span className="text-green-700">
            Shrimati Anita Devi Foundation NGO
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Stats (Count Animation + Fade In Left) */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-4xl font-extrabold text-blue-900">
                  {counts[i]}+
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
                {i < stats.length - 1 && (
                  <div className="w-16 border-b border-gray-400 mx-auto md:mx-0 my-4"></div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Content Text (Fade In Right) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-700">
              You can make a{" "}
              <span className="font-semibold">big difference to their lives!</span>{" "}
              Empower them to live healthier, stronger and better life
            </p>

            <h3 className="font-bold text-blue-900 text-lg md:text-xl">
              JOIN US IN BUILDING A WORLD WHERE EVERYONE CAN BUILD A BRIGHTER
              TOMORROW
            </h3>

            <p className="text-gray-700">
              <span className="text-orange-500 font-semibold">
                Education, Environment, Equality:
              </span>{" "}
              These are the building blocks for a better world, and Shrimati Anita
              Devi Foundation is working to make them stronger. We provide
              educational opportunities, protect our planet, and empower women.
            </p>

            <p className="text-gray-700">
              <span className="text-orange-500 font-semibold">Every Bit Counts:</span>{" "}
              Your donation, no matter the size, helps us create a wave of positive
              change. Donate food today and be part of the solution!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-md transition"
            >
              DONATE NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

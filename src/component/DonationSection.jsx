import { motion } from "framer-motion";

const images = [
  "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/9-300x235.jpg",
  "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/8-300x235.jpg",
  "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/7-300x235.jpg",
  "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/4-2-300x235.jpg",
  "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/2-1-300x235.jpg",
  "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/1-2-300x235.jpg",
];

export default function DonationSection() {
  return (
    <section className="w-full bg-green-500 py-12 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4 text-white"
      >
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-400">Show</span> Your Humanity
        </h2>
        <p className="text-lg leading-relaxed max-w-md">
          We are humanity/ non-profit/ fundraising/ NGO organizations. Our
          humanity activities are taken place around the world, let contribute
          to them with us by your hand to be a better life.
        </p>
        <a
          href="#donateform2"
          className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition"
        >
          Donate Now
        </a>
      </motion.div>

      {/* Right Side - Image Grid */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="donation"
            className="w-full h-40 object-cover rounded-md shadow-md"
          />
        ))}
      </motion.div>
    </section>
  );
}

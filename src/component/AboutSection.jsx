
export default function AboutSection() {
  const stats = [
    { number: "347+", label: "Team Members" },
    { number: "85+", label: "Winning Awards" },
    { number: "30+", label: "Years Experienced" },
    { number: "2,345+", label: "Projects Done" },
  ];

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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Donate Food & Help the Poors on{" "}
          <span className="text-green-700">
            Shrimati Anita Devi Foundation NGO
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col items-center ">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-4xl font-extrabold text-blue-900">
                  {stat.number}
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
                {i < stats.length - 1 && (
                  <div className="w-16 border-b border-gray-400 mx-auto md:mx-0 my-4"></div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-6">
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

            <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-md transition">
              DONATE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
    return (
        <section
            className="relative bg-gray-100 py-16 overflow-hidden"
            style={{
                backgroundImage:
                    "url('https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-15.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-[#002966c4]"></div>

            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10 relative z-10">
                <div className="animate-fadeIn">
                    <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                        Building a Better World
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-4 text-white">
                        Some People{" "}
                        <span className="text-orange-500">Need Help</span> And We Give It!
                    </h2>
                    <p className="text-lg max-w-lg text-white">
                        NGO for Food Donation Deserves a Helping Hand. Your Support Creates
                        a Brighter Future for Those in Need. Every Contribution Makes a
                        Difference.
                    </p>
                </div>
                <div className="flex justify-center md:justify-start ml-40">
                    <a
                        href="#donateform2"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 shadow-md transition duration-300"
                    >
                        Donate Now
                    </a>
                </div>
            </div>
        </section>
    );
}

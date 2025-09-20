export default function Donationbox() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent px-4 my-[-100px] z-[10]">
      <section className="bg-[#6CC24A]  shadow-lg p-8 md:p-12 max-w-4xl w-full ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl space-y-6">
            <div className="inline-block bg-blue-900 text-yellow-400 text-sm font-bold px-4 py-1 rounded">
              EVERY DONATION IS A GIFT OF HOPE
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Your Food Donation <span className="text-yellow-300">Can Change</span> The Lives Of Many People
            </h2>

            <p className="text-lg">
              Our food donation NGO helps every needy person with full honesty and heart. Donate to Create a Better World!
            </p>

            <a
              href="#donate"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3  shadow-md border-2 border-blue-900 transition"
            >
              DONATE NOW
            </a>
          </div>

          <div className="relative w-full max-w-md">
            <img
              src="https://shrimatianitadevifoundation.org/wp-content/uploads/2025/08/ngo-for-food-donation-donate.webp"
              alt="Donation Image"
              className="rounded-md w-full"
            />

            <div className="absolute bottom-4 left-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow-md">
              Give Love, Take Love
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

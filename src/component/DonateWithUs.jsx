import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function DonateWithUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(500);

  const donationOptions = [250, 500, 1000, 2000];
  const volunteers = [
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-16-300x300.png",
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-12-300x300.png",
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-8-300x300.png",
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-9-300x300.png",
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-13-300x300.png",
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2024/05/hed-11-300x300.png",
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-orange-500 font-semibold">
            We Do Not Work For Profit.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Give A{" "}
            <span className="text-green-600">Helping Donation Hand</span> For
            Needy People
          </h2>
          <p className="mt-4 text-gray-700">
            <strong>Imagine the change you can create.</strong> Your donation
            could give food to a hungry child, provide a bed for a family without
            a home, offer learning opportunities for a youth in need, or help
            someone get better from an illness.
          </p>

          {/* Donate Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 px-6 py-3 bg-green-400 text-bold text-white hover:bg-blue-800 "
          >
            DONATE NOW
          </button>
        </div>

        {/* Volunteers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold">We Help Thousand Of Peoples</h3>
            <h2 className="text-2xl font-bold mt-2">Our Volunteers</h2>
          </div>
          <div className="flex items-center space-x-4">
            <i className="fas fa-phone-alt text-orange-500 text-2xl"></i>
            <div>
              <h3 className="font-semibold">Have Any Question</h3>
              <p className="text-gray-700">9560772533</p>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            loop
            breakpoints={{
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {volunteers.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`volunteer-${i}`}
                  className="w-48 h-48 object-cover rounded-lg shadow"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popup */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-3 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Complete Your Donation</h2>

            {/* Donation Options */}
            <div className="flex gap-2 mb-4 flex-wrap">
              {donationOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setAmount(opt)}
                  className={`px-4 py-2 border rounded-lg ${
                    amount === opt
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  ₹{opt}
                </button>
              ))}
            </div>

            <label className="block mb-2 font-semibold">
              Donation Amount (₹)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded mb-3"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <label className="block mb-2 font-semibold">Your Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              placeholder="Enter your name"
            />

            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              className="w-full p-2 border rounded mb-3"
              placeholder="Enter your email"
            />

            <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
              DONATE NOW
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

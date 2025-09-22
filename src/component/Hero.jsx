"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Hero() {
  const images = [
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2025/08/Copy-of-Copy-of-Copy-of-Untitled-2.webp",
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2025/08/ngo-for-food-donation-donate.webp",
    "https://shrimatianitadevifoundation.org/wp-content/uploads/2025/08/ngo-for-food-donation-online.webp",
  ];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden z-[-10]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="absolute inset-0 w-full h-full z-[-10]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-center min-h-fit"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Content Block */}
      <div className="absolute inset-0 h-full w-full flex items-center justify-start z-20">
        <div className="max-w-2xl px-6 md:px-12 space-y-6 text-left">
          <p className="text-orange-500 font-semibold tracking-wide uppercase text-shadow">
            No one has ever become poor by giving, Donate food for life!
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight text-shadow">
            We Help All Needy People
          </h1>
          <p className="text-lg text-gray-700 text-shadow">
            <span className="font-semibold text-blue-800">
              Education for All, A Healthy Planet, Empowered Women:
            </span>{" "}
            Building a World Where Everyone Can Build a Brighter Tomorrow.
            Donate Food Today for a Brighter Tomorrow!
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
            >
              CONTACT US
            </a>
            <a
              href="#donate"
              className="border-2 border-blue-800 text-blue-900 hover:bg-blue-800 hover:text-white font-semibold px-6 py-3 rounded-md transition"
            >
              DONATE NOW
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Sample logos array
const logos = [
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-1.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-2.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-3.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-4.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2021/06/pmr-logo-5-1.png",
];

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Partners
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center p-4 ">
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-16 sm:h-20 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const logos = [
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-1.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-2.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-3.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2020/10/pmr-logo-4.png",
  "https://alone7.beplusthemes.com/wp-content/uploads/2021/06/pmr-logo-5-1.png",
];

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-blue-900">
          Our <span className="text-green-600">Partners</span>
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="!pb-10"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className="h-16 sm:h-20 object-contain transition duration-500"
                />
              
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx global>{`
         .swiper-button-next,
         .swiper-button-prev {
           color: #fff !important;           
           background-color: #16a34a;        
           border-radius: 9999px;            
           padding: 12px;                    
           z-index: 50;
         }

         .swiper-button-next::after,
         .swiper-button-prev::after {
           font-size: 18px;
           font-weight: bold;
         }
`}</style>

      </div>
    </section>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

const donations = [
  {
    id: 1,
    title: "Kids Education",
    image:
      "https://shrimatianitadevifoundation.org/wp-content/uploads/2021/06/getty485621-1536x1024.jpg",
    raised: 12300,
    goal: 75000,
  },
  {
    id: 2,
    title: "Healthy Environment",
    image:
      "https://shrimatianitadevifoundation.org/wp-content/uploads/2017/07/getty499173-768x512.jpg",
    raised: 8530,
    goal: 45000,
  },
  {
    id: 3,
    title: "Empowering Women",
    image:
      "https://shrimatianitadevifoundation.org/wp-content/uploads/2017/07/getty231612-768x512.jpg",
    raised: 0,
    goal: 50000,
  },
];

export default function DonationCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="bg-white py-12 max-w-7xl mx-auto mt-10">
      <h2 className="text-5xl font-bold mb-2 text-center">Our Focus Area</h2>
      <p className="text-center mb-8 text-gray-600">
        Let's build a brighter future - donate today!
      </p>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!px-6"
        >
          {donations.map((item) => {
            const progress = Math.min((item.raised / item.goal) * 100, 100);
            return (
              <SwiperSlide key={item.id}>
                <div
                  className="relative rounded-xl overflow-hidden h-[320px] flex flex-col justify-end text-white"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 p-4">
                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg font-semibold">
                        ₹{item.raised.toLocaleString()}
                      </span>
                      <span className="text-yellow-400 font-bold">
                        ₹{item.goal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs mb-2">
                      <span>GOAL RAISED</span>
                      <span>DONATION GOAL</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-8 sm:left-6 md:left-10 
             bg-green-600 p-3 rounded-full shadow-md  
             hover:cursor-pointer z-10 "
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-4 md:right-10 
             bg-green-600 p-3 rounded-full shadow-md 
             hover:cursor-pointer z-10"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>

      </div>
    </div>
  );
}

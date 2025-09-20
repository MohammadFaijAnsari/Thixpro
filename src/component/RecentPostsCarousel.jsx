"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const posts = [
  {
    title: "What to Donate on Ekadshi – Shrimati Anita Devi Foundation",
    date: "April 29, 2025",
    link: "https://shrimatianitadevifoundation.org/what-to-donate-on-ekadshi/",
    img: "https://shrimatianitadevifoundation.org/wp-content/uploads/2025/04/what-to-donate-on-ekadshi.png",
  },
  {
    title: "Where to Donate Clothes",
    date: "April 18, 2025",
    link: "https://shrimatianitadevifoundation.org/where-to-donate-clothes/",
    img: "https://shrimatianitadevifoundation.org/wp-content/uploads/2025/04/cloth-donation.jpeg",
  },
  {
    title: "Why is Donating to Charity Important",
    date: "March 31, 2025",
    link: "https://shrimatianitadevifoundation.org/why-is-donating-to-charity-important/",
    img: "https://shrimatianitadevifoundation.org/wp-content/uploads/2025/04/cloth-donation.jpeg",
  },
  // add more posts here
];

export default function RecentPostsCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl text-center font-bold mb-3 text-gray-800">
          Recent Posts & News
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
          Read our recent posts and news to stay updated on our activities and initiatives.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <article className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {post.img ? (
                  <a href={post.link}>
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-52 sm:h-56 md:h-48 object-cover"
                    />
                  </a>
                ) : (
                  <div className="w-full h-52 sm:h-56 md:h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="p-5">
                  <p className="text-gray-400 text-sm mb-2">{post.date}</p>
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  <a
                    // href={post.link}
                    className="text-blue-600 hover:underline font-medium text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="inline-block bg-green-500 text-white  text-bold px-8  py-4   "
          >
            VIEW ALL POST
          </a>
        </div>
      </div>
    </section>
  );
}

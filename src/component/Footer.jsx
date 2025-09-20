// src/components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPinterest,
  FaPhoneSquareAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white bg-[#12126d] pt-12 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <p className="mb-4">
            Shrimati Anita Devi tackles the key causes of rural poverty by taking
            a holistic approach to rejuvenate rural communities and the ecosystems
            in which they live.
          </p>
          <h2 className="text-lg font-semibold mb-2">Connect With Us:</h2>
          <div className="flex space-x-3">
            <a href="https://www.facebook.com/people/Shrimati-Anitadevi-Foundation/61561030801568/" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FAnitaFoundatio" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@ShrimatiAnitadeviFoundation1/featured" target="_blank" rel="noopener noreferrer" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/shrimati_anitadevi_foundation/" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
              <FaInstagram />
            </a>
            <a href="https://in.pinterest.com/shrimati_anitadevi_foundation/" target="_blank" rel="noopener noreferrer" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/priorites" className="hover:text-green-600">Our Priorities</a></li>
            <li><a href="/activities" className="hover:text-green-600">Our Gallery</a></li>
            <li><a href="/contact-us" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="/about-us" className="hover:text-green-600">About Us</a></li>
            <li><a href="#donateform2" className="hover:text-green-600">Donate Now</a></li>
            <li><a href="/give-donation" className="hover:text-green-600">Food Donation</a></li>
          </ul>
        </div>

        {/* Legal Pages */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Legal Pages</h2>
          <ul className="space-y-2">
            <li><a href="/privacy-policy" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" className="hover:text-green-600">Terms & Conditions</a></li>
            <li><a href="/refund-cancellation" className="hover:text-green-600">Refund & Cancellation</a></li>
            <li><a href="/legal" className="hover:text-green-600">Legality</a></li>
            <li><a href="/disclaimers" className="hover:text-green-600">Disclaimer</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaPhoneSquareAlt />
              <span>+91-9560772533</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>H.O Khasra No 85, 1st Floor, Village Budh Pur Bija Pur, Delhi - 110036</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>B.O Sanjay Gandhi Nagar Square, Amravati - 444606, Maharashtra</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>B.O Mahua Singh RAE Tola, Vaishali - 844122, Patna</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt />
              <span>Email: shrimatianitadevi@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-6 mt-8 border-t border-gray-300">
        &copy; {new Date().getFullYear()} Shrimati Anita Devi Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

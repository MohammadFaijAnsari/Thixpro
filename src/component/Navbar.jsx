import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="bg-white shadow-md relative z-50 pt-14"> {/* 👈 z-index high */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="https://shrimatianitadevifoundation.org/storage/2020/08/shrimati-anita-devi-foundation-ngo-food-donation-charity-logo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-semibold">SHRIMATI ANITA DEVI</span>
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-black">
          <li><a href="#" className="hover:text-green-600">Home</a></li>
          <li><a href="#" className="hover:text-green-600">About Us</a></li>
          <li className="relative group">
            <button className="hover:text-green-600">Our Work ▾</button>
            <ul
              className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-64 opacity-0 translate-y-4 invisible 
                         group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
                         transition-all duration-300 ease-out z-50"  // 👈 dropdown bhi upar
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white bg-blue-200">
                  Importance of poor child education donation for NGO in Delhi
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white bg-blue-200">
                  Donate Medicine Give Unused Medication Online to Poor
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white bg-blue-200">
                  WOMEN EMPOWERMENT
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-blue-600 hover:text-white bg-blue-200">
                  ENVIRONMENT
                </a>
              </li>
            </ul>
          </li>
          <li><a href="#" className="hover:text-green-600">Activities</a></li>
          <li><a href="#" className="hover:text-green-600">Contact</a></li>
          <li><a href="#" className="hover:text-green-600">Become Volunteer</a></li>
          <li><a href="#" className="hover:text-green-600">Account Details</a></li>
        </ul>
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow-md font-medium z-50">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Work</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Become Volunteer</a></li>
          <li><a href="#">Account Details</a></li>
        </ul>
      )}
    </nav>
    <hr />
    </>
    
  );
}

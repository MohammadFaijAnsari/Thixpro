
import { useState } from "react";

export default function DonateHero() {
  const [amount, setAmount] = useState(250);

  const presetAmounts = [
    250, 500, 1000, 1500, 2000, 2500,
    3000, 5000, 10000, 15000, 20000
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-transparent p-6 lg:p-12 my-[-100px] shadow-lg z-10">
      <div className="lg:w-1/2 bg-green-700 text-white p-6 z-10">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">We Need Your Help</h1>
        <p className="mb-6">
          We need orphanage food donation from you. Help us bring happiness to the faces of those helpless and needy people.
        </p>
        <div className="flex justify-between mb-2">
          <div>
            Raised so far<br />
            <span className="text-yellow-400 font-bold text-xl">₹1,20,000</span>
          </div>
          <div>
            Our Goal<br />
            <span className="text-yellow-400 font-bold text-xl">₹5,00,000</span>
          </div>
        </div>
        <div className="w-full bg-white h-5 ">
          <div className="bg-green-400 h-5 " style={{ width: `${(120000/500000)*100}%` }}></div>
        </div>
      </div>
      <div className="lg:w-1/2 p-6 lg:pl-12 mt-6 lg:mt-0 bg-yellow-50 z-10">
        <p className="mb-2 text-sm">Please Select</p>
        <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-2">
          AMOUNT TO DONATE FOOD
        </h2>
        <p className="mb-4 text-gray-600">
          Donate today and be a part of making real change
        </p>
        <div className="mb-4 flex items-center">
          <span className="bg-green-700 text-white px-4 py-2 ">₹</span>
          <input
            type="number"
            className="border border-gray-300  p-2 w-full"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
          {presetAmounts.map((amt) => (
            <button
              key={amt}
              className={`py-2  font-semibold ${
                amount == amt
                  ? "bg-green-700 text-white"
                  : "bg-green-200 text-green-800"
              }`}
              onClick={() => setAmount(amt)}
            >
              ₹{amt.toLocaleString()}
            </button>
          ))}
          <button
            className="py-2 rounded-lg font-semibold bg-green-200 text-green-800"
            onClick={() => setAmount("")}
          >
            Custom Amount
          </button>
        </div>

        <button className="bg-green-700 text-white font-bold py-3 px-6 ">
          DONATE NOW
        </button>
      </div>
    </div>
  );
}

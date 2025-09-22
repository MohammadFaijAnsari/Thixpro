import { useState } from "react";

export default function DonationForm() {
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState(500); 
  const [custom, setCustom] = useState("");

  const donationLevels = [
    250, 500, 1000, 1500, 2000, 2500,
    3000, 5000, 10000, 15000, 20000,
  ];

  return (
    <section className="w-full py-12 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 rounded-lg overflow-hidden shadow-lg">
        {/* LEFT SECTION */}
        <div className="bg-green-800 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">We Need Your Help</h2>
          <p className="mb-6">
            We need a donation from you. Help us bring happiness to the faces of
            those helpless and needy people.
          </p>

          <div className="flex justify-between mb-2 font-semibold">
            <div>
              Raised so far <br />
              <span className="text-yellow-400 text-xl">₹1,20,000</span>
            </div>
            <div>
              Our Goal <br />
              <span className="text-yellow-400 text-xl">₹5,00,000</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-green-600 h-4 rounded-full overflow-hidden">
            <div
              className="bg-yellow-400 h-4"
              style={{ width: "24%" }}
            ></div>
          </div>
        </div>

        <div className="bg-yellow-100 p-8">
          <h3 className="text-sm font-semibold text-gray-700">Please Select</h3>
          <h2 className="text-2xl font-bold text-green-900">
            AMOUNT TO DONATE FOOD
          </h2>
          <p className="text-gray-700 mb-6">
            Donate today and be a part of making real change
          </p>

          {/* Selected Input with Rupee */}
          <div className="flex items-center mb-6">
            <span className="bg-green-700 text-white px-3 py-2 rounded-l-md">
              ₹
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
                setCustom(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-r-md px-4 py-2 text-green-800 font-semibold"
            />
          </div>

          {/* Amount Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {donationLevels.map((val) => (
              <button
                key={val}
                onClick={() => {
                  setAmount(val);
                  setCustom("");
                }}
                className={`px-4 py-2 rounded-md font-semibold ${
                  amount === val
                    ? "bg-green-800 text-white"
                    : "bg-green-200 text-green-800 hover:bg-green-300"
                }`}
              >
                ₹{val.toLocaleString()}
              </button>
            ))}

            {/* Custom Button */}
            <button
              onClick={() => {
                setAmount(custom ? parseInt(custom) : 0);
              }}
              className={`px-4 py-2 rounded-md font-semibold ${
                !donationLevels.includes(amount) && amount > 0
                  ? "bg-green-800 text-white"
                  : "bg-green-200 text-green-800 hover:bg-green-300"
              }`}
            >
              Custom Amount
            </button>
          </div>

          {/* Donate Button */}
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 w-full bg-green-800 text-white py-3 rounded-md font-semibold hover:bg-green-900 transition"
          >
            DONATE NOW
          </button>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Complete Your Donation
            </h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="border p-3 rounded-md w-full"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-3 rounded-md w-full"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address *"
                className="border p-3 rounded-md w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="border p-3 rounded-md w-full"
                required
              />

              {/* 80G Certificate */}
              <div>
                <label className="block font-medium mb-2">
                  Want 80G Certificate? *
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="certificate"
                      value="No"
                      defaultChecked
                    />
                    No
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="certificate" value="Yes" />
                    Yes
                  </label>
                </div>
              </div>

              {/* Donation Total */}
              <div className="text-lg font-semibold flex justify-between bg-gray-100 p-3 rounded-md">
                <span>Donation Total:</span>
                <span className="text-green-600">
                  ₹{amount.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="w-full bg-green-800 text-white py-3 rounded-md font-semibold hover:bg-green-900 transition"
              >
                Proceed to Pay
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

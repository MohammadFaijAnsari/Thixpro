import { Phone, Mail } from "lucide-react";

export default function Topbar() {
  return (
    <div
      className="bg-black text-white text-sm px-4 py-2 flex justify-between items-center h-14 fixed top-0 w-full z-100"
      id="topbar"
    >
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-2">
          <div className="bg-yellow-300 rounded">
            <Phone className="w-6 h-6 text-black" />
          </div>
          9560772533
        </span>
        <span className="flex items-center gap-2">
          <Mail className="w-6 h-6 text-yellow-400 text-2xl" />
          shrimatianitadevi.foundation16@gmail.com
        </span>
      </div>
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-md font-semibold">
        DONATE NOW
      </button>
    </div>
  );
}

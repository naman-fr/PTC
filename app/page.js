"use client";
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';

export default function Home() {
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const fetched = await axios.get("/api/sample");
        // console.log("Hello:", fetched.data);
        setCards(fetched.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  const filteredCards = useMemo(() => {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [cards, search]);

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white flex justify-between items-center p-4 px-8">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Training & Placement Cell Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">Training & Placement Cell</h1>
        </div>
        <div>
          <a href="#" className="p-3 cursor-pointer text-lg mr-5">About</a>
          <a href="/portal" className="p-3 cursor-pointer text-lg">Login</a>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white px-4 py-2 rounded border text-black w-80"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-6 p-6">
        {/* Connect Section */}
        <div className="p-6 col-span-1 justify-items-center">
          <h3 className="font-bold text-black">Connect</h3>
          <div className="p-4 mb-5 rounded-lg shadow-lg border w-80 text-center">
            <button className="w-full bg-pink-500 text-white p-2 mt-2 rounded">Instagram</button>
            <button className="w-full bg-blue-700 text-white p-2 mt-2 rounded">LinkedIn</button>
          </div>
          {/* <h3 className="font-bold text-black mt-4">Connect</h3>
          <div className="p-4 mb-5 rounded-lg shadow-lg border w-80 text-center">
            <button className="w-full bg-green-500 text-white p-2 mt-2 rounded">Send Message via WhatsApp</button>
            <button className="w-full bg-blue-700 text-white p-2 mt-2 rounded">Connect via LinkedIn</button>
          </div> */}
        </div>

        {/* Latest Post Section */}
        <div className="p-6 col-span-2 justify-items-center">
          {filteredCards.length > 0 ? (filteredCards.map((card) => (
            <div key={card.id} className="p-4 mb-5 rounded-lg shadow-lg border">
              <span className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">{card.type}</span>
              <h3 className="font-bold text-gray-800 mt-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.date}</p>
              <p className="mt-2 text-gray-700">{card.desc}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Read More</button>
            </div>
          ))) : (<p className="text-black text-2xl">No Results Found</p>)}
        </div>

        {/* Contact Section */}
        <div className="p-6 col-span-1 justify-items-center">

          <h3 className="text-lg font-semibold text-gray-800 mb-1">T&P Incharge</h3>
          <div className=" p-6 rounded-xl shadow-lg border w-80 text-center mb-5">

            {/* Profile Image */}
            <div className="flex justify-center">
              <Image src="/logo.png" width={100} height={100} alt="Professor" className="rounded-full border-4 border-blue-400" />
            </div>

            {/* Name & Designation */}
            <h4 className="font-bold text-gray-900 mt-4 text-lg">Prof. XYZ</h4>
            <p className="text-gray-600 text-sm">Training and Placement Incharge</p>

            {/* Contact Details */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-lg">
                📞 <span className="ml-2">+91-987654321</span>
              </div>
              <div className="flex items-center bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-lg">
                ✉️ <span className="ml-2">tpi@example.com</span>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">T&P Officer</h3>
          <div className=" p-6 rounded-xl shadow-lg border w-80 text-center">

            {/* Profile Image */}
            <div className="flex justify-center">
              <Image src="/logo.png" width={100} height={100} alt="Professor" className="rounded-full border-4 border-blue-400" />
            </div>

            {/* Name & Designation */}
            <h4 className="font-bold text-gray-900 mt-4 text-lg">Mr./Ms. PQRS</h4>
            <p className="text-gray-600 text-sm">Training and Placement Officer</p>

            {/* Contact Details */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-lg">
                📞 <span className="ml-2">+91-987654321</span>
              </div>
              <div className="flex items-center bg-gray-200 text-gray-700 text-sm px-3 py-2 rounded-lg">
                ✉️ <span className="ml-2">tpo@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
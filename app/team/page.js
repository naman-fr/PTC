"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../nav/AdminNavbar";
import Footer from "../foot/footer";

export default function Team() {
  const [cards, setCards] = useState([{}]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const fetched = await axios.get("/api/team");
        // console.log("Hello:", fetched.data);
        setCards(fetched.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar item={"Our Team"} />
      <div className="bg-gray-100 py-16">
      {loading ? (
          <div className="text-center text-blue-900 text-lg font-semibold">Loading...</div>
        ) : (
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-blue-900">Our Team</h2>
            <p className="text-gray-600 mt-2 italic">
              "The strength of the team is each individual member. The strength of each member is
              the team." – Phil Jackson
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {cards.length > 0 ? (
                <>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src={`data:image/jpeg;base64,${cards[0]?.image || ""}`}
                      alt="Placement Head"
                      className="w-28 h-28 border-4 border-blue-400 mx-auto rounded-full"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-blue-900">{cards[0]?.name}</h3>
                    <p className="text-blue-500">Placement Head</p>
                    <p className="text-gray-600 mt-2">{cards[0]?.slogan}</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src={`data:image/jpeg;base64,${cards[1]?.image || ""}`}
                      alt="Placement Coordinator 1"
                      className="w-28 h-28 border-4 border-blue-400 object-cover mx-auto rounded-full"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-blue-900">{cards[1]?.name}</h3>
                    <p className="text-blue-500">Placement Coordinator</p>
                    <p className="text-gray-600 mt-2">{cards[1]?.slogan}</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src={`data:image/jpeg;base64,${cards[2]?.image || ""}`}
                      alt="Placement Coordinator 2"
                      className="w-28 h-28 border-4 border-blue-400 object-fill mx-auto rounded-full"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-blue-900">{cards[2]?.name}</h3>
                    <p className="text-blue-500">Placement Coordinator</p>
                    <p className="text-gray-600 mt-2">{cards[2]?.slogan}</p>
                  </div>
                </>
              ) : (
                <p className="text-gray-600">No team members found.</p>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

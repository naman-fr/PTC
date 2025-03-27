"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../nav/AdminNavbar";
import Footer from "../foot/footer";

export default function Statistics() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/placement");
        setCards(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <Navbar item="Statistics" />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Placement Statistics</h2>
          <p className="text-gray-600 mt-2">
            Explore the placement records and achievements of IIIT Vadodara students.
          </p>

          {loading ? (
            <div className="text-center text-blue-900 text-lg font-semibold">Loading...</div>
          ) : cards.length > 0 ? (
            <>
              <div className="mt-10 grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {cards[0]?.placement_rate || "N/A"}
                  </h3>
                  <p className="text-gray-700">Placement Rate</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {cards[0]?.recruiting_partners || "N/A"}
                  </h3>
                  <p className="text-gray-700">Recruiting Partners</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {cards[0]?.students_placed || "N/A"}
                  </h3>
                  <p className="text-gray-700">Students Placed</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-blue-900">Year-wise Placement Trends</h3>
                {cards[0]?.placement_image ? (
                  <img
                    src={`data:image/jpeg;base64,${cards[0]?.placement_image}`}
                    alt="Placement Graph"
                    className="mt-4 rounded-lg shadow-lg w-full max-w-xl mx-auto"
                  />
                ) : (
                  <p className="text-gray-500 mt-4">No placement graph available.</p>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-600 mt-4">No placement data available.</p>
          )}

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-blue-900">Our Top Recruiters</h3>
            <div className="grid grid-flow-col gap-4 items-center">
              {["recruiter1.png", "recruiter2.webp", "recruiter3.png", "recruiter4.jpg"].map(
                (src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Recruiter ${index + 1}`}
                    className="transition-transform transform hover:scale-105"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

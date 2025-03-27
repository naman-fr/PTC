'use client';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../nav/AdminNavbar';

export default function DashboardPage() {
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    activeJobs: 0,
    placementRate: 0,
    totalCompanies: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // Fetch user stats (adjust as necessary for your API)
        const res = await fetch('/api/admin/user-stats');
        const data = await res.json();

        // For demonstration, we add placeholders for activeJobs and totalCompanies.
        setMetrics({
          totalUsers: data.totalUsers || 0,
          activeJobs: data.activeJobs || 12,
          placementRate: data.placementRate || 75,
          totalCompanies: data.totalCompanies || 40,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <AdminNavbar />

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          Admin Dashboard
        </h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <p className="text-xl text-gray-600">Loading metrics...</p>
          </div>
        ) : (
          <>
            {/* Metrics Cards */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Users</h3>
                <p className="text-4xl font-bold text-blue-600">{metrics.totalUsers}</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Active Job Postings</h3>
                <p className="text-4xl font-bold text-green-600">{metrics.activeJobs}</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Placement Rate</h3>
                <p className="text-4xl font-bold text-purple-600">{metrics.placementRate}%</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-200">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Total Companies</h3>
                <p className="text-4xl font-bold text-red-600">{metrics.totalCompanies}</p>
              </div>
            </section>

            {/* Chart Placeholder */}
            <section className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Placement Trends
              </h2>
              <div className="flex justify-center items-center h-64 border-2 border-dashed border-gray-300 rounded-lg">
                <p className="text-gray-500">[Chart Placeholder]</p>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

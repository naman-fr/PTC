'use client';
import { useState, useEffect } from 'react';

import Footer from "../../foot/footer";

// Custom Officer Navbar
function OfficerNavbar() {
  return (
    <nav className="bg-purple-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Officer Panel</div>
      <div>
        <a href="/officer/dashboard" className="px-3 hover:text-gray-300">Dashboard</a>
        <a href="/officer/postings" className="px-3 hover:text-gray-300">Manage Postings</a>
        <a href="/officer/applicants" className="px-3 hover:text-gray-300">Applicants</a>
        <a href="/logout" className="px-3 hover:text-gray-300">Logout</a>
      </div>
    </nav>
  );
}

export default function OfficerDashboard() {
  const [officerStats, setOfficerStats] = useState(null);
  const [recentApplications, setRecentApplications] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchOfficerData = async () => {
      try {
        // Example: fetch data relevant to a placement officer
        const [statsRes, appsRes, msgRes] = await Promise.all([
          fetch('/api/officer/stats'),
          fetch('/api/officer/recent-applications'),
          fetch('/api/officer/messages'),
        ]);

        const statsData = await statsRes.json();
        const appsData = await appsRes.json();
        const msgData = await msgRes.json();

        setOfficerStats(statsData);
        setRecentApplications(appsData);
        setMessages(msgData);
      } catch (error) {
        console.error('Failed to fetch officer data:', error);
      }
    };

    fetchOfficerData();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <OfficerNavbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Officer Dashboard</h1>

        {/* Key Stats Section */}
        {officerStats && (
          <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold">Open Postings</h3>
              <p className="text-3xl font-bold text-blue-600">{officerStats.openPostings}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold">Total Applications</h3>
              <p className="text-3xl font-bold text-green-600">{officerStats.totalApplications}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold">Messages</h3>
              <p className="text-3xl font-bold text-red-600">{messages.length}</p>
            </div>
          </section>
        )}

        {/* Recent Applications Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Applications</h2>
          <div className="bg-white shadow rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-2">Student Name</th>
                  <th className="text-left p-2">Job Title</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app._id} className="border-b">
                    <td className="p-2">{app.studentName}</td>
                    <td className="p-2">{app.jobTitle}</td>
                    <td className="p-2">
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Messages Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Messages</h2>
          <div className="space-y-2">
            {messages.map((msg) => (
              <div key={msg._id} className="bg-white shadow p-3 rounded-lg">
                <p className="font-semibold text-gray-800">{msg.title}</p>
                <p className="text-sm text-gray-600">{msg.body}</p>
              </div>
            ))}
            {messages.length === 0 && (
              <p className="text-gray-600">No new messages.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

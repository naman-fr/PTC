'use client';
import { useState, useEffect } from 'react';
import Footer from "../../foot/footer";


function StudentNavbar() {
    return (
      <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Student Panel</div>
        <div>
          <a href="/student/dashboard" className="px-3 hover:text-gray-300">Dashboard</a>
          <a href="/student/profile" className="px-3 hover:text-gray-300">Profile</a>
          <a href="/student/applications" className="px-3 hover:text-gray-300">My Applications</a>
          <a href="/logout" className="px-3 hover:text-gray-300">Logout</a>
        </div>
      </nav>
    );
  }

export default function StudentApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await fetch('/api/student/applied-jobs');
        const data = await res.json();
        setApplications(data);
      } catch (error) {
        console.error('Failed to fetch applications:', error);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <StudentNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Applications</h1>
        <div className="bg-white shadow rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Job Title</th>
                <th className="text-left p-2">Company</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="border-b">
                  <td className="p-2">{app.jobTitle}</td>
                  <td className="p-2">{app.company}</td>
                  <td className="p-2">
                    <span className="px-2 py-1 bg-green-200 text-green-800 rounded">
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

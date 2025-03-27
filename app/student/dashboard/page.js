'use client';
import { useState, useEffect } from 'react';
import Footer from "../../foot/footer";

// Custom Student Navbar
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

export default function StudentDashboard() {
  const [jobStats, setJobStats] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: fetch relevant stats for student
        // Adjust the endpoints to match your actual backend
        const [jobStatsRes, appliedJobsRes, notificationsRes] = await Promise.all([
          fetch('/api/student/job-stats'),
          fetch('/api/student/applied-jobs'),
          fetch('/api/student/notifications'),
        ]);

        const jobStatsData = await jobStatsRes.json();
        const appliedJobsData = await appliedJobsRes.json();
        const notificationsData = await notificationsRes.json();

        setJobStats(jobStatsData);
        setAppliedJobs(appliedJobsData);
        setNotifications(notificationsData);
      } catch (error) {
        console.error('Failed to fetch student data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <StudentNavbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

        {/* Key Stats Section */}
        {jobStats && (
          <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold">Available Jobs</h3>
              <p className="text-3xl font-bold text-blue-600">{jobStats.availableJobs}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold">Applied Jobs</h3>
              <p className="text-3xl font-bold text-green-600">{appliedJobs.length}</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4 text-center">
              <h3 className="text-xl font-semibold">Notifications</h3>
              <p className="text-3xl font-bold text-red-600">{notifications.length}</p>
            </div>
          </section>
        )}

        {/* Applied Jobs Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">My Applications</h2>
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
                {appliedJobs.map((job) => (
                  <tr key={job._id} className="border-b">
                    <td className="p-2">{job.title}</td>
                    <td className="p-2">{job.company}</td>
                    <td className="p-2">
                      <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="space-y-2">
            {notifications.map((note) => (
              <div key={note._id} className="bg-white shadow p-3 rounded-lg">
                <p className="font-semibold text-gray-800">{note.title}</p>
                <p className="text-sm text-gray-600">{note.message}</p>
              </div>
            ))}
            {notifications.length === 0 && (
              <p className="text-gray-600">No notifications yet.</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Footer from "../../foot/footer";

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

export default function ManagePostings() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchPostings = async () => {
      try {
        const res = await fetch('/api/officer/postings'); // or /api/placement if you prefer
        const data = await res.json();
        setJobPostings(data);
      } catch (error) {
        console.error('Failed to fetch job postings:', error);
      }
    };
    fetchPostings();
  }, []);

  const handleDeletePosting = async (id) => {
    try {
      const res = await fetch(`/api/officer/postings/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setJobPostings(jobPostings.filter((jp) => jp._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete posting:', error);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      <OfficerNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Manage Job Postings</h1>
        
        <div className="mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add New Posting
          </button>
        </div>

        <div className="bg-white shadow rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2">Title</th>
                <th className="text-left p-2">Company</th>
                <th className="text-left p-2">Deadline</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobPostings.map((posting) => (
                <tr key={posting._id} className="border-b">
                  <td className="p-2">{posting.title}</td>
                  <td className="p-2">{posting.company}</td>
                  <td className="p-2">
                    {posting.deadline ? posting.deadline.substring(0, 10) : 'N/A'}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDeletePosting(posting._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                    {/* Additional edit or details logic here */}
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

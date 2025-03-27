'use client';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../nav/AdminNavbar';

export default function JobPostingsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/admin/job-postings')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  const handleDeleteJob = async (jobId) => {
    // Example for deleting job if you had an API route:
    try {
      const response = await fetch(`/api/admin/job-postings/${jobId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setJobs(jobs.filter(j => j._id !== jobId));
      } else {
        alert('Failed to delete job posting');
      }
    } catch (error) {
      console.error('Error deleting job posting:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Job Postings
        </h1>

        {/* Example "Add Job" button could open a modal to create a new job */}
        <div className="mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add New Job
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-600">Title</th>
                <th className="p-3 text-left text-gray-600">Description</th>
                <th className="p-3 text-left text-gray-600">Deadline</th>
                <th className="p-3 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{job.title}</td>
                  <td className="p-3">{job.description}</td>
                  <td className="p-3">{job.deadline ? job.deadline.substring(0, 10) : 'N/A'}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDeleteJob(job._id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      Delete
                    </button>
                    {/* Additional edit or details button could go here */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

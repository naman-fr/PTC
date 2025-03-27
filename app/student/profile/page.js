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

export default function StudentProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Example: fetch the student's profile from an API
        const res = await fetch('/api/student/profile');
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <StudentNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        {profile ? (
          <div className="bg-white shadow p-4 rounded-lg">
            <p className="mb-2"><strong>Name:</strong> {profile.name}</p>
            <p className="mb-2"><strong>Email:</strong> {profile.email}</p>
            {/* More fields as needed */}
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

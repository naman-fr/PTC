'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Admin Panel</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/admin/dashboard" className="hover:text-gray-100 transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/users" className="hover:text-gray-100 transition-colors">
            Users
          </Link>
          <Link href="/admin/job-postings" className="hover:text-gray-100 transition-colors">
            Job Postings
          </Link>
          <Link href="/admin/gallery" className="hover:text-gray-100 transition-colors">
            Gallery
          </Link>
          <Link href="/admin/logout" className="hover:text-gray-100 transition-colors">
            Logout
          </Link>
        </div>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" 
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-indigo-800">
          <Link href="/admin/dashboard" className="block px-4 py-2 hover:bg-indigo-700 transition-colors">
            Dashboard
          </Link>
          <Link href="/admin/users" className="block px-4 py-2 hover:bg-indigo-700 transition-colors">
            Users
          </Link>
          <Link href="/admin/job-postings" className="block px-4 py-2 hover:bg-indigo-700 transition-colors">
            Job Postings
          </Link>
          <Link href="/admin/gallery" className="block px-4 py-2 hover:bg-indigo-700 transition-colors">
            Gallery
          </Link>
          <Link href="/admin/logout" className="block px-4 py-2 hover:bg-indigo-700 transition-colors">
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}

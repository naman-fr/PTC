'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminNavbar from '../../nav/AdminNavbar';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear authentication tokens, session, etc.
    // For example, remove from localStorage:
    localStorage.removeItem('authToken');
    
    // Then redirect to login or home page
    router.push('/portal');
  }, [router]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <p className="text-xl text-gray-700">Logging out...</p>
      </div>
    </div>
  );
}

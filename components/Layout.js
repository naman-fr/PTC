'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import jwt from 'jsonwebtoken';

export default function Layout({ children }) {
  const [userRole, setUserRole] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
    if (token) {
      try {
        const decoded = jwt.decode(token);
        setUserRole(decoded?.role);
      } catch (error) {
        console.error('Token decoding failed:', error);
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                IIITV PTC
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              {!userRole ? (
                <>
                  <Link 
                    href="/login" 
                    className="px-4 py-2 rounded-md hover:bg-blue-50 text-blue-600 font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <div className="flex items-center space-x-6">
                  <span className="text-sm font-medium text-gray-600">
                    Logged in as: <span className="capitalize text-blue-600">{userRole}</span>
                  </span>
                  <button
                    onClick={() => {
                      document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                      window.location.href = '/login';
                    }}
                    className="px-4 py-2 rounded-md bg-red-100 text-red-600 hover:bg-red-200 font-medium transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
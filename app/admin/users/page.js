'use client';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../nav/AdminNavbar';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/admin/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setUsers(users.filter(u => u._id !== userId));
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          User Management
        </h1>
        
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-3 text-gray-600">Name</th>
                <th className="text-left p-3 text-gray-600">Email</th>
                <th className="text-left p-3 text-gray-600">Role</th>
                <th className="text-left p-3 text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <span className={`
                      px-2 py-1 rounded 
                      ${user.role === 'Admin' ? 'bg-red-100 text-red-800' :
                        user.role === 'Placement Officer' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'}
                    `}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      Delete
                    </button>
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

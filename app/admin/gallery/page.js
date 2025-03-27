'use client';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../nav/AdminNavbar';

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetch('/api/admin/gallery')
      .then(res => res.json())
      .then(data => setGalleryItems(data))
      .catch(err => console.error(err));
  }, []);

  const handleDeleteItem = async (itemId) => {
    try {
      const response = await fetch(`/api/admin/gallery/${itemId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setGalleryItems(galleryItems.filter(item => item._id !== itemId));
      } else {
        alert('Failed to delete gallery item');
      }
    } catch (error) {
      console.error('Error deleting gallery item:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Gallery Management
        </h1>

        {/* Example "Upload" button could open a modal to upload a new image */}
        <div className="mb-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Upload New Item
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map(item => (
            <div key={item._id} className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <p className="font-semibold text-gray-700">{item.title}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
                <button
                  onClick={() => handleDeleteItem(item._id)}
                  className="text-red-600 hover:text-red-800 transition-colors mt-2 block"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

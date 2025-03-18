'use client';
import Layout from '../../../components/Layout';

export default function AdminDashboard() {
  return (
    <Layout>
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Manage users and system settings
        </p>
      </div>
    </Layout>
  );
}
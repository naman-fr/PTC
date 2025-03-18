'use client';
import Layout from '../../../components/Layout';

export default function OfficerDashboard() {
  return (
    <Layout>
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">
          Placement Officer Dashboard
        </h1>
        <p className="text-gray-600">
          Manage job postings and applications
        </p>
      </div>
    </Layout>
  );
}
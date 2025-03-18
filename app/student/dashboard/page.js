'use client';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';

export default function StudentDashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="pb-6 border-b border-slate-100">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Student Dashboard</h1>
          <p className="text-slate-600">Welcome back! Check your applications and new opportunities</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-slate-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Active Applications</p>
                <p className="text-3xl font-bold text-slate-800">4</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-purple-50 to-fuchsia-50 p-6 rounded-xl border border-slate-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Upcoming Deadlines</p>
                <p className="text-3xl font-bold text-slate-800">2</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-slate-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 mb-1">Placement Progress</p>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {/* Application Item */}
            <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-lg transition-colors">
              <div>
                <h3 className="font-medium text-slate-800">Software Engineer Intern</h3>
                <p className="text-sm text-slate-500">Google • Applied 2 days ago</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">In Review</span>
            </div>
            {/* More items... */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
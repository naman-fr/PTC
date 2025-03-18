import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-12 drop-shadow-md text-center">
        Welcome to IIIT Vadodara Placement Portal
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Student Card */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Students</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Browse job opportunities, track applications, and manage your profile.
          </p>
          <Link
            href="/login?role=student"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg 
                       font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            Student Login
          </Link>
        </div>

        {/* Placement Officer Card */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Placement Officers</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Manage job postings, track applications, and analyze placement data.
          </p>
          <Link
            href="/login?role=officer"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg 
                       font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            Officer Login
          </Link>
        </div>

        {/* Admin Card */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Administrators</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Manage users, system settings, and overall placement operations.
          </p>
          <Link
            href="/login?role=admin"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg 
                       font-medium transition-all duration-300 hover:opacity-90 hover:scale-105"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}

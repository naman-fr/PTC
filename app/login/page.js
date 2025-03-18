'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Layout from '../../components/Layout';

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'student';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const roleColors = {
    student: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600' },
    officer: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600' },
    admin: { bg: 'from-green-500 to-green-600', text: 'text-green-600' }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        document.cookie = `token=${data.token}; Path=/; Secure; SameSite=Strict`;
        router.push(`/${data.role}/dashboard`);
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto">
        <div className={`mb-8 text-center bg-gradient-to-r ${roleColors[role].bg} rounded-xl p-1 shadow-lg`}>
          <div className="bg-white rounded-xl py-4">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className={`text-lg font-medium ${roleColors[role].text}`}>
              {role.charAt(0).toUpperCase() + role.slice(1)} Login
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Institutional Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : `bg-gradient-to-r ${roleColors[role].bg} hover:opacity-90`
            }`}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </Layout>
  );
}
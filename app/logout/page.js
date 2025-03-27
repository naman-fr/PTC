'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Example: Clear localStorage or cookies
    localStorage.removeItem('authToken');
    // Or clear cookies by setting them to expire, etc.
    // Then redirect
    router.push('/portal');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl">Logging out...</p>
    </div>
  );
}

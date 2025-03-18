import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1];
      
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);
        
        if (!allowedRoles.includes(decoded.role)) {
          router.push('/unauthorized');
        }
      } catch (error) {
        router.push('/login');
      }
    };

    checkAuth();
  }, [allowedRoles, router]);

  return <>{children}</>;
};

export default ProtectedRoute;
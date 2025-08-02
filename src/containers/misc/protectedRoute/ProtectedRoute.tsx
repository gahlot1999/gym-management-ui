import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router';
import Text from '../../../components/text/Text';

function ProtectedRoute() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Text as='p'>Loading...</Text>;

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoute;

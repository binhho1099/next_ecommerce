import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Cookie } from 'utils/cookie';

const withProtectedRoute = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const token = Cookie.Get('token');

    useEffect(() => {
      if (!token) {
        router.push('/login');
      }
    }, [router, token]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
export default withProtectedRoute;

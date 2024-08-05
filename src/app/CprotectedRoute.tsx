import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuth, { AuthProvider } from './services/useAuth'

const _ = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const Wrapper: React.FC<P> = (props) => {
        console.log(useAuth())
        const auth = useAuth();/* Get authentication status */
        const router = useRouter();

        useEffect(() => {
            if (!auth.user) {
                router.push('/home');
            }
        }, [auth.user, router]);

        if (!auth.user) {
            return null; // Render nothing while redirecting
        }
        return <AuthProvider><WrappedComponent {...props} /></AuthProvider>;
    };

    return Wrapper;
};

export default _

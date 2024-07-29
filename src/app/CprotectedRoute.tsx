import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './auth/page'
import Home from './home/page'

const _ = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const Wrapper: React.FC<P> = (props) => {
        console.log(useAuth())
        const { isAuthenticated } = useAuth()/* Get authentication status */
        const router = useRouter();

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/home');
            }
        }, [isAuthenticated, router]);

        if (!isAuthenticated) {
            return null; // Render nothing while redirecting
        }
        return <WrappedComponent {...props} />;
    };

    return Wrapper;
};

export default _

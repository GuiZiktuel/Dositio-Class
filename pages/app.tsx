
import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from '../components/auth';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;

import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './auth';
import styles from '../styles/header.module.css';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => router.push('/')}>
        My Next.js App
      </div>
      <nav className={styles.nav}>
        <a href="/" className={router.pathname === '/' ? styles.active : ''}>Home</a>
        {isAuthenticated && <a href="/products" className={router.pathname === '/products' ? styles.active : ''}>Products</a>}
      </nav>
      <div className={styles.auth}>
        {isAuthenticated ? (
          <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
        ) : (
          <a href="/login" className={router.pathname === '/login' ? styles.active : ''}>Login</a>
        )}
      </div>
    </header>
  );
};

export default Header;

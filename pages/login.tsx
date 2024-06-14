import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import styles from '../styles/login.module.css';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;

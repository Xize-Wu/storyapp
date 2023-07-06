import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useAuth } from '../RightSideBar/AuthContext.';

const Header = () => {
  const { isLoggedIn, login, logout } = useAuth();
  // setTimeout(()=>{login()}, 5000)
  return (
    <header className={styles.header}>
          {console.log('props',isLoggedIn )}
      <h1>CloudCastle</h1>
      <div> <Link href='/register'>Register</Link>
      </div>
      <div> <Link href='/login'>Login</Link>
      </div>
    </header>
  );
};

export default Header;

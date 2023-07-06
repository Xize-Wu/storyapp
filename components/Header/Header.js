import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>CloudCastle</h1>
      <div> <Link href='/register'>Register</Link>
      </div>
      <div> <Link href='/login'>Login</Link>
      </div>
    </header>
  );
};

export default Header;

import {React, useEffect} from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useAuth } from './AuthContext.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment } from '@fortawesome/free-solid-svg-icons';

const Header = ({ pageProps }) => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.left}> <h1 >CloudCastle</h1> </div>


      {isLoggedIn['status'] ? (
        <div className={styles.rightSide}>
          <div className={styles.button}> Hello, UserName! </div>
          <div className={styles.button}><FontAwesomeIcon icon={faBars} /></div>
          <div className={styles.button}><FontAwesomeIcon icon={faComment} /></div>
        </div>) : (
        <div className={styles.rightSide}>
          <Link href='/register'>
            <button className={styles.button}>
              Register
            </button>
          </Link>
          <Link href='/login'>
            <button className={styles.button}>
              Login
            </button>
          </Link>
        </div>)
      }
    </header>
  );
};

export default Header;

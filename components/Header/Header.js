import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useAuth } from '../RightSideBar/AuthContext.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { isLoggedIn, login, logout } = useAuth();
  // setTimeout(()=>{login()}, 5000)
  console.log(isLoggedIn)
  return (
    <header className={styles.header}>
     <div className={styles.left}> <h1 >CloudCastle</h1> </div>
      {/* <div > <Link href='/register'>Register</Link>
      </div>
      <div> <Link href='/login'>Login</Link>
      </div> */}
      <div className={styles.rightSide}>
        <div className={styles.button}> Hello, UserName! </div>
        <div className={styles.button}><FontAwesomeIcon icon={faBars} /></div>
        <div className={styles.button}><FontAwesomeIcon icon={faComment} /></div>
      </div>
    </header>
  );
};

export default Header;

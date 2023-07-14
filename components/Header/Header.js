import { React } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faComment } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}> <h1 >CloudCastle</h1> </div>


      {props.username ? (
        <div className={styles.rightSide}>
          <div > Hello, {props.username} ! </div>
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

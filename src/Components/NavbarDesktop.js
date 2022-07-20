import React from 'react'
import styles from '../styles/NavbarDesktop.module.css';
import { FiSearch } from "react-icons/fi";

function NavbarDesktop() {
  return (
    <div className={styles.nav}>
        <div className={styles.left}>
            <span className={styles.icon}>MetaMart</span>
            <span className={styles.verticalLine}></span>
            <ul className={styles.list}>
                <li className={styles.li}>Discover</li>
                <li className={styles.li}>Collections</li>
                <li className={styles.li}>Forums</li>
            </ul>
        </div>
        <div className={styles.right}>
            <FiSearch style={{color: '#6B7280', fontSize: '22px'}}/>
            <span className={styles.switch}>Swicth</span>
            <button className={styles.button}>Connect Wallet</button>
        </div>
    </div>
  )
}

export default NavbarDesktop;
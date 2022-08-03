import React, { useState } from 'react';
import purse from '../assets/images/purse.svg';
import styles from '../styles/NavbarMobile.module.css';
import { FiSearch } from "react-icons/fi";

function NavbarMobile() {
  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(!showLinks)
  }

  return (
    <>
    <div className={`${styles.nav}`}>
      <div className={`${styles.hamburger} ${ showLinks ? styles.animate : styles.none}`} onClick={handleShowLinks}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span className={styles.title}>MetaMart</span>
      <span>
        <img src={purse} style={{cursor: 'pointer', marginRight: '0.7rem'}} alt='purse-svg' />
      </span>
    </div>
    <div className={styles.menuContent}>
    <div className={showLinks ? styles.menu : styles.none}>
      <span style={{display: 'flex', width: '100%', position: 'relative',
       alignItems: 'center', justifyContent: 'center'}}>
      <input type='text' placeholder='Search' className={styles.search} />
      <FiSearch style={{color: '#6B7280', fontSize: '22px', cursor: 'pointer', position: 'absolute', right: '1.2rem',
    bottom: '50%', transform: 'translateY(65%)'}} className={styles.searchIcon}/>
      </span>
      <ul className={styles.list}>
                <li className={`${styles.li} ${styles.first}`}>Discover</li>
                <li className={`${styles.li} ${styles.second}`}>Collections</li>
                <li className={`${styles.li} ${styles.third}`} style={{display: 'flex', justifyContent: 'space-between'}}><span>Forums</span>
                <label class={styles.switch}>
            <input type="checkbox" />
            <span class={styles.slider}></span>
            </label>
                </li>
       </ul>
    </div>
    </div>
    </>
  )
}

export default NavbarMobile;
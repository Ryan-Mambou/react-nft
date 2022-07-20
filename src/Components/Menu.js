import React, { useState } from 'react';
import styles from '../styles/menu.module.css';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className={styles.box} onClick={handleOpen}>
        <span className={styles.firstSpan}></span>
        <span className={styles.secondSpan}></span>
        <span className={styles.bottomSpan}></span>
    </div>
  )
}

export default Menu
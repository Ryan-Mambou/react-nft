import React from 'react';
import styles from '../styles/stat.module.css'

function Stats({number, measure}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div className={styles.stat}>
        <span className={styles.number}>{number}</span>
        <span className={styles.sign}>+</span>
    </div>
    <span className={styles.measure}>{measure}</span>
    </div>
  )
}

export default Stats

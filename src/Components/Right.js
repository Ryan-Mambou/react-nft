import React from 'react';
import styles from '../styles/right.module.css';
import line from '../assets/images/line.svg';
import badge from '../assets/images/badge.svg';
import Stats from './Stats';

function Right() {
  return (
    <div className={styles.right}>
        <div className={styles.top}>
            <h2 className={styles.title}>
                 We Make your{' '} 
                 <span className={styles.greenText}>
                 <img src={line} alt='line' className={styles.line}/>
                    NFT Investmest
                    </span>
            {' '}lot more easier
            </h2>
            <p className={styles.paragraph}>We help you take your NFT investments to the next level with the helpof our advanced blockchain
             infrastrucure
            </p>
            <div className={styles.buttonSection} >
                <button className={styles.button}>Explore collections</button> 
                <img src={badge} alt='badge' className={styles.badge}/></div>
        </div>
        <div className={styles.bottom}>
            <h5 className={styles.subtitle}>Stats for you</h5>
            <div className={styles.stats}>
            <div className={styles.stat}><Stats measure='Auctions' number='10K'/></div>
            <div className={styles.stat}><Stats measure='Collections' number='200'/></div>
            <div className={styles.stat}><Stats measure='Artists' number='50'/></div>
            </div>
        </div>
    </div>
  )
}

export default Right
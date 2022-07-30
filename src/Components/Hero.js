import React from 'react';
import styles from '../styles/hero.module.css';
import rugby from '../assets/images/image 10.png';
import RecentBid from './RecentBid';
import img1 from '../assets/images/Ellipse 101 (3).png';
import img2 from '../assets/images/Ellipse 101 (4).png';
import img3 from '../assets/images/Ellipse 101 (5).png';

function Hero({profile, code, etherium}) {
  return (
    <div className={styles.card}>
        <div className={styles.hero}><img src={profile} /></div>
        <div className={styles.heroInfo}>
            <span style={{width: '90%', fontSize: '35px'}} className={styles.SpaceGrotesk}>{code}</span>
            <div className={styles.firstDiv}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span style={{marginTop: '10px', marginBottom: '10px'}} className={styles.Euclid}>Current bid</span>
                    <span style={{display: 'flex', alignItems: 'center'}}>
                        <img src={rugby}/> <span className={styles.SpaceGrotesk}>{etherium}</span>
                    </span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <span style={{marginTop: '10px', marginBottom: '10px'}} className={styles.Euclid}>Ends in</span>
                    <span className={styles.SpaceGrotesk}>15h 18m 16s</span>
                </div>
            </div>
            <div className={styles.secondDiv}>
                <span style={{marginBottom: '10px'}} className={styles.Euclid}>Recent bids</span>
                <div className={styles.bids}>
                    <RecentBid etherium='189.2 ETH' profile={img1}/>
                    <RecentBid etherium='162 ETH' profile={img2}/>
                    <RecentBid etherium='144 ETH' profile={img3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
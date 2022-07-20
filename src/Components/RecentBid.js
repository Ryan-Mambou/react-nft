import React from 'react';
import styles from '../styles/recentBid.module.css'

function RecentBid({profile, etherium}) {
  return (
    <div className={styles.bid}><span className={styles.SpaceGrotesk}>{etherium}</span>
    <img className={styles.profile} src={profile} alt='recent-bid profile'/>
    </div>
  )
}

export default RecentBid;
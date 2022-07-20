import React from 'react';
import styles from '../styles/content.module.css'
import Hero from './Hero';
import profile from '../assets/images/hero.png'

function Content() {
  return (
        <div className={styles.content}>
            <Hero profile={profile} code="POTM #5621" etherium='290.3ETH'></Hero>
        </div>
  )
}

export default Content;
import React from 'react';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

function Navbar() {
  return (
    <div className={styles.nav}>
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  )
}

export default Navbar
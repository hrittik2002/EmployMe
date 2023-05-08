import React from "react";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>EMPLOY ME</div>
      <div className={styles.navItems}>
        <div>Home</div>
        <div>JobSearch</div>
        <div>login</div>
        <div>sign in</div>
      </div>
    </div>
  );
};

export default Navbar;

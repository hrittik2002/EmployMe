import React from "react";
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logoContainer}>EMPLOY ME</div>
      <div className={styles.navItems}>
        <Link className={styles.navItem} to="/">Home</Link>
        <Link className={styles.navItem} to="/search">JobSearch</Link>
        <div>login</div>
        <div>sign in</div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from './Header.module.scss'
import Logo from '../../assets/images/logo.svg'
import SidebarExtenderLogo from '../../assets/images/sidebar-extender-logo.svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src={Logo} alt="logo"/>
        <div className={styles.sidebarExtender}>
          <img src={SidebarExtenderLogo} alt="logo"/>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.initials}>
          JD
        </div>
        <p className={styles.username}>
          Name
        </p>
      </div>
    </div>
  );
};

export default Header;

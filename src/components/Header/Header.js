import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/logo.svg";
import SidebarExtenderLogo from "../../assets/images/sidebar-extender-logo.svg";

const Header = (props) => {
  const { userInfo } = props;
  let firstName = userInfo.map((userInfo) => userInfo.firstName);
  let lastName = userInfo.map((userInfo) => userInfo.lastName);
  let initials =  firstName.toString().charAt(0) + lastName.toString().charAt(0) 

  return (
    <div className={styles.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Logo} alt="logo" />
        <div className={styles.sidebarExtender}>
          <img src={SidebarExtenderLogo} alt="logo" />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.initials}>{initials.toUpperCase()}</div>
        <p className={styles.username}>
          {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};

export default Header;

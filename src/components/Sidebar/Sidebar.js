import React from 'react'
import styles from './Sidebar.module.scss'
import ReportsLogo from '../../assets/images/reports-icon.svg'
import icon1 from '../../assets/images/icon1.svg'
import icon2 from '../../assets/images/icon2.svg'
import icon3 from '../../assets/images/icon3.svg'
import icon4 from '../../assets/images/icon4.svg'

const SidebarComponent = () => {
  return (
    <div className={styles.sidebar}>
      <img className={styles.sidebarLogo} src={icon1} alt="reports-logo"/>
      <img className={styles.sidebarLogo} src={icon2} alt="reports-logo"/>
      <img className={styles.sidebarLogo} src={icon3} alt="reports-logo"/>
      <img className={styles.sidebarLogo} src={ReportsLogo} alt="reports-logo"/>
      <img className={styles.sidebarLogo} src={icon4} alt="reports-logo"/>
    </div>
  )
}

export default  SidebarComponent

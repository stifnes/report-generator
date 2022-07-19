import React from 'react'
import styles from './Sidebar.module.scss'
import ReportsLogo from '../../assets/images/reports-icon.svg'

const SidebarComponent = () => {
  return (
    <div className={styles.sidebar}>
      <img src={ReportsLogo} alt="reports-logo"/>
    </div>
  )
}

export default  SidebarComponent

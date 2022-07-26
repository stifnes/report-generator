import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a className={styles.footerLink} href="http://stifnessamuel.com/" target="_blank" rel="noopener noreferrer">Terms&Conditions | Privacy policy</a>
    </div>
  );
};

export default Footer;
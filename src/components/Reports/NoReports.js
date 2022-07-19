import React from "react";
import NoReportImage from '../../assets/images/no-report.svg'
import styles from './NoReports.module.scss'

const NoReports = () => {
  return (
    <div className={styles.noReportWrapper}>
      <h1> No Reports </h1>
      <p>
        Currently you have no data for the reports to be generated. Once you
        start generating traffic through the Balance application the reports
        will be shown.
      </p>
      <img src={NoReportImage} alt="No Reports" />
    </div>
  );
};

export default NoReports;

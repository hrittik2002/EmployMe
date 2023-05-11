import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './HomePage.module.css'
import jobSearch from '../../assets/animations/jobSearch.json'
import Lottie from "lottie-react";

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <div className={styles.header}>
          <div className={styles.imageContainer}>
          <Lottie animationData={jobSearch} style={{
                height : "100%",
                width : "100%",
                zIndex : 1,
            }}/>
          </div>
          <div className={styles.textContainer}>
              <div>Find your dream job now</div>
              <button>SEARCH JOB</button>
          </div>
        </div>

    </div>
  )
}

export default HomePage
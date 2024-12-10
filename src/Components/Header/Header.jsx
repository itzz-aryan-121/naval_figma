import React, { useEffect, useState } from 'react'
import styles from './header.module.css'

const Header = () => {
    const [scrollProgress, setScrollProgress] = useState(0);  

    
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY; 
          const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight; 
          const scrollPercentage = (scrollTop / windowHeight) * 100; 
          setScrollProgress(scrollPercentage);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    
    <div className={styles.headerContainer}>

    <div className={styles.top}>
        <h1 className={styles.h1}>Name of Book!</h1>
        
        <div className={styles.h2Container}>
        <span className={styles.h2}>University Name</span>
          <span className={styles.h2}>Subject Code</span>
          <span className={styles.h2}>1st Year</span>
          <span className={styles.h2}>Branch</span>
        </div>
        <span className={styles.cornerText}>35%</span>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${scrollProgress}%` }}
            ></div>
        </div>
       
    </div>
</div>
    
    
  ) 
}

export default Header
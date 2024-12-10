import React from "react";
import styles from "./leftsection.module.css";

import Content from "../Content/Content";

const LeftSection = () => {
  const topics = [
    "Topic Name dolor sit amet, consectetuer sed diam nonu...",
    "Topic Name dolor sit amet, consectetuer sed diam nonu...",
    "Topic Name dolor sit amet, consectetuer sed diam nonu...",
    "Topic Name dolor sit amet, consectetuer sed diam no",
    "Topic Name dolor sit amet, consectetuer sed diam no",
    "Topic Name dolor sit amet, consectetuer sed diam nonu...",
  ];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.leftsection}>
        <div className={styles.header}>
          <select className={styles.dropdown}>
            <option value="unit1">
              Units 1 <span className={styles.percentage}>   75%</span>
            </option>
            <option value="unit2">Units 2</option>
            <option value="unit3">Units 3</option>
          </select>
        </div>
        <h1 className={styles.heading}>All Topics</h1>
        <div className={styles.topicsList}>
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`${styles.topicItem} ${
                index === 0 ? styles.firstTopic : styles.otherTopics
              }`}
            >
              <span className={styles.topicNumber}>{index + 1}.</span>
              <span className={styles.topicText}>{topic}</span>
            </div>
          ))}
        </div>
      </div>

{/*Right Section*/}
      {/* <div className={styles.rightsection}>
        <Tabs/>
    </div> */}
    <div>
        <Content/>
    </div>
    </div>
  );
};

export default LeftSection;

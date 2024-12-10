import React from "react";
import "./Content.css";
import imgtop from "../../assets/lock3.png";
import img from "../../assets/Frame 427319629.png";
import styles from "./pagination.module.css";
import fr from "../../assets/Frame 3.png";

const Content = () => {
  return (
    <>
      {/* Tabs */}
      <div className="tabs">
        <button>Syllabus</button>
        <button className="active">Q&A</button>
        <button>Unit</button>
        <button>Insights</button>
        <button>Maps</button>
        <button>Custom Preparation</button>
        <button>AI Featured</button>
      </div>

      <div class="new-content">
        <div class="heading">
          <span class="total">Total: 15</span>
          <span className="arrow">{"<"}</span>&nbsp;&nbsp;
          <img src={fr} alt="Icon" class="heading-img" />&nbsp;&nbsp;
          <span className="arrow">{">"}</span>
        </div>
        <div className="dropdown-container">
          <select defaultValue="none" className="dropdown">
            <option value="none" disabled>
              None
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      {/* Question Content */}

      <div className="question">
        <h2>Question: Ipsum dolor sit amet, consectetur adipiscing.</h2>
      </div>
      <div className="answer-section">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div className="summary">
        <h2>Summary of this question</h2>
      </div>
      <div className="summary-section">
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's
        </span>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard 
        </p>
        <div className="lock-overlay">
          <img src={imgtop} alt="Lock Icon" className="imgtop" />
          <img src={img} alt="Unlock" className="unlock" />
        </div>
      </div>

      {/*Pagination Content*/}
      <div className={styles.pagination}>
        <button className={`${styles.button} ${styles.previous}`} disabled>
          {"<"} Previous
        </button>
        <span className={styles.pageNumber}>1</span>
        <button className={`${styles.button} ${styles.next}`} disabled>
          Next {">"}
        </button>
      </div>
    </>
  );
};

export default Content;

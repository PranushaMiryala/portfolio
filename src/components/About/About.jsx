import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              
              <p>
                I'm a dedicated full-stack developer with experience in building modern, end-to-end applications using technologies like React, Node.js, Express.js, and MongoDB, as well as full-stack Java with Spring Boot. I also create data-driven tools and dashboards using Python and Streamlit, supported by secure databases like SQLite. With a strong foundation in frontend design, backend architecture, and database management, I enjoy solving complex problems with clean, scalable solutions. My approach combines technical precision, adaptability, and a passion for continuous learning to deliver impactful and reliable software.
              </p>
            </div>
          </li>
          
          
        </ul>
      </div>
    </section>
  );
};
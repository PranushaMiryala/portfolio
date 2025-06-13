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
               A detail-oriented and growth-driven individual stepping into the world of software development. I enjoy exploring how things work and turning ideas into meaningful outcomes. With a mindset focused on learning and improvement, I’m ready to take on new challenges, contribute to team efforts, and develop solutions that make a difference.
I value clarity in communication and take pride in being dependable and open to feedback. Each step I take is aimed at becoming a better version of myself both professionally and personally.
</p>
            </div>
          </li>
          
          
        </ul>
      </div>
    </section>
  );
};
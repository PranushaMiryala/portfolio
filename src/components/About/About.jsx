import React from 'react';
import styles from "./About.module.css";

export cdconst About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.aboutItemText}>
        <p>
          A passionate and driven engineering student with a strong foundation in full-stack development and real-world project experience.
        </p>
        <p>
          Eager to contribute to innovative solutions through teamwork, creativity, and continuous learning.
        </p>
        <p>
          Actively growing as a developer while aligning with industry best practices and future-ready technologies.
        </p>
      </div>
    </section>
  );
};



import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pranusha</h1>
        <p className={styles.description}>
          Aspiring developer passionate about building innovative, user-focused web applications.
          <br />
          Driven by curiosity and a love for solving real-world problems through technology.
          <br />
          Committed to continuous learning, effective collaboration, and creating impactful digital solutions.
        </p>
        <a href="mailto:pranushareddy925@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}hero/heroImage.png`}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

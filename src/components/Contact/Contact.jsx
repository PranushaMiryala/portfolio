import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/contacts/emailIcon.png" alt="Email icon" />
          <a href="mailto:pranushamiryala02@gmail.com">
            pranushamiryala02@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src="/contacts/linkedinIcon.png" alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/pranusha-miryala-14b1a92a5/">
            linkedin.com/in/pranusha-miryala-14b1a92a5
          </a>
        </li>
        <li className={styles.link}>
          <img src="/contacts/githubIcon.png" alt="GitHub icon" />
          <a href="https://github.com/PranushaMiryala">
            https://github.com/PranushaMiryala
          </a>
        </li>
      </ul>
    </footer>
  );
};
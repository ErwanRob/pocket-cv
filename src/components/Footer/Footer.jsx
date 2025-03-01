import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer__container"]}>
        <p className={styles["footer__container__copyright"]}>
          © 2025 Erwan Robin. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

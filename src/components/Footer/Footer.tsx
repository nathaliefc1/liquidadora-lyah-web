// src/components/Footer/Footer.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./Footer.module.scss";
import logo from "../../../preview.jpeg";

const Footer: React.FC = () => {
  const { footer, brand, credits } = site;

  return (
    <footer
      className={styles.footer}
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <div className={styles.inner}>
        {/* LEFT: Marca + Contacto (apilados) */}
        <div className={styles.left}>
          <div className={styles.brandBlock}>
            <div className={styles.logo} aria-hidden>
              <img
                src={logo}
                alt="Liquidadora Lyah Ltda – Abarrotes y productos de primera necesidad a precios económicos en Valparaíso"
              />
            </div>
            <div className={styles.brandTexts}>
              <div className={styles.name}>{brand.legal}</div>
              <div className={styles.motto}>{footer.motto}</div>
            </div>
          </div>

          {/* CRÉDITOS */}
          <div className={styles.bottom}>
            <div className={styles.leftBottom}>
              <p className={styles.copy}>{footer.copyright}</p>
            </div>

            <div className={styles.rightBottom}>
              <p className={styles.credits}>
                {credits.text}{" "}
                <a
                  href={credits.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.creditLink}
                >
                  {credits.company}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Legal */}
        <div className={styles.right}>
          <h4>Legal</h4>
          <p className={styles.notice}>{footer.legalNotice}</p>
          <p className={styles.small}>{footer.extraNotice}</p>

          {/* <nav className={styles.links} aria-label="Enlaces legales">
            <a href="/terms">{footer.privacyLabel}</a>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

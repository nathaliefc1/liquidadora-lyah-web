// src/components/Footer/Footer.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./Footer.module.scss";

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
              {" "}
              L{" "}
            </div>
            <div className={styles.brandTexts}>
              <div className={styles.name}>{brand.legal}</div>
              <div className={styles.motto}>{footer.motto}</div>
            </div>
          </div>

          <div className={styles.contactBlock}>
            <h4 id="footer-heading">Contacto</h4>
            <address className={styles.address}>
              <div>{brand.address}</div>
              <div>
                <a
                  className={styles.link}
                  href={`tel:${brand.phone.replace(/\D/g, "")}`}
                >
                  {brand.phone}
                </a>
              </div>
              <div>
                <a className={styles.link} href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* RIGHT: Legal */}
        <div className={styles.right}>
          <h4>Legal</h4>
          <p className={styles.notice}>{footer.legalNotice}</p>
          <p className={styles.small}>{footer.extraNotice}</p>

          <nav className={styles.links} aria-label="Enlaces legales">
            <a href="/terms">{footer.privacyLabel}</a>
          </nav>
        </div>
      </div>

      {/* BOTTOM: copy a la izquierda (desktop) + crédito (izquierda en mobile/center en mobile) */}
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
    </footer>
  );
};

export default Footer;

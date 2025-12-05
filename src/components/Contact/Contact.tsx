// src/components/Contact/Contact.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./Contact.module.scss";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
  const { brand, contact } = site;

  const phoneNumber = brand.phone.replace(/\D/g, "");
  const instagramHandle = brand.instagram
    ? brand.instagram.replace(/^@/, "")
    : "";

  return (
    <section
      id="contacto"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.inner}>
        <h2 id="contact-heading" className={styles.title}>
          {contact.title}
        </h2>

        <div className={styles.grid}>
          {/* MAPA: primero */}
          <div className={styles.mapWrap} aria-hidden>
            <iframe
              title="Ubicación Liquidadora Lyah"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                brand.address
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
            <a
              className={styles.mapLink}
              href={contact.mapUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Abrir en Google Maps"
            >
              Ver en Google Maps
            </a>
          </div>

          {/* CUADRO BLANCO CON DATOS */}
          <aside className={styles.card} aria-label="Información de contacto">
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.iconWrap}>
                  <MapPin />
                </span>
                <span className={styles.infoText}>{brand.address}</span>
              </li>

              <li className={styles.infoItem}>
                <a className={styles.link} href={`tel:${phoneNumber}`}>
                  <span className={styles.iconWrap}>
                    <Phone />
                  </span>
                  <span className={styles.infoText}>{brand.phone}</span>
                </a>
              </li>

              <li className={styles.infoItem}>
                <a className={styles.link} href={`mailto:${brand.email}`}>
                  <span className={styles.iconWrap}>
                    <Mail />
                  </span>
                  <span className={styles.infoText}>{brand.email}</span>
                </a>
              </li>

              <li className={styles.infoItem}>
                <a
                  className={styles.link}
                  href={`https://instagram.com/${instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.iconWrap}>
                    <Instagram />
                  </span>
                  <span className={styles.infoText}>{brand.instagram}</span>
                </a>
              </li>
            </ul>

            <div className={styles.actions}>
              <a
                href={`https://wa.me/${site.brand.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <MessageCircle />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;

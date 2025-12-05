// src/components/WhatsAppFloat/WhatsAppFloat.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./WhatsAppFloat.module.scss";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat: React.FC = () => {
  const phone = site.brand.phone.replace(/\D/g, "");
  return (
    <a
      className={styles.float}
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      <MessageCircle />
    </a>
  );
};

export default WhatsAppFloat;

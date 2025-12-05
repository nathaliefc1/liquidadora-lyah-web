// src/components/Schedule/Schedule.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./Schedule.module.scss";
import { Clock } from "lucide-react";

const Schedule: React.FC = () => {
  const hours = site.schedule.hours;

  return (
    <section className={styles.section} aria-labelledby="schedule-heading">
      <div className={styles.inner}>
        <div className={styles.card}>
          <header className={styles.header}>
            <div className={styles.iconWrap} aria-hidden>
              <Clock />
            </div>
            <div>
              <h2 id="schedule-heading" className={styles.title}>
                {site.schedule.title}
              </h2>
            </div>
          </header>

          <ul className={styles.list}>
            {hours.map((h, i) => {
              const datetimeFrom = `${h.from}`;
              const datetimeTo = `${h.to}`;
              return (
                <li key={i} className={styles.item}>
                  <span className={styles.label}>{h.label}</span>
                  <span className={styles.timeWrap}>
                    <time dateTime={datetimeFrom} className={styles.timeText}>
                      {h.from}
                    </time>
                    <span className={styles.separator}> — </span>
                    <time dateTime={datetimeTo} className={styles.timeText}>
                      {h.to}
                    </time>
                    <span className={styles.hSuffix}> h</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

// src/components/Categories/Categories.tsx
import React from "react";
import site from "../../data/siteContent";
import styles from "./Categories.module.scss";

// Glob para covers (eager -> se resuelven al inicio para render rápido)
const coverGlob = import.meta.glob(
  "/src/assets/images/categories/**/cover.jpg",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const slugify = (s: string) =>
  s
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

type Category = { label: string; slug: string };

const Categories: React.FC = () => {
  // Normalize data: acepta strings o objetos { label, slug }
  const raw = site.categories.list;
  const categories: Category[] = raw.map((r) =>
    typeof r === "string"
      ? { label: r, slug: slugify(r) }
      : { label: r.label, slug: r.slug ?? slugify(r.label) }
  );

  const getCover = (slug: string) => {
    const entry = Object.entries(coverGlob).find(([p]) =>
      p.includes(`/categories/${slug}/`)
    );
    return entry ? entry[1] : "";
  };

  return (
    <section id="productos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>{site.categories.title}</h2>
          <p>{site.categories.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => {
            const cover = getCover(cat.slug);
            return (
              <article key={cat.slug} className={styles.card} aria-hidden>
                <div className={styles.thumbWrap}>
                  {cover ? (
                    <img
                      src={cover}
                      alt={cat.label}
                      className={styles.thumb}
                      loading="lazy"
                    />
                  ) : null}
                  <div className={styles.thumbOverlay} />
                  <h3 className={styles.cardTitle}>{cat.label}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

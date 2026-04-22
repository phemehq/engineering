import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/architecture"
          >
            View Practices →
          </Link>
        </div>
      </div>
    </header>
  );
}

function GitHubCTA() {
  return (
    <section className={styles.githubCta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div>
            <Heading as="h2">Like what you see?</Heading>
            <p>
              Star us on GitHub and join the community building better
              engineering practices
            </p>
          </div>
          <a
            href="https://github.com/phemehq/pheme"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "button button--primary button--lg",
              styles.githubButton,
            )}
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Opinionated engineering practices for building reliable, simple, and scalable systems."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <GitHubCTA />
    </Layout>
  );
}

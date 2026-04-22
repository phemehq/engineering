import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type PrincipleItem = {
  emoji: string;
  title: string;
  statement: string;
  detail: string;
};

const Principles: PrincipleItem[] = [
  {
    emoji: "",
    title: "Design for 100",
    statement: "Start simple. Scale when needed.",
    detail:
      "Optimize for your actual constraints, not imaginary scale. Premature optimization is the root of complexity.",
  },
  {
    emoji: "",
    title: "Observe Everything",
    statement: "You can't improve what you don't measure.",
    detail:
      "Monitoring, logging, and metrics are non-negotiable. Build observability from day one.",
  },
  {
    emoji: "",
    title: "Security First",
    statement: "Built in, not bolted on.",
    detail:
      "Encryption, secrets management, and access control are defaults. Security is everyone's responsibility.",
  },
  {
    emoji: "",
    title: "Document It",
    statement: "If it's not in Git, it doesn't exist.",
    detail:
      "Everything lives in version control. Tribal knowledge is a liability.",
  },
  {
    emoji: "",
    title: "Automate Ruthlessly",
    statement: "Manual work is debt.",
    detail:
      "CI/CD, IaC, deployment automation. Humans make mistakes. Machines don't.",
  },
  {
    emoji: "",
    title: "Think in Systems",
    statement: "Understand the whole picture.",
    detail:
      "Know your dependencies, failure modes, and blast radius. Design for resilience.",
  },
];

function Principle({ emoji, title, statement, detail }: PrincipleItem) {
  return (
    <div className={clsx("col col--4", styles.principleCard)}>
      <div className={styles.principleEmoji}>{emoji}</div>
      <Heading as="h3" className={styles.principleTitle}>
        {title}
      </Heading>
      <p className={styles.principleStatement}>{statement}</p>
      <p className={styles.principleDetail}>{detail}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.principlesSection}>
      <div className="container">
        <div className={styles.principlesIntro}>
          <Heading as="h2">Engineering Fundamentals</Heading>
          <p>Six principles that guide everything we build</p>
        </div>
        <div className="row">
          {Principles.map((props, idx) => (
            <Principle key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

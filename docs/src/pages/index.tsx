import type { ReactNode } from "react";
import { TriangleAlertIcon } from "lucide-react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import FeatureCards, { FeatureItem } from "@site/src/components/FeatureCards";
import Layout from "@theme/Layout";
import Admonition from "@theme/Admonition";
import styles from "./index.module.css";

const features: FeatureItem[] = [
  {
    title: "Interoperability",
    Svg: require("@site/static/img/feature-cards/undraw_handshake-deal.svg")
      .default,
    description: (
      <>Enable seamless data exchange between different platforms and tools</>
    ),
  },
  {
    title: "Flexibility",
    Svg: require("@site/static/img/feature-cards/undraw_pilates.svg").default,
    description: (
      <>
        Support various game systems and house rules without compromising
        functionality
      </>
    ),
  },
  {
    title: "Extensibility",
    Svg: require("@site/static/img/feature-cards/undraw_abstract.svg").default,
    description: (
      <>Allow for growth and adaptation as new technologies and needs emerge</>
    ),
  },
  {
    title: "Simplicity",
    Svg: require("@site/static/img/feature-cards/undraw_empty-cart.svg")
      .default,
    description: (
      <>Maintain an approachable design that developers can easily implement</>
    ),
  },
  {
    title: "Community-Driven",
    Svg: require("@site/static/img/feature-cards/undraw_online-community.svg")
      .default,
    description: (
      <>Evolve based on the needs and feedback of the TTRPG community</>
    ),
  },
  {
    title: "Openness",
    Svg: require("@site/static/img/feature-cards/undraw_github-profile.svg")
      .default,
    description: (
      <>
        Maintain transparency in development and welcome contributions from the
        community
      </>
    ),
  },
];

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Play Anywhere, Share Everywhere"
    >
      <main>
        <div className={styles.container}>
          <Admonition type="warning" title="Warning">
            RPGXchange is currently in development and the specification is
            subject to change. While we encourage exploration and feedback, we
            recommend against using it in production environments until version
            1.0 is released.
          </Admonition>
          <section className={styles.section}>
            <p className={styles.lead}>
              RPGXchange (RPGX) is an open specification for a versatile data
              interchange format designed to bridge the gap between various
              tabletop roleplaying game (TTRPG) platforms, tools, and
              applications. This format enables seamless transfer of character
              data, game content, and resources across virtual tabletops (VTTs),
              character managers, digital assistants, and other gaming
              platforms.
            </p>
          </section>
          <section className={styles.section}>
            <h2>Why RPGXchange?</h2>
            <p>
              The TTRPG community has experienced tremendous growth in digital
              tools and platforms, each offering unique features and
              capabilities. However, this diversity has led to fragmentation,
              making it challenging for players and game masters to move their
              content between different platforms or use multiple tools together
              effectively.
            </p>
            <p>RPGXchange addresses these challenges by providing:</p>
            <ul>
              <li>
                A standardized way to represent game data across different
                systems and platforms
              </li>
              <li>
                Flexible design that accommodates various TTRPG rulesets,
                including homebrew content
              </li>
              <li>
                Platform-agnostic approach that allows tools to implement
                features based on their capabilities
              </li>
              <li>
                Extensible framework that can grow with the evolving needs of
                the community
              </li>
            </ul>
          </section>
          <section className={styles.section}>
            <h2>Core Design Philosophy</h2>
            <FeatureCards features={features} />
          </section>
          <section className={styles.section}>
            <h2>Project Goals</h2>
            <p>The primary objectives of RPGXchange are to:</p>
            <ul>
              <li>
                Reduce the effort required to transfer character and game data
                between platforms
              </li>
              <li>
                Enable developers to create tools that work across multiple
                gaming platforms
              </li>
              <li>
                Support the preservation of character and campaign data
                independent of any specific platform
              </li>
              <li>Foster innovation in the TTRPG digital tools space</li>
              <li>
                Create a foundation for better integration between gaming tools
                and platforms
              </li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}

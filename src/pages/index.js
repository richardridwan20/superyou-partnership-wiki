import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import SuperyouLogo from '../../static/img/superyou-logo.svg';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        height: '50vh',
        fontSize: '20px',
      }}>
        <div className="container">
          <img src={useBaseUrl('/img/hero-banner.webp')} />
        </div>
        <div className="container" style={{
          display: 'flex-column',
          alignContent: 'left'
        }}>
          <SuperyouLogo title="Superyou Logo" className="logo"></SuperyouLogo>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/integration">
              Let's Get Started - 5min ⏱️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

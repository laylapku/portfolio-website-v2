import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHandPointRight,
  faCheck,
  faMeteor,
  faExternalLinkAlt,
  faMapMarkerAlt,
  faGlobe,
  faEnvelope,
  faMobileAlt,
  faAngleDoubleRight,
  faAngleRight,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Navigation from './Navigation';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            author
            email
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Icons />
        <Navigation />
        {children}
        <CTA data={data} />
        <Footer data={data} />
      </div>
    )}
  />
);

const Icons = function () {
  library.add(
    faGithub,
    faHandPointRight,
    faCheck,
    faMeteor,
    faExternalLinkAlt,
    faMapMarkerAlt,
    faGlobe,
    faEnvelope,
    faMobileAlt,
    faAngleDoubleRight,
    faAngleRight,
    faDownload
  );
  return null;
};

const CTA = function (data) {
  return (
    <section className='section py-5 theme-bg-primary text-white'>
      <div className='container'>
        <h3 className='section-title font-weight-bold text-center mb-2'>
          Send me a message
        </h3>
        <div className='section-intro mx-auto text-center mb-2'>
          You can reach me at{' '}
          <a
            className='link-on-bg'
            href={'mailto:' + data.data.site.siteMetadata.email}
          >
            {data.data.site.siteMetadata.email}
          </a>{' '}
          or use the{' '}
          <Link className='link-on-bg' to='/contact/'>
            contact form
          </Link>
        </div>
      </div>
      {/*//container*/}
    </section>
  );
};

const Footer = function (data) {
  return (
    <footer className='footer text-light text-center py-2'>
      <div>
        <small className='copyright'>
          Copyright &copy; 2024 by{' '}
          <a
            className='text-light'
            href='//sean-lee.glitch.me'
            target='_blank'
            rel='noopener noreferrer'
          >
            {data.data.site.siteMetadata.author}
          </a>
        </small>
      </div>
    </footer>
  );
};

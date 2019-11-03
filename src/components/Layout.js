import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHandPointRight,
  faCheck,
  faMeteor,
  faExternalLinkAlt,
  faMapMarkerAlt,
  faHome,
  faEnvelope,
  faPhoneSquare,
  faAngleDoubleRight,
  faAngleRight,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import ProfilePic from "../images/profile.png";
import Navigation from "./Navigation";

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
    render={data => (
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

const Icons = function() {
  library.add(
    faGithub,
    faHandPointRight,
    faCheck,
    faMeteor,
    faExternalLinkAlt,
    faMapMarkerAlt,
    faHome,
    faEnvelope,
    faPhoneSquare,
    faAngleDoubleRight,
    faAngleRight,
    faDownload
  );
  return null;
};

const CTA = function(data) {
  return (
    <section className="section py-5 theme-bg-primary text-white">
      <div className="container">
        <div className="text-center">
          <img
            className="profile-small d-inline-block mx-auto rounded-circle mb-2"
            src={ProfilePic}
            alt=""
          />
        </div>
        <h3 className="section-title font-weight-bold text-center mb-2">
          Looking for a passionate developer to join your team?
        </h3>
        <div className="section-intro mx-auto text-center mb-2">
          Just drop me an email at{" "}
          <a
            className="link-on-bg"
            href={"mailto:" + data.data.site.siteMetadata.email}
          >
            {data.data.site.siteMetadata.email}
          </a>{" "}
          or use the{" "}
          <Link className="link-on-bg" to="/contact/">
            contact form
          </Link>
          .
        </div>
      </div>
      {/*//container*/}
    </section>
  );
};

const Footer = function(data) {
  return (
    <footer className="footer text-light text-center py-2">
      <div>
        <small className="copyright">
          Copyright &copy; 2019 by{" "}
          <a
            className="text-light"
            href="//sean-lee.glitch.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.data.site.siteMetadata.author}
          </a>
        </small>
      </div>
      <div>
        <small className="copyright">
          Theme design from{" "}
          <a
            className="text-light"
            href="//www.3rdwavemedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>3rdwavemedia</em>
          </a>
        </small>
      </div>
    </footer>
  );
};

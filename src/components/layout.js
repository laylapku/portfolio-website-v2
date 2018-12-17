import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Header from "./header"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubAlt, faNodeJs, faFreeCodeCamp, faCodepen, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome, faArrowUp, faArrowDown, faPlay, faPause, faRedo, faQuoteLeft, faQuoteRight, faCheck, faDownload, faExternalLinkAlt, faBuilding, faWrench } from '@fortawesome/free-solid-svg-icons'
import { addBackToTop } from 'vanilla-back-to-top'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
        query {
          site {
              siteMetadata {
                name
                email
                pic
                year
              }
          }
        }
    `}
    render={data => (
      <div>
        <Scripts />
        <Header />
        {children}
        <CTA data={data} />
        <Footer data={data} />
      </div>
    )}
  />
)

const Scripts = function () {
  library.add(faGithubAlt, faNodeJs, faFreeCodeCamp, faCodepen, faStackOverflow, faTwitter, faHome, faArrowUp, faArrowDown, faPlay, faPause, faRedo, faQuoteLeft, faQuoteRight, faCheck, faDownload, faExternalLinkAlt, faBuilding, faWrench);
  return null;
}

const CTA = function (data) {
  return (
    <section className="section py-5 theme-bg-primary text-white">
      <div className="container">
        <div className="text-center">
          <img className="profile-small d-inline-block mx-auto rounded-circle mb-2" src={data.data.site.siteMetadata.pic} alt="" />
        </div>
        <h3 className="section-title font-weight-bold text-center mb-2">Interested in hiring me for your project?</h3>
        <div className="section-intro mx-auto text-center mb-3">
          Looking for a passionate full-stack developer to build your web app? To start an initial chat, just drop me an email at <a className="link-on-bg" href={"mailto:"+data.data.site.siteMetadata.email}>{data.data.site.siteMetadata.email}</a> or use the <Link className="link-on-bg" to="/contact/">form on the contact page</Link>.
        </div>
        <div className="text-center">
          <Link className="theme-btn-on-bg btn" to="/contact/">Let's Talk</Link>
        </div>
      </div>{/*//container*/}
    </section>
  );
}

const Footer = function (data) {
  addBackToTop();
  return (
    <footer className="footer text-light text-center py-2">
      <div>
        <small className="copyright">Copyright &copy; {data.data.site.siteMetadata.year} by <a className="text-light" href="//sean-lee.glitch.me" target="_blank" rel="noopener noreferrer">{data.data.site.siteMetadata.name}</a></small>
      </div>
      <div>
        <small className="copyright">Designed by <a className="text-light" href="//www.3rdwavemedia.com" target="_blank" rel="noopener noreferrer">Xiaoying Riley</a></small>
      </div>
    </footer>
  );
}
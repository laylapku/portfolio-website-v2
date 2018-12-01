import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubAlt, faNodeJs, faFreeCodeCamp, faCodepen, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { addBackToTop } from 'vanilla-back-to-top'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export default ({ children }) => (
  <div>
    <Scripts />
    <Header />
    {children}
    <CTA />
    <Footer />
  </div>
)

const Scripts = function () {
  library.add(faGithubAlt, faNodeJs, faFreeCodeCamp, faCodepen, faStackOverflow, faHome);
  return null;
}

const CTA = function () {
  return (
    <section className="section py-5 theme-bg-primary text-white">
      <div className="container">
        <div className="text-center">
          <img className="profile-small d-inline-block mx-auto rounded-circle mb-2" src="/images/profile.jpg" alt="" />
        </div>
        <h3 className="section-title font-weight-bold text-center mb-2">Interested in hiring me for your project?</h3>
        <div className="section-intro mx-auto text-center mb-3">
          Looking for a passionate full-stack developer to build your web app? To start an initial chat, just drop me an email at <a className="link-on-bg" href="mailto:iamleexiang@gmail.com">iamleexiang@gmail.com</a> or use the <Link className="link-on-bg" to="/contact/">form on the contact page</Link>.
        </div>
        <div className="text-center">
          <Link className="theme-btn-on-bg btn" to="/contact/">Let's Talk</Link>
        </div>
      </div>{/*//container*/}
    </section>
  );
}

const Footer = function () {
  addBackToTop();
  return (
    <footer className="footer text-light text-center py-2">
      <div className="container">
        <small className="copyright">Copyright &copy; 2018 by <a className="text-light" href="//sean-lee.glitch.me" target="_blank" rel="noopener noreferrer">Sean Lee</a> </small>
      </div>
      <div className="container">
        <small className="copyright">Designed by <a className="text-light" href="//www.3rdwavemedia.com" target="_blank" rel="noopener noreferrer">Xiaoying Riley</a> </small>
      </div>
    </footer>
  );
}
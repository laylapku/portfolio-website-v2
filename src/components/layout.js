import React from "react"
import { Link } from "gatsby"
import "./bootstrap.css"
import "./style.css"

export default ({ children }) => (
  <div>
    <Header path="about" />
    {children}
    <CTA />
    <Footer />
  </div>
)

const Header = function(args) {  
  return (
    <header className="header">      
      <div className="top-bar theme-bg-primary-darken">            
        <div className="container-fluid">            
          <nav className="navbar navbar-expand-lg navbar-dark position-relative">
            <ul className="social-list list-inline mb-0"> 
              <li className="list-inline-item"><a className="text-white" href="//github.com/ilovepku"><i className="fab fa-github-alt fa-fw"></i></a></li>
              <li className="list-inline-item"><a className="text-white" href="//glitch.com/@ilovepku"><i className="fab fa-node-js fa-fw"></i></a></li>
              <li className="list-inline-item"><a className="text-white" href="//codepen.io/ilovepku"><i className="fab fa-codepen fa-fw"></i></a></li>
              <li className="list-inline-item"><a className="text-white" href="//freecodecamp.org/ilovepku"><i className="fab fa-free-code-camp fa-fw"></i></a></li>
            </ul>{/*//social-list*/}					
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-uppercase" id="navigation">
              <ul className="navbar-nav ml-lg-auto">
                <li className={"nav-item mr-lg-3" + (args.path==="about" ? " active" : "")}>
                  <Link className="nav-link" to="/about/">About</Link>
                </li>
                <li className={"nav-item mr-lg-3" + (args.path==="projects" ? " active" : "")}>
                  <Link className="nav-link" to="/projects/">Projects</Link>
                </li>
                <li className={"nav-item mr-lg-3" + (args.path==="resume" ? " active" : "")}>
                  <Link className="nav-link" to="/resume/">Resume</Link>
                </li>
                <li className={"nav-item mr-lg-3" + (args.path==="contact" ? " active" : "")}>
                  <Link className="nav-link" to="/contact/">Contact</Link>
                </li>						
              </ul>
              <span id="slide-line"></span>
            </div>					
          </nav>
        </div>{/*//container*/}
      </div>{/*//top-bar*/}     
    </header>
  );
}

const CTA = function() {
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

const Footer = function() {
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
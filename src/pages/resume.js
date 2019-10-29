import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ProfilePic from "../images/profile.png";

const ResumePage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSocialsJson(limit: 4) {
          edges {
            node {
              id
              url
              icon
            }
          }
        }
        allExpJson {
          edges {
            node {
              id
              role
              time
              desc
              techs
            }
          }
        }
        site {
          siteMetadata {
            author
            email
          }
        }
      }
    `
  );

  // webpack feature: function mapping all *.svg paths to the actual data:image
  const reqSvgs = require.context("../images/social-icons", true, /\.svg$/);
  return (
    <Layout>
      <SEO title="Resume" />
      <div className="header-intro header-intro-resume theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-3">Resume</h2>
          {/*  <a
             className="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto"
             href="/"
           >
             <FontAwesomeIcon className="mr-2" icon="download" />
             Download PDF Version
           </a> */}
        </div>
        {/*//container*/}
      </div>
      {/*//header-intro*/}
      <article className="resume-wrapper text-center position-relative">
        <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
          <header className="resume-header pt-4 pt-md-0">
            <div className="media flex-column flex-md-row align-items-center">
              <img
                className="mr-3 img-fluid picture mx-auto"
                src={ProfilePic}
                alt=""
              />
              <div className="media-body p-3 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  <h1 className="name mt-0 mb-1 text-white text-uppercase">
                    {data.site.siteMetadata.author}
                  </h1>
                  <h4 className="mb-3 font-weight-normal">Web Developer</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <FontAwesomeIcon className="mr-2" icon="home" />
                      <a href="//laylaoy.netlify.com">laylaoy.netlify.com</a>
                    </li>
                    <li className="mb-2">
                      <FontAwesomeIcon className="mr-2" icon="envelope" />
                      <a href={"mailto:" + data.site.siteMetadata.email}>
                        {data.site.siteMetadata.email}
                      </a>
                    </li>
                  </ul>
                </div>
                {/*//primary-info*/}
                <div className="secondary-info ml-md-auto">
                  <ul className="resume-social list-unstyled">
                    {data.allSocialsJson.edges.map(item => (
                      <li className="mb-3" key={item.node.id}>
                        <a href={item.node.url}>
                          <span className="fa-container text-center mr-2">
                            <img
                              alt={item}
                              className="img-fluid"
                              src={reqSvgs(
                                `./${item.node.icon.toLowerCase()}.svg`
                              )}
                            />
                          </span>
                          {item.node.url.slice(2)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                {/*//secondary-info*/}
              </div>
              {/*//media-body*/}
            </div>
            {/*//media*/}
          </header>
          <div className="resume-body p-5">
            <section className="resume-section summary-section mb-5">
              <h2 className="resume-section-title font-weight-bold pb-3 mb-3">
                A few words about me...
              </h2>
              <div className="resume-section-content">
                <p className="mb-0">
                  I'm a self-taught web developer. I started as an absolute
                  beginner a year ago, and now I'm building my own open source
                  project: Eloqua - a progressive web app that enables listening
                  to famous speeches on smartphones. <br />
                  This may not sound like a whole lot of experience, but
                  building Eloqua has been a huge milestone for me. It's with
                  this experience that I feel confident and determined to embark
                  on my new career path as a programmer. <br />
                  I'm an efficient and enthusiastic learner, and currently
                  looking for an opportunity to learn from experienced seniors
                  and build interesting stuff together.
                </p>
              </div>
            </section>
            {/*//summary-section*/}
            <div className="row">
              <div className="col-lg-8">
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Experience
                  </h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      {data.allExpJson.edges.map(item => (
                        <article
                          className="resume-timeline-item position-relative"
                          key={item.node.id}
                        >
                          <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                              <h3 className="resume-position-title font-weight-bold mb-1">
                                {item.node.role}{" "}
                                <small className="text-muted"></small>
                              </h3>
                            </div>
                            {/*//row*/}
                            <div className="resume-position-time">
                              {item.node.time}
                            </div>
                          </div>
                          {/*//resume-timeline-item-header*/}
                          <div className="resume-timeline-item-desc">
                            <p>{item.node.desc}</p>
                            <h4 className="resume-timeline-item-desc-heading font-weight-bold">
                              Technologies used:
                            </h4>
                            <ul className="list-inline">
                              {item.node.techs.map((ele, idx) => (
                                <li
                                  className="list-inline-item"
                                  key={item.node.id + "_tech_" + idx}
                                >
                                  <span className="badge badge-secondary badge-pill">
                                    {ele}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/*//resume-timeline-item-desc*/}
                        </article>
                      ))}
                      {/*//resume-timeline-item*/}
                    </div>
                    {/*//resume-timeline*/}
                  </div>
                </section>
                {/*//experience-section*/}
              </div>
              <div className="col-lg-4">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Skills &amp; Tools
                  </h2>
                  <div className="resume-skill-item">
                    <h4 className="resume-skills-cat font-weight-bold">
                      Technical
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-2 badge badge-light">
                        JavaScript/React
                      </li>
                      <li className="mb-2 badge badge-light">Node.js</li>
                      <li className="mb-2 badge badge-light">
                        Serverless/Cloud
                      </li>
                      <li className="mb-2 badge badge-light">Product Design</li>
                      <li className="mb-2 badge badge-light">UI/UX Design</li>
                    </ul>
                  </div>
                  <div className="resume-skill-item">
                    <h4 className="resume-skills-cat font-weight-bold">
                      Professional
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-2 badge badge-light">
                        Efficient Learner
                      </li>
                      <li className="mb-2 badge badge-light">Team Player</li>
                      <li className="mb-2 badge badge-light">Self-Driven</li>
                      <li className="mb-2 badge badge-light">Enthusiastic</li>
                    </ul>
                  </div>
                </section>
                {/*//skills-section*/}
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Education
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">
                          MA in English Literature
                        </div>
                        <div className="resume-degree-org">
                          Peking University
                        </div>
                        <div className="resume-degree-time">2012 - 2015</div>
                      </li>
                    </ul>
                  </div>
                </section>
                {/*//education-section*/}
                <section className="resume-section language-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Languages
                  </h2>
                  <div className="resume-section-content">
                    <div className="resume-lang-item mb-2">
                      <div className="resume-lang-name font-weight-bold">
                        Chinese<span className="text-muted"> (Native)</span>
                      </div>
                    </div>
                    <div className="resume-lang-item mb-2">
                      <div className="resume-lang-name font-weight-bold">
                        English<span className="text-muted"> (Advanced)</span>
                      </div>
                      <small className="font-weight-normal">
                        Master Degree
                      </small>
                    </div>
                    <div className="resume-lang-item">
                      <div className="resume-lang-name font-weight-bold">
                        German
                        <span className="text-muted"> (Intermediate)</span>
                      </div>
                      <ul className="list-unstyled">
                        <li>
                          <small>
                            Graduate Level 2nd Foreign Language Course
                          </small>
                        </li>
                        <li>
                          <small>Duolingo German with Full Skill Levels</small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                {/*//language-section*/}
                <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">
                    Interests
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-interests-list mb-0">
                      <li className="mb-2 badge badge-light">Music</li>
                      <li className="mb-2 badge badge-light">Reading</li>
                      <li className="mb-2 badge badge-light">Cooking</li>
                      <li className="mb-2 badge badge-light">Tennis</li>
                    </ul>
                  </div>
                </section>
                {/*//interests-section*/}
              </div>
            </div>
            {/*//row*/}
          </div>
          {/*//resume-body*/}
        </div>
      </article>
    </Layout>
  );
};

export default ResumePage;

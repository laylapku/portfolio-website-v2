import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import ProfilePic from "../images/profile.png";
import { reqSocialSvgs } from "../utils/svgs.util";
import Resume from "../assets/leilei-ouyang-developer-resume.pdf";

const ResumePage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { glob: "**/src/pages/projects/*.md" }
            frontmatter: { featured: { ne: false } }
          }
          sort: { fields: [frontmatter___order], order: ASC }
        ) {
          nodes {
            id
            frontmatter {
              path
              name
              madeFor
              summa
            }
          }
        }
        allSocialsJson(limit: 5) {
          nodes {
            id
            url
            icon
          }
        }
        allExpJson {
          nodes {
            id
            role
            corp
            time
            desc
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

  return (
    <Layout>
      <SEO title="Resume" />
      <div className="header-intro header-intro-resume theme-bg-primary text-white py-5">
        <div className="container position-relative">
          <h2 className="page-heading mb-3">Resume</h2>
          {/* <a
            className='btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto'
            href={Resume}
          >
            <FontAwesomeIcon className='mr-2' icon='download' />
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
                className="img-fluid picture mx-auto"
                src={ProfilePic}
                alt=""
              />
              <div className="media-body px-3 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                <div className="primary-info">
                  <h3 className="name my-3 text-white text-uppercase">
                    {data.site.siteMetadata.author}
                  </h3>
                  <h5 className="title font-weight-light">
                    Full Stack Software Engineer
                  </h5>
                  <h5 className="title mb-3 font-weight-light">
                    AWS Certified Solutions Architect/DevOps Engineer Professional
                  </h5>
                  <ul className="resume-social list-unstyled font-weight-light mb-0">
                    {/* <li className="mb-2">
                      <FontAwesomeIcon className="mr-2" icon="map-marker-alt" />
                      Munich, Germany
                    </li> */}
                    <li className="mb-2">
                      <FontAwesomeIcon className="mr-2" icon="envelope" />
                      <a href="mailto:Leileioy@gmail.com">
                        {data.site.siteMetadata.email}
                      </a>
                    </li>
                  </ul>
                </div>
                {/*//primary-info*/}
                <div className="secondary-info ml-md-auto">
                  <ul className="resume-social list-unstyled">
                    {data.allSocialsJson.nodes.map(({ id, url, icon }) => (
                      <li className="my-3" key={id}>
                        <a href={url}>
                          <span className="fa-container text-center mr-2">
                            <img
                              alt={icon}
                              className="img-fluid"
                              src={reqSocialSvgs(`./${icon.toLowerCase()}.svg`)}
                            />
                          </span>
                          {url.slice(2)}
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
              <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-2">
                Summary
              </h2>
              <div className="resume-section-content">
                I am: <br />
                <p className="mb-0">
                  <FontAwesomeIcon className="mr-2" icon="angle-double-right" />
                  a self-taught full-stack developer with 4 years of professional experience in web development and cloud engineering, including my open
                  source project: Eloqua, an app with both web and native
                  versions, that provides a good listening experience of famous
                  English speeches
                </p>
                <p className="mb-0">
                  <FontAwesomeIcon className="mr-2" icon="angle-double-right" />
                  a fast and avid learner with a tech focus on JS/TS/React/Node/Python/AWS services
                </p>
                <p className="mb-0">
                  <FontAwesomeIcon className="mr-2" icon="angle-double-right" />
                  an aspiring and self-driven individual always aiming at
                  building practical end-user facing products using modern technologies
                </p>
              </div>
            </section>
            {/*//summary-section*/}
            <div className="row">
              <div className="col-lg-9">
                <section className="resume-section project-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-2">
                    Personal Projects
                  </h2>
                  {data.allMarkdownRemark.nodes.map(
                    ({ id, frontmatter: { path, name, madeFor, summa } }) => (
                      <div className="resume-section-content mb-3" key={id}>
                        <div className="d-flex flex-column flex-md-row">
                          <h3 className="resume-project-name font-weight-bold mb-1">
                            <Link to={path} className="theme-link">
                              {name}
                            </Link>
                          </h3>
                          <div className="resume-project-for ml-auto">
                            {madeFor}
                          </div>
                        </div>
                        <p className="resume-project-summa mb-2">{summa}</p>
                      </div>
                    )
                  )}
                </section>
                {/*//project-section*/}
                <section className="resume-section experience-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-2">
                    Work Experience
                  </h2>
                  <div className="resume-section-content">
                    <div className="resume-timeline position-relative">
                      {data.allExpJson.nodes.map(
                        ({ id, role, corp, time, desc }) => (
                          <article
                            className="resume-timeline-item position-relative"
                            key={id}
                          >
                            <div className="resume-timeline-item-header mb-2">
                              <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">
                                  {role} <small className="text-muted"></small>
                                </h3>
                                <div className="resume-company-name ml-auto">
                                  {corp}
                                </div>
                              </div>
                              {/*//row*/}
                              <div className="resume-position-time">{time}</div>
                            </div>
                            {/*//resume-timeline-item-header*/}
                            <div className="resume-timeline-item-desc">
                              <ul>
                                {desc.map((item, idx) => (
                                  <li key={"desc" + idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                            {/*//resume-timeline-item-desc*/}
                          </article>
                        )
                      )}
                      {/*//resume-timeline-item*/}
                    </div>
                    {/*//resume-timeline*/}
                  </div>
                </section>
                {/*//experience-section*/}
              </div>
              <div className="col-lg-3">
                <section className="resume-section skills-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-2">
                    Skills &amp; Tools
                  </h2>
                  <div className="resume-skill-item">
                    <h4 className="resume-skills-cat font-weight-bold">
                      Technical
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-1 badge badge-light">
                        JavaScript/Typescript/CSS/HTML
                      </li>
                      <li className="mb-1 badge badge-light">
                        React/Redux/Next/Sass
                      </li>
                      <li className="mb-1 badge badge-light">
                        Storybook/MaterialUI/Bootstrap
                      </li>
                      <li className="mb-1 badge badge-light">
                        AWS/Azure/Terraform/GitLab CI/Docker
                      </li>
                      <li className="mb-1 badge badge-light">
                        Node.js/Python/REST/GraphQL/MongoDB
                      </li>
                    </ul>
                  </div>
                  <div className="resume-skill-item">
                    <h4 className="resume-skills-cat font-weight-bold">
                      Non-Technical
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-1 badge badge-light">
                        Fast Learner
                      </li>
                      <li className="mb-1 badge badge-light">Excellent communicator</li>
                      <li className="mb-1 badge badge-light">Team Player</li>
                    </ul>
                  </div>
                </section>
                {/*//skills-section*/}
                <section className="resume-section education-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-2">
                    Education
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">
                          1800 hrs coursework(full-stack)
                        </div>
                        <div className="resume-degree-org">freeCodeCamp</div>
                        <div className="resume-degree-time">2018 - 2019</div>
                      </li>
                      <li className="mb-2">
                        <div className="resume-degree font-weight-bold">
                          MA in English Language and Literature
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
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-2">
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
                        English
                        <span className="text-muted"> (Full Professional)</span>
                      </div>
                    </div>
                    <div className="resume-lang-item">
                      <div className="resume-lang-name font-weight-bold">
                        German
                        <span className="text-muted"> (B1)</span>
                      </div>
                      {/* <ul className="list-unstyled">
                        <li>
                          <small>Duolingo German with Full Skill Levels</small>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                </section>
                {/*//language-section*/}
                {/* <section className="resume-section interests-section mb-5">
                  <h2 className="resume-section-title text-uppercase font-weight-bold pb-2 mb-2">
                    Interests
                  </h2>
                  <div className="resume-section-content">
                    <ul className="list-unstyled resume-interests-list mb-0">
                      <li className="mb-2 badge badge-light">Skiing</li>
                      <li className="mb-2 badge badge-light">Music</li>
                      <li className="mb-2 badge badge-light">Travel</li>
                      <li className="mb-2 badge badge-light">Cooking</li>
                    </ul>
                  </div>
                </section>
                //interests-section */}
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

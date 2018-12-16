import React from "react"
import { graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../components/layout"

export default ({ data }) =>
    <Layout>
        <div className="header-intro header-intro-resume theme-bg-primary text-white py-5">
            <div className="container position-relative">
                <h2 className="page-heading mb-3">Resume</h2>
                <a className="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto" href="#"><FontAwesomeIcon className="mr-2" icon="download" />Download PDF Version</a>
            </div>{/*//container*/}
        </div>{/*//header-intro*/}
        <article className="resume-wrapper text-center position-relative">
            <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
                <header className="resume-header pt-4 pt-md-0">
                    <div className="media flex-column flex-md-row">
                        <img className="mr-3 img-fluid picture mx-auto" src={data.site.siteMetadata.pic} alt="" />
                        <div className="media-body p-3 d-flex flex-column flex-md-row mx-auto mx-lg-0">
                            <div className="primary-info">
                                <h1 className="name mt-0 mb-1 text-white text-uppercase">{data.site.siteMetadata.name}</h1>
                                <div className="title mb-3">Full Stack Developer</div>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href={"mailto:"+data.site.siteMetadata.email}><i className="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>{data.site.siteMetadata.email}</a></li>
                                    <li><a href="tel:+86-139-1106-6746"><i className="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>+86 139 1106 6746</a></li>
                                </ul>
                            </div>{/*//primary-info*/}
                            <div className="secondary-info ml-md-auto">
                                <ul className="resume-social list-unstyled">
                                    <li className="mb-3"><a href="//sean-lee.glitch.me"><span className="fa-container text-center mr-2"><FontAwesomeIcon icon="home" /></span>sean-lee.glitch.me</a></li>
                                    {data.allSocialsJson.edges.map((item) => (
                                        <li className="mb-3" key={item.node.id}><a href={item.node.url}><span className="fa-container text-center mr-2"><FontAwesomeIcon icon={['fab', item.node.icon]} /></span>{item.node.disp}</a></li>
                                    ))}
                                </ul>
                            </div>{/*//secondary-info*/}
                        </div>{/*//media-body*/}
                    </div>{/*//media*/}
                </header>
                <div className="resume-body p-5">
                    <section className="resume-section summary-section mb-5">
                        <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
                        <div className="resume-section-content">
                            <p className="mb-0">Summarise your career here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can download this free resume/CV template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget.</p>
                        </div>
                    </section>{/*//summary-section*/}
                    <div className="row">
                        <div className="col-lg-9">
                            <section className="resume-section experience-section mb-5">
                                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
                                <div className="resume-section-content">
                                    <div className="resume-timeline position-relative">
                                        {data.allExpJson.edges.map((item) => (
                                            <article className="resume-timeline-item position-relative" key={item.node.id}>
                                                <div className="resume-timeline-item-header mb-2">
                                                    <div className="d-flex flex-column flex-md-row">
                                                        <h3 className="resume-position-title font-weight-bold mb-1">{item.node.role} <small className="text-muted">(Intern)</small></h3>
                                                        <div className="resume-company-name ml-auto">{item.node.co}</div>
                                                    </div>{/*//row*/}
                                                    <div className="resume-position-time">{item.node.time}</div>
                                                </div>{/*//resume-timeline-item-header*/}
                                                <div className="resume-timeline-item-desc">
                                                    <p>{item.node.desc}</p>
                                                    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                                                    <ul className="list-inline">
                                                        {item.node.tech.map((ele, idx) => (
                                                            <li className="list-inline-item" key={item.node.id + "_tech_" + idx}><span className="badge badge-secondary badge-pill">{ele}</span></li>
                                                        ))}
                                                    </ul>
                                                </div>{/*//resume-timeline-item-desc*/}
                                            </article>
                                        ))}{/*//resume-timeline-item*/}
                                    </div>{/*//resume-timeline*/}
                                </div>
                            </section>{/*//experience-section*/}
                        </div>
                        <div className="col-lg-3">
                            <section className="resume-section skills-section mb-5">
                                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
                                <div className="resume-section-content">
                                    {data.allSkillsJson.edges.map((item) => (
                                        <div className="resume-skill-item" key={item.node.id}>
                                            <h4 className="resume-skills-cat font-weight-bold">{item.node.name}</h4>
                                            <ul className="list-inline">
                                                {item.node.value.map((ele, idx) => (
                                                    <li className="list-inline-item" key={item.node.id + "_skill_" + idx}><span className="badge badge-light">{ele}</span></li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}{/*//resume-skill-item*/}
                                </div>{/*resume-section-content*/}
                            </section>{/*//skills-section*/}
                            <section className="resume-section education-section mb-5">
                                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
                                <div className="resume-section-content">
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <div className="resume-degree font-weight-bold">Graduate Coursework in English Literature</div>
                                            <div className="resume-degree-org">Peking University</div>
                                            <div className="resume-degree-time">2011 - 2014</div>
                                        </li>
                                        <li>
                                            <div className="resume-degree font-weight-bold">BA in English Literature</div>
                                            <div className="resume-degree-org">Peking University</div>
                                            <div className="resume-degree-time">2007 - 2011</div>
                                        </li>
                                    </ul>
                                </div>
                            </section>{/*//education-section*/}
                            <section className="resume-section language-section mb-5">
                                <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
                                <div className="resume-section-content">
                                    <ul className="list-unstyled resume-lang-list">
                                        <li className="mb-2"><span className="resume-lang-name font-weight-bold">Chinese</span> <small className="text-muted font-weight-normal">(Native)</small></li>
                                        <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Full Professional)</small></li>
                                        <li><span className="resume-lang-name font-weight-bold">German</span> <small className="text-muted font-weight-normal">(Limited Working)</small></li>
                                    </ul>
                                </div>
                            </section>{/*//language-section*/}
                        </div>
                    </div>{/*//row*/}
                </div>{/*//resume-body*/}
            </div>
        </article>
    </Layout>

export const query = graphql`
    query {
        allSkillsJson {
            edges {
                node {
                    id
                    name
                    icon
                    value
                }
            }
        }
        allSocialsJson(limit: 4) {
            edges {
                node {
                    id
                    url
                    icon
                    disp
                }
            }
        }
        allExpJson {
            edges {
                node {
                    id
                    role
                    co
                    time
                    desc
                    tech
                }
            }
        }
        site {
            siteMetadata {
                name
                email
                pic
            }
        }
    }
`
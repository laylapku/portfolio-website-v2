import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) =>
    <Layout>
        <div className="header-intro theme-bg-primary text-white py-5">
            <div className="container">
                <div className="profile-teaser media flex-column flex-md-row">
                    <img alt="" className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="/images/profile.jpg" />
                    <div className="media-body text-center text-md-left">
                        <div className="lead">Hello, my name is</div>
                        <h2 className="mt-0 display-4 font-weight-bold">Sean Lee</h2>
                        <div className="bio mb-3">I'm a full-stack developer specialised in frontend and backend web app development. Want to know how I may help your project? Check out my project <Link className="link-on-bg" to="/projects/">case studies</Link> and <Link className="link-on-bg" to="/resume/">resume</Link>.</div>{/*//bio*/}
                        <Link className="theme-btn-on-bg btn font-weight-bold theme-btn-cta" to="/contact/">Hire Me</Link>
                    </div>{/*//media-body*/}
                </div>{/*//profile-teaser*/}
            </div>{/*//container*/}
        </div>{/*//header-intro*/}
        <section className="skills-section section py-5">
            <div className="container">
                <h3 className="section-title font-weight-bold text-center mb-3">Skills Overview</h3>
                <div className="section-intro mx-auto text-center mb-5 text-secondary">I have more than 8 years' experience building rich web applications for clients all over the world. Below is a quick overview of my main technical skill sets and tools I use. Want to find out more about my experience? <Link to="/resume/">Check out my online resume</Link>.</div>
                <div className="skills-blocks mx-auto pt-5">
                    <div className="row">
                        {data.allSkillsJson.edges.map((item) => (
                            <div className="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0" key={item.node.id}>
                                <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                                    <h4 className="skills-cat text-center mb-3 mt-5">{item.node.name}</h4>
                                    <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                                        <img alt="" className="skills-icon" src={item.node.icon} />
                                    </div>
                                    <ul className="skills-list list-unstyled text-secondary">
                                        {item.node.value.map((ele, idx) => (
                                            <li className="mb-2" key={item.node.id + "_skill_" + idx}><i className="fas fa-check mr-2 text-primary"></i>{ele}</li>
                                        ))}
                                    </ul>
                                </div>{/*//skills-block-inner*/}
                            </div>
                        ))}{/*//skills-block*/}
                    </div>{/*//row*/}
                </div>
            </div>{/*//container*/}
        </section>{/*//skills-section*/}
        <section className="section-proof section bg-white py-5">
            <div className="container">
                <h3 className="section-title font-weight-bold text-center mb-5">Great clients I've worked with</h3>
                <div className="logos row mb-5">
                    {data.allProjectsJson.edges.map((item) => (
                        <div className="logo px-3 col-6 col-md-4 col-lg-2 mr-0 px-md-5 px-lg-4" key={item.node.id}><Link className="logo-link" to={item.node.url}><img alt="" className="img-fluid svg-ie-fix" src={item.node.logo} /></Link></div>
                    ))}
                </div>
            </div>
        </section>
        <section className="section-featured-projects py-5">
            <div className="container">
                <h3 className="section-title font-weight-bold text-center mb-5">Featured Projects</h3>
                <div className="project-cards row mb-5">
                    {data.allProjectsJson.edges.map((item) => (
                        <div className="col-12 col-lg-4" key={item.node.id}>
                            <div className="card rounded-0 border-0 shadow-sm mb-5 mb-lg-0">
                                <div className="card-img-container position-relative">
                                    <img alt="" className="card-img-top rounded-0" src={item.node.thumb} />
                                    <div className="card-img-overlay overlay-logo text-center">
                                        <div className="project-logo"><img alt="" className="img-fluid w-50" src={item.node.logo_inv} /></div>
                                    </div>
                                    <Link className="card-img-overlay overlay-content text-left p-lg-4" to={item.node.url}>
                                        <h5 className="card-title font-weight-bold">{item.node.for}</h5>
                                        <p className="card-text">{item.node.desc}</p>
                                    </Link>
                                </div>
                                <div className="card-body pb-0">
                                    <h4 className="card-title text-truncate text-center mb-0"><Link to={item.node.url}>{item.node.name}</Link></h4>
                                </div>
                                <div className="card-footer border-0 text-center bg-white pb-4">
                                    <ul className="list-inline mb-0 mx-auto">
                                        {item.node.techs.split(" ").map((ele, idx) => (
                                            <li className="list-inline-item" key={item.node.id + "_tech_" + idx}><span className="badge badge-secondary badge-pill">{ele}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>{/*//card*/}
                        </div>
                    ))}
                </div>{/*//row*/}
                <div className="text-center">
                    <Link className="btn btn-primary" to="/projects/">View all projects</Link>
                </div>
            </div>{/*///container*/}
        </section>
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
        allProjectsJson(limit: 3) {
            edges {
                node {
                    id
                    name
                    for
                    thumb
                    logo
                    logo_inv
                    url
                    desc
                    techs
                }
            }
        }
    }
`
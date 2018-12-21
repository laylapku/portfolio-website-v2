import React from "react"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from "../components/layout"
import ProjectCards from "../components/cards"

export default ({ data }) =>
    <Layout>
        <div className="header-intro theme-bg-primary text-white py-5">
            <div className="container">
                <div className="profile-teaser media flex-column flex-md-row">
                    <img alt="" className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src={data.site.siteMetadata.pic} />
                    <div className="media-body text-center text-md-left">
                        <div className="lead">Hello, my name is</div>
                        <h2 className="mt-0 display-4 font-weight-bold">{data.site.siteMetadata.name}</h2>
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
                            <div className="skills-block col-12 col-lg-4 mb-5 mb-lg-0" key={item.node.id}>
                                <div className="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
                                    <h4 className="skills-cat text-center mb-3 mt-5">{item.node.name}</h4>
                                    <div className="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                                        <img alt="" className="skills-icon" src={item.node.icon} />
                                    </div>
                                    <ul className="skills-list list-unstyled text-secondary">
                                        {item.node.value.map((ele, idx) => (
                                            <li className="mb-2" key={item.node.id + "_skill_" + idx}><FontAwesomeIcon className="mr-2 text-primary" icon="check" />{ele}</li>
                                        ))}
                                    </ul>
                                </div>{/*//skills-block-inner*/}
                            </div>
                        ))}{/*//skills-block*/}
                    </div>{/*//row*/}
                </div>
            </div>{/*//container*/}
        </section>{/*//skills-section*/}
        <ProjectCards />
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
        site {
            siteMetadata {
                name
                pic
            }
        }
    }
`